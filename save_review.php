<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

$rawInput = file_get_contents('php://input');
file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . " - Input: " . $rawInput . "\n", FILE_APPEND);
$input = json_decode($rawInput, true);

$lang = isset($input['lang']) ? trim($input['lang']) : 'ru';
if ($lang !== 'ru' && $lang !== 'en' && $lang !== 'ro') {
    $lang = 'ru';
}

// Localized messages helper
$messages = [
    'ru' => [
        'spam' => 'Обнаружена спам-активность.',
        'invalid' => 'Некорректно заполнены поля формы.',
        'links' => 'Отзывы не могут содержать ссылки или адреса сайтов.',
        'rate_limit' => 'Вы отправляете отзывы слишком часто. Пожалуйста, подождите 3 минуты.'
    ],
    'en' => [
        'spam' => 'Spam activity detected.',
        'invalid' => 'Invalid form input data.',
        'links' => 'Reviews cannot contain website links or domain names.',
        'rate_limit' => 'You are posting reviews too fast. Please wait 3 minutes.'
    ],
    'ro' => [
        'spam' => 'Activitate de spam detectată.',
        'invalid' => 'Date de intrare nevalide.',
        'links' => 'Recenziile nu pot conține link-uri sau nume de domenii web.',
        'rate_limit' => 'Trimiteți recenzii prea repede. Vă rugăm să așteptați 3 minute.'
    ]
];

// 1. Honeypot check (anti-bot)
$honeypot = isset($input['honeypot']) ? trim($input['honeypot']) : '';
if (!empty($honeypot)) {
    http_response_code(400);
    echo json_encode(["error" => $messages[$lang]['spam']]);
    exit;
}

$name = isset($input['name']) ? trim($input['name']) : '';
$company = isset($input['company']) ? trim($input['company']) : '';
$rating = isset($input['rating']) ? floatval($input['rating']) : 0.0;
$message = isset($input['message']) ? trim($input['message']) : '';

// Validation
if (empty($name) || empty($company) || empty($message) || $rating <= 0 || $rating > 5) {
    http_response_code(400);
    echo json_encode(["error" => $messages[$lang]['invalid']]);
    exit;
}

// 2. Link blocking (anti-spam link injection - complete ban on any web links/domains ending with common extensions)
$hasLinks = preg_match('/https?:\/\//i', $message) || 
             preg_match('/https?:\/\//i', $name) ||
             preg_match('/https?:\/\//i', $company) ||
             preg_match('/\b[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}\b/i', $message) ||
             preg_match('/\b[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}\b/i', $name) ||
             preg_match('/\b[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}\b/i', $company) ||
             strpos($message, '<a') !== false ||
             strpos($message, '[url') !== false;
if ($hasLinks) {
    http_response_code(400);
    echo json_encode(["error" => $messages[$lang]['links']]);
    exit;
}

// Sanitization
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$company = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$file = 'reviews.json';
$reviews = [];

if (file_exists($file)) {
    $content = file_get_contents($file);
    $reviews = json_decode($content, true);
    if (!is_array($reviews)) {
        $reviews = [];
    }
}

// 3. Hashed IP Rate Limiting (1 review per 3 minutes to prevent flood)
$userIpHash = hash('sha256', $_SERVER['REMOTE_ADDR']);
$currentTime = time();
$cooldownSeconds = 180; // 3 minutes

foreach ($reviews as $rev) {
    if (isset($rev['ip_hash']) && $rev['ip_hash'] === $userIpHash) {
        $timeDiff = $currentTime - $rev['timestamp'];
        if ($timeDiff < $cooldownSeconds) {
            http_response_code(429);
            echo json_encode(["error" => $messages[$lang]['rate_limit']]);
            exit;
        }
    }
}

$newReview = [
    "name" => $name,
    "company" => $company,
    "rating" => $rating,
    "message" => $message,
    "timestamp" => $currentTime,
    "ip_hash" => $userIpHash
];

$reviews[] = $newReview;

file_put_contents($file, json_encode($reviews, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), LOCK_EX);

echo json_encode(["success" => true]);
