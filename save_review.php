<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name = isset($input['name']) ? trim($input['name']) : '';
$company = isset($input['company']) ? trim($input['company']) : '';
$rating = isset($input['rating']) ? floatval($input['rating']) : 0.0;
$message = isset($input['message']) ? trim($input['message']) : '';

// Validation
if (empty($name) || empty($company) || empty($message) || $rating <= 0) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid input data"]);
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

$newReview = [
    "name" => $name,
    "company" => $company,
    "rating" => $rating,
    "message" => $message,
    "timestamp" => time()
];

$reviews[] = $newReview;

file_put_contents($file, json_encode($reviews, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), LOCK_EX);

echo json_encode(["success" => true]);
