/**
 * Tandemix Development — Main Application Script
 * Vanilla JavaScript | No dependencies required
 */

window.TRANSLATIONS = {
  ru: {
    "nav.concept": "Концепция",
    "nav.services": "Услуги",
    "nav.process": "Процесс",
    "nav.calculator": "Калькулятор",
    "nav.portfolio": "Портфолио",
    "nav.contacts": "Контакты",
    "nav.btn.contact": "Связаться",
    "hero.badge": "Эра Vibe Coding наступила",
    "hero.title": "Создаем сайты будущего через <span class=\"gradient-text\">Vibe Coding</span>",
    "hero.description": "Tandemix Development объединяет передовые AI-системы и глубокую инженерную экспертизу для создания <span class=\"rotating-word\" id=\"rotating-word\">лендингов</span>, SaaS-платформ и корпоративных экосистем — в 5 раз быстрее традиционных студий.",
    "hero.btn.start": "Начать проект",
    "hero.btn.calc": "Рассчитать стоимость",
    "metric.speed": "Скорость запуска",
    "metric.design": "Уникальный дизайн",
    "metric.solutions": "Готовых решений",
    "hero.terminal.waiting": "Ожидание компиляции кода...",
    "concept.title": "Что такое <span class=\"gradient-text\">Vibe Coding</span>?",
    "concept.subtitle": "Новая парадигма веб-разработки: вы говорите, что хотите увидеть, AI генерирует архитектуру, а инженеры настраивают идеальный UI/UX.",
    "concept.card1.title": "Ураганная скорость",
    "concept.card1.text": "Использование AI-ассистентов позволяет генерировать чистый код со скоростью мысли. Запуск лендинга занимает от 1 до 3 дней, полноценного сервиса — от недели.",
    "concept.card2.title": "Чистота и безопасность",
    "concept.card2.text": "AI-модели моментально находят уязвимости и оптимизируют производительность. На выходе получается семантически чистый код, летающий на любых устройствах.",
    "concept.card3.title": "Фокус на дизайне и юзабилити",
    "concept.card3.text": "Освободив время от рутинного написания шаблонного кода, мы фокусируемся на том, что действительно важно: визуальный восторг, анимации, маркетинг и удобство пользователя.",
    "comparison.title": "Почему Tandemix Development выигрывает?",
    "comparison.th.criteria": "Критерий сравнения",
    "comparison.th.tandemix": "Tandemix (Vibe Coding)",
    "comparison.th.agency": "Обычная веб-студия",
    "comparison.th.builders": "Конструкторы сайтов (Tilda/Wix)",
    "comparison.row1.name": "Сроки разработки",
    "comparison.row1.tandemix": "2–7 дней",
    "comparison.row1.agency": "3–6 недель",
    "comparison.row1.builders": "1–3 дня",
    "comparison.row2.name": "Уникальность дизайна",
    "comparison.row2.tandemix": "100% кастомный CSS",
    "comparison.row2.agency": "Высокая",
    "comparison.row2.builders": "Шаблоны / Ограничения",
    "comparison.row3.name": "Стоимость разработки",
    "comparison.row3.tandemix": "Оптимальная (без переплат за рутину)",
    "comparison.row3.agency": "Очень высокая",
    "comparison.row3.builders": "Низкая",
    "comparison.row4.name": "SEO и Скорость (PageSpeed)",
    "comparison.row4.tandemix": "95-100% (чистый код)",
    "comparison.row4.agency": "Высокая",
    "comparison.row4.builders": "Средняя (куча лишнего JS)",
    "comparison.row5.name": "Масштабируемость",
    "comparison.row5.tandemix": "Безграничная (любые API, базы данных)",
    "comparison.row5.agency": "Безграничная",
    "comparison.row5.builders": "Ограничена платформой",
    "services.title": "Наши <span class=\"gradient-text\">Услуги</span>",
    "services.subtitle": "Мы реализуем проекты любой сложности, от сочных промо-страниц до сложных цифровых экосистем.",
    "services.complexity.low": "Базовый",
    "services.complexity.medium": "Средний",
    "services.complexity.high": "Сложный",
    "services.card1.title": "Landing Page",
    "services.card1.desc": "Продающие одностраничные сайты с высокой конверсией, WOW-эффектами и безупречной адаптивностью под мобильные устройства.",
    "services.card1.f1": "Адаптивная вёрстка (Mobile First)",
    "services.card1.f2": "SEO-оптимизация с оценкой 95+",
    "services.card1.f3": "Подключение аналитики",
    "services.card1.price": "от $89",
    "services.card2.title": "Многостраничные сайты",
    "services.card2.desc": "Корпоративные сайты для компаний. Продуманная структура, интеграция CMS для управления контентом, SEO-оптимизированный код.",
    "services.card2.f1": "Кастомная CMS (Wordpress/Directus)",
    "services.card2.f2": "Многостраничная SEO архитектура",
    "services.card2.f3": "Интеграция CRM-систем",
    "services.card2.price": "от $250",
    "services.card3.title": "Интернет-магазины",
    "services.card3.desc": "Современные e-commerce решения. Быстрый поиск, удобная корзина, интеграция платежных систем, управление заказами и складом.",
    "services.card3.f1": "Интеграция платежей (Stripe/Card)",
    "services.card3.f2": "Управление заказами & корзиной",
    "services.card3.f3": "Импорт/экспорт товаров",
    "services.card3.price": "от $349",
    "services.card4.title": "Web-сервисы и SaaS",
    "services.card4.desc": "Индивидуальные веб-приложения со сложной бизнес-логикой: личные кабинеты, дашборды, CRM-системы, интеграции баз данных.",
    "services.card4.f1": "Базы данных (PostgreSQL/MongoDB)",
    "services.card4.f2": "Личный кабинет & Роли",
    "services.card4.f3": "Защищенный API & Авторизация",
    "services.card4.price": "от $599",
    "services.card5.title": "Интеграция AI решений",
    "services.card5.desc": "Подключение нейросетей в ваш бизнес. Чат-боты поддержки на базе ChatGPT, генераторы контента, системы классификации данных.",
    "services.card5.f1": "Подключение GPT-4/Claude API",
    "services.card5.f2": "Кастомные AI Чат-боты поддержки",
    "services.card5.f3": "Автоматизация парсинга & контента",
    "services.card5.price": "от $249",
    "services.card6.title": "Редизайн и Оптимизация",
    "services.card6.desc": "Превратим ваш устаревший сайт в стильный, адаптивный веб-интерфейс с ускорением загрузки и адаптацией под современные стандарты.",
    "services.card6.f1": "Редизайн UI/UX по Awwwards style",
    "services.card6.f2": "Ускорение загрузки (Lighthouse 95+)",
    "services.card6.f3": "Оптимизация под мобильные устройства",
    "services.card6.price": "от $199",
    "process.title": "Как мы <span class=\"gradient-text\">работаем</span>",
    "process.subtitle": "Прозрачный процесс от идеи до запуска и реальные отзывы наших клиентов.",
    "process.step1.title": "Бриф и ТЗ",
    "process.step1.desc": "Обсуждаем ваши цели, анализируем нишу, формируем требования и детальное техническое задание.",
    "process.step2.title": "Дизайн и прототип",
    "process.step2.desc": "Создаем интерактивный прототип и прорабатываем визуальный стиль с учетом UI/UX трендов.",
    "process.step3.title": "Vibe Coding — разработка",
    "process.step3.desc": "Пишем чистый, быстрый и адаптивный код, интегрируем необходимые сервисы, базы данных и AI.",
    "process.step4.title": "Тесты и запуск",
    "process.step4.desc": "Проводим нагрузочное и кросс-браузерное тестирование, подключаем домен и запускаем проект.",
    "testimonials.title": "Отзывы клиентов",
    "testimonials.btn.leave": "Оставить отзыв",
    "testimonials.t1.author": "Александр К.",
    "testimonials.t1.role": "CEO стартапа HealthFlow",
    "testimonials.t1.text": "\"Tandemix Development сделали наш лендинг за 3 дня. Результат превзошел ожидания — конверсия выросла на 40% в первый месяц.\"",
    "testimonials.t2.author": "Мария В.",
    "testimonials.t2.role": "Основатель NovaMark Agency",
    "testimonials.t2.text": "\"Команда профессионалов. Все задачи выполнялись четко и в срок. Особенно порадовал живой дизайн и техническая грамотность кода.\"",
    "testimonials.t3.author": "Дмитрий К.",
    "testimonials.t3.role": "Product Manager, TechFlow SaaS",
    "testimonials.t3.text": "\"Невероятная скорость работы. Полноценный SaaS MVP был готов за 10 дней. Код чистый, логика понятная, поддержка всегда на связи.\"",
    "testimonials.t4.author": "Елена Р.",
    "testimonials.t4.role": "HR Director, InvestUnion",
    "testimonials.t4.text": "\"Провели полный редизайн нашего корпоративного портала и ускорили его загрузку в 3 раза. Наша команда в восторге от новой скорости и удобства!\"",
    "calculator.title": "Интерактивный <span class=\"gradient-text\">Калькулятор</span>",
    "calculator.subtitle": "Выберите ключевые параметры, чтобы оценить предварительную стоимость и время реализации проекта.",
    "calculator.labels.type": "Тип проекта",
    "calculator.options.landing.title": "Landing Page",
    "calculator.options.landing.desc": "Одностраничник",
    "calculator.options.corporate.title": "Corporate",
    "calculator.options.corporate.desc": "Многостраничник",
    "calculator.options.shop.title": "Интернет-магазин",
    "calculator.options.shop.desc": "E-commerce",
    "calculator.options.saas.title": "Веб-сервис / SaaS",
    "calculator.options.saas.desc": "Индивидуальная логика",
    "calculator.labels.style": "Стиль и дизайн",
    "calculator.options.style1.title": "Минимализм",
    "calculator.options.style1.desc": "Строго и чисто",
    "calculator.options.style2.title": "Премиальный",
    "calculator.options.style2.desc": "Кастомные детали",
    "calculator.options.style3.title": "WOW-эффекты",
    "calculator.options.style3.desc": "Сложные 3D/анимации",
    "calculator.labels.extra": "Дополнительные опции",
    "calculator.features.crm.title": "Интеграция CRM & Аналитики",
    "calculator.features.crm.desc": "Сбор лидов, AmoCRM/Bitrix, Google Analytics",
    "calculator.features.pay.title": "Интеграция платежных систем",
    "calculator.features.pay.desc": "Онлайн-оплата картами, Apple Pay, криптовалютой",
    "calculator.features.ai.title": "AI Ассистент / Чат-бот",
    "calculator.features.ai.desc": "Интеграция модели поддержки клиентов 24/7",
    "calculator.features.lang.title": "Мультиязычность",
    "calculator.features.lang.desc": "Перевод сайта на дополнительный язык (RU/EN/RO)",
    "calculator.results.title": "Оценка вашего проекта",
    "calculator.results.budget_lbl": "Ориентировочный бюджет",
    "calculator.results.time_lbl": "Срок разработки",
    "calculator.results.info": "За счет технологии <strong>Vibe Coding</strong> мы минимизируем рутину, что делает эти сроки реальными, а стоимость сбалансированной.",
    "calculator.results.alert": "Оценка стоимости является предварительной, так как каждый проект уникален. Итоговая стоимость рассчитывается индивидуально после обсуждения всех деталей и составления ТЗ.",
    "calculator.results.order": "Заказать по этой оценке",
    "portfolio.title": "Примеры наших <span class=\"gradient-text\">работ</span>",
    "portfolio.subtitle": "Проекты, спроектированные и закодированные нашей командой с фокусом на результат и эстетику.",
    "portfolio.filters.all": "Все",
    "portfolio.filters.fintech": "Fintech",
    "portfolio.filters.ai": "AI / SaaS",
    "portfolio.filters.ecom": "E-Commerce",
    "portfolio.card1.mockup.menu1": "Панель управления",
    "portfolio.card1.mockup.menu2": "Рынки",
    "portfolio.card1.mockup.title": "Децентрализованные финансы",
    "portfolio.card1.mockup.desc": "Торгуйте активами с легкостью",
    "portfolio.card1.mockup.btn": "Купить крипту",
    "portfolio.hover.discuss": "Обсудить похожий проект",
    "portfolio.card1.tag": "Fintech / Веб-приложение",
    "portfolio.card1.desc": "Высокотехнологичный лендинг криптовалютного кошелька с 3D-анимациями и выводом графиков курсов валют в реальном времени.",
    "portfolio.card2.mockup.bubble1": "Привет! Чем я могу помочь?",
    "portfolio.card2.mockup.bubble2": "Напиши код формы...",
    "portfolio.card2.mockup.bubble3": "Генерирую код...",
    "portfolio.card2.tag": "AI / SaaS",
    "portfolio.card2.desc": "Интерфейс AI-копирайтера со встроенным чатом, историей генераций и возможностью мгновенного экспорта документов.",
    "portfolio.card3.mockup.p1": "Aura Наушники",
    "portfolio.card3.mockup.p2": "Aura Часы",
    "portfolio.card3.tag": "E-Commerce",
    "portfolio.card3.desc": "Современный интернет-магазин носимой электроники премиум-класса. Интеграция с Stripe, Apple Pay и гибкой админ-панелью.",
    "contacts.title": "Давайте создадим что-то <span class=\"gradient-text\">великое</span>",
    "contacts.subtitle": "Свяжитесь с нами напрямую или заполните форму, и мы ответим в течение 1 часа.",
    "contacts.brand_desc": "Мы строим веб-архитектуру будущего, помогая молодым проектам и опытному бизнесу запускать стильные и функциональные цифровые продукты.",
    "contacts.owner1.name": "Максим",
    "contacts.role.maxim": "Co-Founder & Tech Lead",
    "contacts.owner2.name": "Виктор",
    "contacts.role.vitya": "Co-Founder & UI/UX Director",
    "contacts.email_lbl": "Почта компании",
    "contacts.form.title": "Заявка на проект",
    "contacts.form.desc": "Заполните поля, и мы свяжемся с вами для составления первичного технического задания.",
    "contacts.form.name_label": "Ваше имя / Компания",
    "contacts.form.name_hint": "Пожалуйста, укажите ваше имя или название компании",
    "contacts.form.contact_label": "Контактные данные (Telegram / Phone / Email)",
    "contacts.form.contact_hint": "Укажите способ связи с вами",
    "contacts.form.type_label": "Тип проекта",
    "contacts.form.select.landing": "Landing Page (Одностраничник)",
    "contacts.form.select.corporate": "Корпоративный многостраничный сайт",
    "contacts.form.select.shop": "Интернет-магазин",
    "contacts.form.select.saas": "Web-сервис / SaaS",
    "contacts.form.select.other": "Другое (Редизайн, AI интеграция)",
    "contacts.form.message_label": "Расскажите о вашей задаче (необязательно)",
    "contacts.form.submit": "Отправить заявку",
    "contacts.form.alt_prefix": "Или напишите нам напрямую в",
    "pre_footer.title": "Готовы запустить проект <span class=\"gradient-text\">прямо сейчас?</span>",
    "pre_footer.subtitle": "Мы доступны 24/7. Первичная консультация — бесплатно.",
    "pre_footer.btn": "Получить бесплатную консультацию",
    "footer.copy": "© 2026 Tandemix Development.<br>Студия веб-разработки премиум-класса.",
    "footer.nav_title": "Навигация",
    "footer.contacts_title": "Контакты",
    "footer.bottom.copy": "© 2026 Tandemix Development. Все права защищены.",
    "footer.badge": "Сделано с ❤️ и Vibe Coding",
    "js.calc.days": "дней",
    "js.calc.days_short": "дн.",
    "js.form.validation_error": "Пожалуйста, заполните все обязательные поля.",
    "js.form.success_title": "Заявка успешно отправлена!",
    "js.form.success_desc": "Спасибо, {name}. Мы получили данные о проекте и свяжемся с вами в течение часа по контактам: <em>{contact}</em>.",
    "js.form.error": "Ошибка при отправке. Пожалуйста, напишите нам напрямую на почту или позвоните.",
    "js.terminal.comments.init": "// Инициализация проекта Tandemix Development...",
    "js.terminal.comments.launch": "// Запуск процесса разработки...",
    "js.terminal.compiled": "Сайт успешно скомпилирован!",
    "js.terminal.success": "[SUCCESS] Live-превью успешно загружено.",
    "js.terminal.preview_btn": "Проект Готов!",
    "js.calc.order_message": "Здравствуйте! Хочу заказать проект по оценке в калькуляторе:\n- Тип: {type}\n- Дизайн: {design}{options}\n- Предварительная стоимость: {price} ({days})",
    "js.calc.additional": "\nДополнительно: ",
    "portfolio.card4.mockup.menu": "Аналитика",
    "portfolio.card4.mockup.w1": "Пользователи",
    "portfolio.card4.mockup.w2": "Продажи",
    "portfolio.card4.tag": "AI / SaaS",
    "portfolio.card4.desc": "Панель управления аналитикой данных в реальном времени с интерактивными графиками и прогнозированием на базе ИИ.",
    "calculator.results.complexity_lbl": "Сложность проекта",
    "metric.support": "Поддержка",
    "stats.projects.val": "15+",
    "stats.projects.lbl": "выполненных проектов",
    "stats.countries.val": "3",
    "stats.countries.lbl": "страны присутствия",
    "stats.satisfaction.val": "99%",
    "stats.satisfaction.lbl": "довольных клиентов",
    "stats.delivery.val": "7 дней",
    "stats.delivery.lbl": "средний срок запуска",
    "faq.title": "Часто задаваемые вопросы",
    "faq.subtitle": "Ответы на популярные вопросы о процессе разработки, стоимости и наших гарантиях.",
    "faq.q1": "Сколько стоит разработка?",
    "faq.a1": "Стоимость рассчитывается индивидуально. Вы можете использовать наш интерактивный калькулятор для предварительной оценки — проекты начинаются от $250.",
    "faq.q2": "Какие гарантии вы предоставляете?",
    "faq.a2": "Мы гарантируем высокое качество кода и предоставляем 30 дней бесплатной технической поддержки после запуска проекта.",
    "faq.q3": "Работаете ли вы с иностранными клиентами?",
    "faq.a3": "Да, мы работаем удаленно с клиентами по всему миру. Все коммуникации и договоры могут быть оформлены на русском, румынском или английском языках.",
    "faq.q4": "Как происходит оплата?",
    "faq.a4": "Обычно мы работаем по схеме: 50% предоплата перед началом проектирования и дизайна, и оставшиеся 50% после полной сдачи и тестирования проекта.",
    "faq.q5": "Что такое Vibe Coding?",
    "faq.a5": "Vibe Coding — это современный метод разработки, сочетающий мощь искусственного интеллекта и экспертизу опытного инженера. Мы формулируем требования голосом или текстом, AI генерирует чистый код, а разработчик дорабатывает интерфейс до идеала.",
    "portfolio.card5.tag": "Fintech / E-Commerce",
    "portfolio.card5.title": "NovaPay Billing Suite",
    "portfolio.card5.desc": "Интеграция платежного шлюза с автоматической конверсией валют, выставлением счетов и фискализацией чеков.",
    "portfolio.card5.mockup.number": "Номер карты",
    "portfolio.card5.mockup.date": "Срок",
    "portfolio.card5.mockup.paybtn": "Оплатить $120.00",
    "portfolio.card6.tag": "AI / Smart IoT",
    "portfolio.card6.title": "Lumina IoT Dashboard",
    "portfolio.card6.desc": "Интерфейс управления умным домом с ИИ-предсказанием энергопотребления, адаптивным расписанием и контролем датчиков.",
    "portfolio.card6.mockup.livingroom": "Гостиная",
    "portfolio.card6.mockup.bedroom": "Спальня",
    "portfolio.card6.mockup.on": "Вкл",
    "portfolio.card6.mockup.off": "Выкл"
  },
  en: {
    "nav.concept": "Concept",
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.calculator": "Calculator",
    "nav.portfolio": "Portfolio",
    "nav.contacts": "Contacts",
    "nav.btn.contact": "Contact Us",
    "hero.badge": "The Vibe Coding Era is Here",
    "hero.title": "We build the websites of the future with <span class=\"gradient-text\">Vibe Coding</span>",
    "hero.description": "Tandemix Development combines advanced AI systems and deep engineering expertise to build <span class=\"rotating-word\" id=\"rotating-word\">landing pages</span>, SaaS platforms, and corporate ecosystems — 5x faster than traditional agencies.",
    "hero.btn.start": "Start a Project",
    "hero.btn.calc": "Calculate Cost",
    "metric.speed": "Launch Speed",
    "metric.design": "Unique Design",
    "metric.solutions": "Ready Solutions",
    "hero.terminal.waiting": "Waiting for code compilation...",
    "concept.title": "What is <span class=\"gradient-text\">Vibe Coding</span>?",
    "concept.subtitle": "A new paradigm in web development: you say what you want to see, AI generates the architecture, and engineers customize the perfect UI/UX.",
    "concept.card1.title": "Blazing Speed",
    "concept.card1.text": "Using AI assistants allows us to generate clean code at the speed of thought. Launching a landing page takes 1 to 3 days, a full service — from a week.",
    "concept.card2.title": "Clean & Secure",
    "concept.card2.text": "AI models instantly find vulnerabilities and optimize performance. The result is semantically clean code that flies on any device.",
    "concept.card3.title": "Focus on Design & Usability",
    "concept.card3.text": "By freeing up time from routine boilerplates, we focus on what really matters: visual delight, smooth animations, marketing, and user convenience.",
    "comparison.title": "Why Tandemix Development Wins?",
    "comparison.th.criteria": "Comparison Criteria",
    "comparison.th.tandemix": "Tandemix (Vibe Coding)",
    "comparison.th.agency": "Traditional Web Studio",
    "comparison.th.builders": "Website Builders (Tilda/Wix)",
    "comparison.row1.name": "Development Time",
    "comparison.row1.tandemix": "2–7 days",
    "comparison.row1.agency": "3–6 weeks",
    "comparison.row1.builders": "1–3 days",
    "comparison.row2.name": "Design Uniqueness",
    "comparison.row2.tandemix": "100% custom CSS",
    "comparison.row2.agency": "High",
    "comparison.row2.builders": "Templates / Limits",
    "comparison.row3.name": "Development Cost",
    "comparison.row3.tandemix": "Optimal (no payment for routine)",
    "comparison.row3.agency": "Very High",
    "comparison.row3.builders": "Low",
    "comparison.row4.name": "SEO & Speed (PageSpeed)",
    "comparison.row4.tandemix": "95-100% (clean code)",
    "comparison.row4.agency": "High",
    "comparison.row4.builders": "Average (heavy scripts)",
    "comparison.row5.name": "Scalability",
    "comparison.row5.tandemix": "Limitless (any APIs, databases)",
    "comparison.row5.agency": "Limitless",
    "comparison.row5.builders": "Platform-limited",
    "services.title": "Our <span class=\"gradient-text\">Services</span>",
    "services.subtitle": "We implement projects of any complexity, from juicy promo pages to complex Tandemix ecosystems.",
    "services.complexity.low": "Basic",
    "services.complexity.medium": "Medium",
    "services.complexity.high": "Complex",
    "services.card1.title": "Landing Page",
    "services.card1.desc": "High-converting single-page websites with WOW effects and flawless responsiveness for mobile devices.",
    "services.card1.f1": "Responsive layout (Mobile First)",
    "services.card1.f2": "SEO optimization with 95+ score",
    "services.card1.f3": "Analytics integration",
    "services.card1.price": "from $89",
    "services.card2.title": "Multi-page Websites",
    "services.card2.desc": "Corporate websites for companies. Thoughtful structure, CMS integration for content management, and SEO-optimized code.",
    "services.card2.f1": "Custom CMS (WordPress/Directus)",
    "services.card2.f2": "Multi-page SEO architecture",
    "services.card2.f3": "CRM systems integration",
    "services.card2.price": "from $250",
    "services.card3.title": "E-Commerce",
    "services.card3.desc": "Modern e-commerce solutions. Fast search, convenient shopping cart, integration of payment systems, order and stock management.",
    "services.card3.f1": "Payment integration (Stripe/Cards)",
    "services.card3.f2": "Order & Cart management",
    "services.card3.f3": "Product import/export",
    "services.card3.price": "from $349",
    "services.card4.title": "Web Services & SaaS",
    "services.card4.desc": "Custom web applications with complex business logic: user dashboards, CRM systems, database integrations.",
    "services.card4.f1": "Databases (PostgreSQL/MongoDB)",
    "services.card4.f2": "User portal & Roles",
    "services.card4.f3": "Secure API & Authorization",
    "services.card4.price": "from $599",
    "services.card5.title": "AI Solutions Integration",
    "services.card5.desc": "Integrating neural networks into your business. Support chatbots powered by ChatGPT, content generators, data classification.",
    "services.card5.f1": "GPT-4/Claude API connection",
    "services.card5.f2": "Custom AI support chatbots",
    "services.card5.f3": "Scraping & Content automation",
    "services.card5.price": "from $249",
    "services.card6.title": "Redesign & Optimization",
    "services.card6.desc": "Turn your outdated website into a stylish, responsive interface with faster load speed and modern standards.",
    "services.card6.f1": "UI/UX redesign in Awwwards style",
    "services.card6.f2": "Load acceleration (Lighthouse 95+)",
    "services.card6.f3": "Mobile optimization",
    "services.card6.price": "from $199",
    "process.title": "How We <span class=\"gradient-text\">Work</span>",
    "process.subtitle": "A transparent process from idea to launch and real reviews from our clients.",
    "process.step1.title": "Briefing & Specs",
    "process.step1.desc": "We discuss your goals, analyze the niche, and form requirements and a detailed project specification.",
    "process.step2.title": "Design & Prototype",
    "process.step2.desc": "We create an interactive prototype and craft a visual style keeping UI/UX trends in mind.",
    "process.step3.title": "Vibe Coding — Dev",
    "process.step3.desc": "We write clean, fast, and responsive code, integrating necessary services, databases, and AI.",
    "process.step4.title": "Testing & Launch",
    "process.step4.desc": "We conduct load and cross-browser testing, link your domain, and deploy the project.",
    "testimonials.title": "Client Reviews",
    "testimonials.btn.leave": "Leave a Review",
    "testimonials.t1.author": "Alexander K.",
    "testimonials.t1.role": "CEO of HealthFlow Startup",
    "testimonials.t1.text": "\"Tandemix Development completed our landing page in 3 days. The result exceeded expectations — conversions rose by 40% in the first month.\"",
    "testimonials.t2.author": "Maria V.",
    "testimonials.t2.role": "Founder of NovaMark Agency",
    "testimonials.t2.text": "\"A team of professionals. All tasks were completed clearly and on time. We were especially pleased with the lively design and clean code.\"",
    "testimonials.t3.author": "Dmitry K.",
    "testimonials.t3.role": "Product Manager, TechFlow SaaS",
    "testimonials.t3.text": "\"Incredible speed of work. A full-featured SaaS MVP was ready in 10 days. The code is clean, logic is clear, support is always online.\"",
    "testimonials.t4.author": "Elena R.",
    "testimonials.t4.role": "HR Director, InvestUnion",
    "testimonials.t4.text": "\"Conducted a full redesign of our corporate portal and sped up its loading by 3 times. Our team is thrilled with the new speed and ease of use!\"",
    "calculator.title": "Interactive <span class=\"gradient-text\">Calculator</span>",
    "calculator.subtitle": "Choose key parameters to estimate the preliminary cost and timeline of your project.",
    "calculator.labels.type": "Project Type",
    "calculator.options.landing.title": "Landing Page",
    "calculator.options.landing.desc": "Single page",
    "calculator.options.corporate.title": "Corporate",
    "calculator.options.corporate.desc": "Multi-page",
    "calculator.options.shop.title": "E-Commerce",
    "calculator.options.shop.desc": "Online store",
    "calculator.options.saas.title": "Web Service / SaaS",
    "calculator.options.saas.desc": "Custom logic",
    "calculator.labels.style": "Style & Design",
    "calculator.options.style1.title": "Minimalism",
    "calculator.options.style1.desc": "Sleek and clean",
    "calculator.options.style2.title": "Premium",
    "calculator.options.style2.desc": "Custom details",
    "calculator.options.style3.title": "WOW Effects",
    "calculator.options.style3.desc": "Complex 3D / animation",
    "calculator.labels.extra": "Additional Options",
    "calculator.features.crm.title": "CRM & Analytics Integration",
    "calculator.features.crm.desc": "Lead capture, AmoCRM/Bitrix, Google Analytics",
    "calculator.features.pay.title": "Payment Gateway Integration",
    "calculator.features.pay.desc": "Online credit card payment, Apple Pay, crypto",
    "calculator.features.ai.title": "AI Assistant / Chatbot",
    "calculator.features.ai.desc": "Integration of 24/7 customer support models",
    "calculator.features.lang.title": "Multilingual Support",
    "calculator.features.lang.desc": "Translating website to an extra language (RU/EN/RO)",
    "calculator.results.title": "Your Project Estimation",
    "calculator.results.budget_lbl": "Estimated Budget",
    "calculator.results.time_lbl": "Development Time",
    "calculator.results.info": "Thanks to <strong>Vibe Coding</strong> technology, we minimize routine work, making these timelines real and costs balanced.",
    "calculator.results.alert": "The cost estimate is preliminary, as every project is unique. The final cost is calculated individually after discussing details and forming technical specifications.",
    "calculator.results.order": "Order with this estimation",
    "portfolio.title": "Examples of Our <span class=\"gradient-text\">Work</span>",
    "portfolio.subtitle": "Projects designed and coded by our team with a focus on results and aesthetics.",
    "portfolio.filters.all": "All",
    "portfolio.filters.fintech": "Fintech",
    "portfolio.filters.ai": "AI / SaaS",
    "portfolio.filters.ecom": "E-Commerce",
    "portfolio.card1.mockup.menu1": "Dashboard",
    "portfolio.card1.mockup.menu2": "Markets",
    "portfolio.card1.mockup.title": "Decentralized Finance",
    "portfolio.card1.mockup.desc": "Trade assets with ease",
    "portfolio.card1.mockup.btn": "Buy Crypto",
    "portfolio.hover.discuss": "Discuss similar project",
    "portfolio.card1.tag": "Fintech / Web Application",
    "portfolio.card1.desc": "High-tech cryptocurrency wallet landing page with 3D animations and live exchange rate charts.",
    "portfolio.card2.mockup.bubble1": "Hello! How can I help you?",
    "portfolio.card2.mockup.bubble2": "Write form code...",
    "portfolio.card2.mockup.bubble3": "Generating code...",
    "portfolio.card2.tag": "AI / SaaS",
    "portfolio.card2.desc": "AI copywriter interface with built-in chat, generation history, and quick document export.",
    "portfolio.card3.mockup.p1": "Aura Headphones",
    "portfolio.card3.mockup.p2": "Aura Watch",
    "portfolio.card3.tag": "E-Commerce",
    "portfolio.card3.desc": "Modern e-commerce site for premium wearable electronics. Integrated with Stripe, Apple Pay, and a flexible admin panel.",
    "contacts.title": "Let's build something <span class=\"gradient-text\">great</span>",
    "contacts.subtitle": "Contact us directly or fill out the form, and we'll reply within 1 hour.",
    "contacts.brand_desc": "We build the web architecture of the future, helping startups and established businesses launch stylish and functional Tandemix products.",
    "contacts.owner1.name": "Maxim",
    "contacts.role.maxim": "Co-Founder & Tech Lead",
    "contacts.owner2.name": "Victor",
    "contacts.role.vitya": "Co-Founder & UI/UX Director",
    "contacts.email_lbl": "Company email",
    "contacts.form.title": "Project Request",
    "contacts.form.desc": "Fill in the fields, and we will get in touch to prepare a primary technical specification.",
    "contacts.form.name_label": "Your Name / Company",
    "contacts.form.name_hint": "Please enter your name or company name",
    "contacts.form.contact_label": "Contact Details (Telegram / Phone / Email)",
    "contacts.form.contact_hint": "Please specify how we can reach you",
    "contacts.form.type_label": "Project Type",
    "contacts.form.select.landing": "Landing Page (Single page)",
    "contacts.form.select.corporate": "Corporate multi-page website",
    "contacts.form.select.shop": "Online store",
    "contacts.form.select.saas": "Web Service / SaaS",
    "contacts.form.select.other": "Other (Redesign, AI integration)",
    "contacts.form.message_label": "Tell us about your project (optional)",
    "contacts.form.submit": "Submit Request",
    "contacts.form.alt_prefix": "Or write to us directly in",
    "pre_footer.title": "Ready to launch your project <span class=\"gradient-text\">right now?</span>",
    "pre_footer.subtitle": "We are available 24/7. Initial consultation is free.",
    "pre_footer.btn": "Get Free Consultation",
    "footer.copy": "© 2026 Tandemix Development.<br>Premium web development studio.",
    "footer.nav_title": "Navigation",
    "footer.contacts_title": "Contacts",
    "footer.bottom.copy": "© 2026 Tandemix Development. All rights reserved.",
    "footer.badge": "Made with ❤️ and Vibe Coding",
    "js.calc.days": "days",
    "js.calc.days_short": "d.",
    "js.form.validation_error": "Please fill in all required fields.",
    "js.form.success_title": "Request sent successfully!",
    "js.form.success_desc": "Thank you, {name}. We have received your project details and will contact you within an hour at: <em>{contact}</em>.",
    "js.form.error": "Failed to send request. Please contact us directly via email or phone.",
    "js.terminal.comments.init": "// Initializing Tandemix Development project...",
    "js.terminal.comments.launch": "// Launching development process...",
    "js.terminal.compiled": "Website compiled successfully!",
    "js.terminal.success": "[SUCCESS] Live preview loaded successfully.",
    "js.terminal.preview_btn": "Project Ready!",
    "js.calc.order_message": "Hello! I want to order a project based on the calculator:\n- Type: {type}\n- Design: {design}{options}\n- Preliminary estimate: {price} ({days})",
    "js.calc.additional": "\nAdditional: ",
    "portfolio.card4.mockup.menu": "Analytics",
    "portfolio.card4.mockup.w1": "Users",
    "portfolio.card4.mockup.w2": "Sales",
    "portfolio.card4.tag": "AI / SaaS",
    "portfolio.card4.desc": "Real-time data analytics dashboard with interactive charts and AI-powered forecasting.",
    "calculator.results.complexity_lbl": "Project Complexity",
    "metric.support": "Support",
    "stats.projects.val": "15+",
    "stats.projects.lbl": "completed projects",
    "stats.countries.val": "3",
    "stats.countries.lbl": "countries of presence",
    "stats.satisfaction.val": "99%",
    "stats.satisfaction.lbl": "happy clients",
    "stats.delivery.val": "7 days",
    "stats.delivery.lbl": "average launch time",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Answers to popular questions about our development process, pricing, and guarantees.",
    "faq.q1": "How much does development cost?",
    "faq.a1": "The cost is calculated individually. You can use our interactive calculator for a preliminary estimate — projects start at $250.",
    "faq.q2": "What guarantees do you offer?",
    "faq.a2": "We guarantee high code quality and provide 30 days of free technical support after the project launch.",
    "faq.q3": "Do you work with international clients?",
    "faq.a3": "Yes, we work remotely with clients worldwide. All communications and contracts can be processed in Russian, Romanian, or English.",
    "faq.q4": "How does payment work?",
    "faq.a4": "Typically, we work on a 50% prepayment basis before starting design and prototyping, and the remaining 50% after full completion and testing.",
    "faq.q5": "What is Vibe Coding?",
    "faq.a5": "Vibe Coding is a modern development method combining the power of artificial intelligence and the expertise of an experienced engineer. We define requirements via text or voice, the AI generates clean code, and the developer polishes the interface to perfection.",
    "portfolio.card5.tag": "Fintech / E-Commerce",
    "portfolio.card5.title": "NovaPay Billing Suite",
    "portfolio.card5.desc": "Payment gateway integration with automatic currency conversion, billing, and receipt fiscalization.",
    "portfolio.card5.mockup.number": "Card Number",
    "portfolio.card5.mockup.date": "Expiry",
    "portfolio.card5.mockup.paybtn": "Pay $120.00",
    "portfolio.card6.tag": "AI / Smart IoT",
    "portfolio.card6.title": "Lumina IoT Dashboard",
    "portfolio.card6.desc": "Smart home management interface with AI-driven energy prediction, adaptive scheduling, and sensor control.",
    "portfolio.card6.mockup.livingroom": "Living Room",
    "portfolio.card6.mockup.bedroom": "Bedroom",
    "portfolio.card6.mockup.on": "ON",
    "portfolio.card6.mockup.off": "OFF"
  },
  ro: {
    "nav.concept": "Concept",
    "nav.services": "Servicii",
    "nav.process": "Proces",
    "nav.calculator": "Calculator",
    "nav.portfolio": "Portofoliu",
    "nav.contacts": "Contacte",
    "nav.btn.contact": "Contactează-ne",
    "hero.badge": "Era Vibe Coding a sosit",
    "hero.title": "Creăm site-urile viitorului prin <span class=\"gradient-text\">Vibe Coding</span>",
    "hero.description": "Tandemix Development îmbină sisteme AI avansate și expertiză inginerească profundă pentru a crea <span class=\"rotating-word\" id=\"rotating-word\">landing page-uri</span>, platforme SaaS și ecosisteme corporative — de 5 ori mai rapid decât agențiile tradiționale.",
    "hero.btn.start": "Începe proiectul",
    "hero.btn.calc": "Calculează costul",
    "metric.speed": "Viteză de lansare",
    "metric.design": "Design unic",
    "metric.solutions": "Soluții gata",
    "hero.terminal.waiting": "Se așteaptă compilarea codului...",
    "concept.title": "Ce este <span class=\"gradient-text\">Vibe Coding</span>?",
    "concept.subtitle": "O nouă paradigmă în dezvoltarea web: spui ce vrei să vezi, AI generează arhitectura, iar inginerii configurează UI/UX-ul perfect.",
    "concept.card1.title": "Viteză uimitoare",
    "concept.card1.text": "Utilizarea asistenților AI ne permite să generăm cod curat la viteza gândului. Lansarea unui landing page durează între 1 și 3 zile, a unui serviciu complet — de la o săptămână.",
    "concept.card2.title": "Curat & Securizat",
    "concept.card2.text": "Modelele AI găsesc instantaneu vulnerabilitățile și optimizează performanța. Rezultatul este un cod curat din punct de vedere semantic, care zboară pe orice dispozitiv.",
    "concept.card3.title": "Focus pe Design & Utilizare",
    "concept.card3.text": "Prin eliberarea timpului de la scrierea rutinantă a codului șablon, ne concentrăm pe ceea ce contează cu adevărat: încântare vizuală, animații fluide, marketing și confortul utilizatorului.",
    "comparison.title": "De ce câștigă Tandemix Development?",
    "comparison.th.criteria": "Criteriu de comparație",
    "comparison.th.tandemix": "Tandemix (Vibe Coding)",
    "comparison.th.agency": "Web Studio Tradițional",
    "comparison.th.builders": "Creatoare de site-uri (Tilda/Wix)",
    "comparison.row1.name": "Timp de dezvoltare",
    "comparison.row1.tandemix": "2–7 zile",
    "comparison.row1.agency": "3–6 săptămâni",
    "comparison.row1.builders": "1–3 zile",
    "comparison.row2.name": "Unicitatea designului",
    "comparison.row2.tandemix": "100% CSS personalizat",
    "comparison.row2.agency": "Înaltă",
    "comparison.row2.builders": "Șabloane / Limite",
    "comparison.row3.name": "Costul dezvoltării",
    "comparison.row3.tandemix": "Optim (fără plată pentru rutină)",
    "comparison.row3.agency": "Foarte înalt",
    "comparison.row3.builders": "Scăzut",
    "comparison.row4.name": "SEO & Viteză (PageSpeed)",
    "comparison.row4.tandemix": "95-100% (cod curat)",
    "comparison.row4.agency": "Înaltă",
    "comparison.row4.builders": "Medie (scripturi grele)",
    "comparison.row5.name": "Scalabilitate",
    "comparison.row5.tandemix": "Nelimitată (orice API, baze de date)",
    "comparison.row5.agency": "Nelimitată",
    "comparison.row5.builders": "Limitată de platformă",
    "services.title": "Serviciile <span class=\"gradient-text\">Noastre</span>",
    "services.subtitle": "Implementăm proiecte de orice complexitate, de la pagini promoționale suculente până la ecosisteme Tandemixe complexe.",
    "services.complexity.low": "Basic",
    "services.complexity.medium": "Mediu",
    "services.complexity.high": "Complex",
    "services.card1.title": "Landing Page",
    "services.card1.desc": "Site-uri web cu o singură pagină, cu rată mare de conversie, efecte WOW și adaptabilitate impecabilă pe dispozitive mobile.",
    "services.card1.f1": "Layout adaptiv (Mobile First)",
    "services.card1.f2": "Optimizare SEO cu scorul 95+",
    "services.card1.f3": "Integrare analytics",
    "services.card1.price": "de la $89",
    "services.card2.title": "Site-uri Multi-pagină",
    "services.card2.desc": "Site-uri corporative pentru companii. Structură bine gândită, integrare CMS pentru gestionarea conținutului, cod optimizat SEO.",
    "services.card2.f1": "CMS personalizat (WordPress/Directus)",
    "services.card2.f2": "Arhitectură SEO multi-pagină",
    "services.card2.f3": "Integrare sisteme CRM",
    "services.card2.price": "de la $250",
    "services.card3.title": "Magazine Online",
    "services.card3.desc": "Soluții moderne de comerț electronic. Căutare rapidă, coș de cumpărături convenabil, integrare sisteme de plată, gestionare comenzi și stoc.",
    "services.card3.f1": "Integrare plăți (Stripe/Carduri)",
    "services.card3.f2": "Gestionare comenzi & coș",
    "services.card3.f3": "Import/export de produse",
    "services.card3.price": "de la $349",
    "services.card4.title": "Servicii Web & SaaS",
    "services.card4.desc": "Aplicații web personalizate cu logică de business complexă: conturi de utilizator, tablouri de bord, integrare baze de date.",
    "services.card4.f1": "Baze de date (PostgreSQL/MongoDB)",
    "services.card4.f2": "Portal utilizator & Roluri",
    "services.card4.f3": "API securizat & Autorizare",
    "services.card4.price": "de la $599",
    "services.card5.title": "Integrare Soluții AI",
    "services.card5.desc": "Integrarea rețelelor neuronale în afacerea dvs. Chatboți de suport bazați pe ChatGPT, generatoare de conținut, clasificare date.",
    "services.card5.f1": "Conectare API GPT-4/Claude",
    "services.card5.f2": "Chatboți AI personalizați",
    "services.card5.f3": "Automatizare scraping & conținut",
    "services.card5.price": "de la $249",
    "services.card6.title": "Redesign & Optimizare",
    "services.card6.desc": "Transformăm site-ul dvs. învechit într-o interfață modernă și adaptivă, cu accelerarea încărcării și adaptare la standardele actuale.",
    "services.card6.f1": "Redesign UI/UX în stil Awwwards",
    "services.card6.f2": "Accelerare încărcare (Lighthouse 95+)",
    "services.card6.f3": "Optimizare pentru dispozitive mobile",
    "services.card6.price": "de la $199",
    "process.title": "Cum <span class=\"gradient-text\">lucrăm</span>",
    "process.subtitle": "Un proces transparent de la idee până la lansare și recenzii reale de la clienții noștri.",
    "process.step1.title": "Briefing & Specificații",
    "process.step1.desc": "Discutăm obiectivele dvs., analizăm nișa, formulăm cerințele și specificațiile tehnice detaliate.",
    "process.step2.title": "Design & Prototip",
    "process.step2.desc": "Creăm un prototip interactiv și elaborăm stilul vizual ținând cont de tendințele UI/UX.",
    "process.step3.title": "Vibe Coding — Dezvoltare",
    "process.step3.desc": "Scriem cod curat, rapid și adaptiv, integrăm serviciile necesare, bazele de date și AI.",
    "process.step4.title": "Testare & Lansare",
    "process.step4.desc": "Efectuăm teste de încărcare și compatibilitate cross-browser, conectăm domeniul și lansăm proiectul.",
    "testimonials.title": "Recenziile Clienților",
    "testimonials.btn.leave": "Lasă un comentariu",
    "testimonials.t1.author": "Alexandru K.",
    "testimonials.t1.role": "CEO al Startup-ului HealthFlow",
    "testimonials.t1.text": "\"Echipa Tandemix Development a realizat landing page-ul nostru în 3 zile. Rezultatul a depășit așteptările — conversiile au crescut cu 40% în prima lună.\"",
    "testimonials.t2.author": "Maria V.",
    "testimonials.t2.role": "Fondator al Agenției NovaMark",
    "testimonials.t2.text": "\"O echipă de profesioniști. Toate sarcinile au fost îndeplinite clar și la timp. Am fost deosebit de mulțumiți de designul viu și codul curat.\"",
    "testimonials.t3.author": "Dumitru K.",
    "testimonials.t3.role": "Product Manager, TechFlow SaaS",
    "testimonials.t3.text": "\"Viteză incredibilă de lucru. Un MVP SaaS complet funcțional a fost găsit în 10 zile. Codul este curat, logica este clară, suportul este mereu online.\"",
    "testimonials.t4.author": "Elena R.",
    "testimonials.t4.role": "HR Director, InvestUnion",
    "testimonials.t4.text": "\"Am realizat un redesign complet al portalului nostru corporativ și am accelerat încărcarea de 3 ori. Echipa noastră este încântată de noua viteză și ușurință în utilizare!\"",
    "calculator.title": "Calculator <span class=\"gradient-text\">Interactiv</span>",
    "calculator.subtitle": "Alegeți parametrii cheie pentru a estima costul preliminar și timpul de realizare a proiectului.",
    "calculator.labels.type": "Tipul Proiectului",
    "calculator.options.landing.title": "Landing Page",
    "calculator.options.landing.desc": "O singură pagină",
    "calculator.options.corporate.title": "Corporate",
    "calculator.options.corporate.desc": "Multi-pagină",
    "calculator.options.shop.title": "Magazin Online",
    "calculator.options.shop.desc": "Comerț electronic",
    "calculator.options.saas.title": "Serviciu Web / SaaS",
    "calculator.options.saas.desc": "Logică personalizată",
    "calculator.labels.style": "Stil & Design",
    "calculator.options.style1.title": "Minimalism",
    "calculator.options.style1.desc": "Strict și curat",
    "calculator.options.style2.title": "Premium",
    "calculator.options.style2.desc": "Detalii personalizate",
    "calculator.options.style3.title": "Efecte WOW",
    "calculator.options.style3.desc": "Animații / 3D complexe",
    "calculator.labels.extra": "Opțiuni Suplimentare",
    "calculator.features.crm.title": "Integrare CRM & Analytics",
    "calculator.features.crm.desc": "Colectare lead-uri, AmoCRM/Bitrix, Google Analytics",
    "calculator.features.pay.title": "Integrare Sisteme de Plată",
    "calculator.features.pay.desc": "Plată online cu cardul, Apple Pay, criptomonede",
    "calculator.features.ai.title": "Asistent AI / Chatbot",
    "calculator.features.ai.desc": "Integrarea modelelor de suport clienți 24/7",
    "calculator.features.lang.title": "Suport Multilingv",
    "calculator.features.lang.desc": "Traducerea site-ului într-o limbă suplimentară (RU/EN/RO)",
    "calculator.results.title": "Estimarea Proiectului Dvs.",
    "calculator.results.budget_lbl": "Buget Estimat",
    "calculator.results.time_lbl": "Timp de Dezvoltare",
    "calculator.results.info": "Datorită tehnologiei <strong>Vibe Coding</strong>, minimizăm munca de rutină, ceea ce face aceste termene reale și costurile echilibrate.",
    "calculator.results.alert": "Estimarea costurilor este preliminară, deoarece fiecare proiect este unic. Costul final este calculat individual după discutarea detaliilor și întocmirea specificațiilor tehnice.",
    "calculator.results.order": "Comandă cu această estimare",
    "portfolio.title": "Exemple din <span class=\"gradient-text\">Portofoliu</span>",
    "portfolio.subtitle": "Proiecte proiectate și codificate de echipa noastră, cu accent pe rezultate și estetică.",
    "portfolio.filters.all": "Toate",
    "portfolio.filters.fintech": "Fintech",
    "portfolio.filters.ai": "AI / SaaS",
    "portfolio.filters.ecom": "E-Commerce",
    "portfolio.card1.mockup.menu1": "Tablou de bord",
    "portfolio.card1.mockup.menu2": "Piețe",
    "portfolio.card1.mockup.title": "Finanțe Descentralizate",
    "portfolio.card1.mockup.desc": "Tranzacționează active cu ușurință",
    "portfolio.card1.mockup.btn": "Cumpără Cripto",
    "portfolio.hover.discuss": "Discută un proiect similar",
    "portfolio.card1.tag": "Fintech / Aplicație Web",
    "portfolio.card1.desc": "Landing page de înaltă tehnologie pentru un portofoliu de criptomonede, cu animații 3D și grafice de schimb valutar în timp real.",
    "portfolio.card2.mockup.bubble1": "Salut! Cu ce te pot ajuta?",
    "portfolio.card2.mockup.bubble2": "Scrie codul formularului...",
    "portfolio.card2.mockup.bubble3": "Generez codul...",
    "portfolio.card2.tag": "AI / SaaS",
    "portfolio.card2.desc": "Interfață de copywriter AI cu chat încorporat, istoric de generare și export rapid al documentelor.",
    "portfolio.card3.mockup.p1": "Căști Aura",
    "portfolio.card3.mockup.p2": "Ceas Aura",
    "portfolio.card3.tag": "E-Commerce",
    "portfolio.card3.desc": "Magazin online modern pentru electronice purtabile premium. Integrare cu Stripe, Apple Pay și panou de administrare flexibil.",
    "contacts.title": "Să creăm ceva <span class=\"gradient-text\">măreț</span>",
    "contacts.subtitle": "Contactați-ne direct sau completați formularul și vă vom răspunde în decurs de 1 oră.",
    "contacts.brand_desc": "Construim arhitectura web a viitorului, ajutând startup-urile și afacerile stabilite să lanseze produse Tandemixe elegante și funcționale.",
    "contacts.owner1.name": "Maxim",
    "contacts.role.maxim": "Co-Founder & Tech Lead",
    "contacts.owner2.name": "Victor",
    "contacts.role.vitya": "Co-Founder & UI/UX Director",
    "contacts.email_lbl": "E-mail companie",
    "contacts.form.title": "Cerere de Proiect",
    "contacts.form.desc": "Completați câmpurile și vă vom contacta pentru elaborarea unor specificații tehnice primare.",
    "contacts.form.name_label": "Numele Dvs. / Compania",
    "contacts.form.name_hint": "Vă rugăm să indicați numele dvs. sau numele companiei",
    "contacts.form.contact_label": "Date de Contact (Telegram / Telefon / E-mail)",
    "contacts.form.contact_hint": "Indicați o modalitate de a vă contacta",
    "contacts.form.type_label": "Tipul Proiectului",
    "contacts.form.select.landing": "Landing Page (O singură pagină)",
    "contacts.form.select.corporate": "Site corporativ multi-pagină",
    "contacts.form.select.shop": "Magazin online",
    "contacts.form.select.saas": "Serviciu Web / SaaS",
    "contacts.form.select.other": "Altul (Redesign, integrare AI)",
    "contacts.form.message_label": "Povestiți-ne despre proiect (opțional)",
    "contacts.form.submit": "Trimite Cererea",
    "contacts.form.alt_prefix": "Sau scrieți-ne direct pe",
    "pre_footer.title": "Sunteți gata să lansați proiectul <span class=\"gradient-text\">chiar acum?</span>",
    "pre_footer.subtitle": "Suntem disponibili 24/7. Prima consultație este gratuită.",
    "pre_footer.btn": "Obține Consultație Gratuită",
    "footer.copy": "© 2026 Tandemix Development.<br>Studio de dezvoltare web premium.",
    "footer.nav_title": "Navigare",
    "footer.contacts_title": "Contacte",
    "footer.bottom.copy": "© 2026 Tandemix Development. Toate drepturile rezervate.",
    "footer.badge": "Creat cu ❤️ și Vibe Coding",
    "js.calc.days": "zile",
    "js.calc.days_short": "z.",
    "js.form.validation_error": "Vă rugăm să completați toate câmpurile obligatorii.",
    "js.form.success_title": "Cererea a fost trimisă cu succes!",
    "js.form.success_desc": "Vă mulțumim, {name}. Am primit detaliile proiectului dvs. și vă vom contacta în decurs de o oră la: <em>{contact}</em>.",
    "js.form.error": "Trimiterea cererii a eșuat. Vă rugăm să ne contactați direct prin e-mail sau telefon.",
    "js.terminal.comments.init": "// Inițializare proiect Tandemix Development...",
    "js.terminal.comments.launch": "// Lansare proces de dezvoltare...",
    "js.terminal.compiled": "Site compilat cu succes!",
    "js.terminal.success": "[SUCCESS] Previzualizarea live a fost încărcată cu succes.",
    "js.terminal.preview_btn": "Proiect Pregătit!",
    "js.calc.order_message": "Salut! Vreau să comand un proiect bazat pe calculator:\n- Tip: {type}\n- Design: {design}{options}\n- Estimare preliminară: {price} ({days})",
    "js.calc.additional": "\nSuplimentar: ",
    "portfolio.card4.mockup.menu": "Analize",
    "portfolio.card4.mockup.w1": "Utilizatori",
    "portfolio.card4.mockup.w2": "Vânzări",
    "portfolio.card4.tag": "AI / SaaS",
    "portfolio.card4.desc": "Tablou de bord pentru analiza datelor în timp real, cu grafice interactive și prognoze bazate pe AI.",
    "calculator.results.complexity_lbl": "Complexitatea proiectului",
    "metric.support": "Suport",
    "stats.projects.val": "15+",
    "stats.projects.lbl": "proiecte finalizate",
    "stats.countries.val": "3",
    "stats.countries.lbl": "țări de prezență",
    "stats.satisfaction.val": "99%",
    "stats.satisfaction.lbl": "clienți mulțumiți",
    "stats.delivery.val": "7 zile",
    "stats.delivery.lbl": "timp mediu de lansare",
    "faq.title": "Întrebări frecvente",
    "faq.subtitle": "Răspunsuri la întrebări populare despre procesul de dezvoltare, costuri și garanții.",
    "faq.q1": "Cât costă dezvoltarea?",
    "faq.a1": "Costul se calculează individual. Puteți utiliza calculatorul nostru interactiv pentru o estimare preliminară — proiectele încep de la $250.",
    "faq.q2": "Ce garanții oferiți?",
    "faq.a2": "Garantăm o calitate înaltă a codului și oferim 30 de zile de suport tehnic gratuit după lansarea proiectului.",
    "faq.q3": "Lucrați cu clienți internaționali?",
    "faq.a3": "Da, lucrăm la distanță cu clienți din întreaga lume. Toate comunicările și contractele pot fi procesate în rusă, română sau engleză.",
    "faq.q4": "Cum se face plata?",
    "faq.a4": "De obicei, lucrăm pe baza unui avans de 50% înainte de a începe designul și prototiparea, iar restul de 50% după finalizarea completă și testare.",
    "faq.q5": "Ce este Vibe Coding?",
    "faq.a5": "Vibe Coding este o metodă modernă de dezvoltare ce îmbină puterea inteligenței artificiale și expertiza unui inginer experimentat. Definim cerințele prin text sau voce, AI generează cod curat, iar dezvoltatorul finisează interfața la perfecțiune.",
    "portfolio.card5.tag": "Fintech / E-Commerce",
    "portfolio.card5.title": "NovaPay Billing Suite",
    "portfolio.card5.desc": "Integrarea unui gateway de plată cu conversie valutară automată, facturare și fiscalizarea bonurilor.",
    "portfolio.card5.mockup.number": "Număr card",
    "portfolio.card5.mockup.date": "Termen",
    "portfolio.card5.mockup.paybtn": "Plătește $120.00",
    "portfolio.card6.tag": "AI / Smart IoT",
    "portfolio.card6.title": "Lumina IoT Dashboard",
    "portfolio.card6.desc": "Interfață de control al casei inteligente cu predicție a consumului de energie bazată pe AI, program adaptiv și monitorizare senzori.",
    "portfolio.card6.mockup.livingroom": "Living",
    "portfolio.card6.mockup.bedroom": "Dormitor",
    "portfolio.card6.mockup.on": "Pornit",
    "portfolio.card6.mockup.off": "Oprit"
  }
};

let currentLang = 'ru';

// Initialize Language Selection
const savedLang = localStorage.getItem('tandemix_lang');
if (savedLang && ['ru', 'ro', 'en'].includes(savedLang)) {
    currentLang = savedLang;
} else {
    const navLang = navigator.language.slice(0, 2).toLowerCase();
    if (['ru', 'ro', 'en'].includes(navLang)) {
        currentLang = navLang;
    } else {
        currentLang = 'ru';
    }
}
document.documentElement.lang = currentLang;

function setLanguage(lang) {
    if (!window.TRANSLATIONS[lang]) lang = 'ru';
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('tandemix_lang', lang);
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Translate elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (window.TRANSLATIONS[lang][key]) {
            el.innerHTML = window.TRANSLATIONS[lang][key];
        }
    });

    // Translate custom select trigger
    const customSelect = document.getElementById('custom-project-type');
    if (customSelect) {
        const hiddenInput = document.getElementById('form-type');
        const selectedVal = hiddenInput ? hiddenInput.value : 'landing';
        const triggerText = customSelect.querySelector('.custom-select-trigger span');
        if (triggerText) {
            const translationKey = `contacts.form.select.${selectedVal}`;
            if (window.TRANSLATIONS[lang][translationKey]) {
                triggerText.textContent = window.TRANSLATIONS[lang][translationKey].replace(/<\/?[^>]+(>|$)/g, ""); // strip HTML
            }
        }
    }

    // Recalculate cost to update calculator suffixes (days/zile)
    if (typeof window.calculateCost === 'function') {
        window.calculateCost();
    }
}

// Hook up setLanguage globally
window.setLanguage = setLanguage;

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // A5: Page Preloader
    // ==========================================
    const preloader = document.getElementById('page-preloader');
    const preloaderFill = document.getElementById('preloader-fill');
    if (preloader && preloaderFill) {
        const isVisited = sessionStorage.getItem('tandemix_visited');
        if (isVisited) {
            preloader.style.display = 'none';
        } else {
            sessionStorage.setItem('tandemix_visited', 'true');
            // Trigger animation
            preloaderFill.getBoundingClientRect(); // force reflow
            preloaderFill.style.width = '100%';
            
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.transform = 'translateY(-100%)';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 600);
            }, 1300);
        }
    }

    // Stagger animation for hero fade-in elements on load
    document.querySelectorAll('.hero-section .fade-in').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });

    // Apply translations on load
    window.setLanguage(currentLang);

    // Lang buttons event handlers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetLang = e.target.getAttribute('data-lang');
            window.setLanguage(targetLang);
            // Restart terminal animation in new language
            if (typeof startTerminalAnimation === 'function') {
                startTerminalAnimation();
            }
        });
    });

    // Initialize EmailJS
    // Инструкция по настройке EmailJS для владельцев сайта:
    // 1. Зарегистрируйтесь на сайте https://www.emailjs.com/
    // 2. Создайте почтовый сервис (Email Services) и скопируйте SERVICE_ID.
    // 3. Создайте шаблон письма (Email Templates) с параметрами:
    //    - from_name (Имя / Компания)
    //    - contact (Контакты)
    //    - project_type (Тип проекта)
    //    - message (Сообщение)
    //    И скопируйте TEMPLATE_ID.
    // 4. Перейдите в Account -> API keys, скопируйте Public Key.
    // 5. Вставьте ваши ключи ниже вместо "YOUR_PUBLIC_KEY", "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID".
    if (typeof emailjs !== 'undefined') {
        emailjs.init("YOUR_PUBLIC_KEY");
    }

    // ==========================================
    // 1. Mobile Navigation Menu (T8)
    // ==========================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const mainNavMenu = document.getElementById('main-nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && mainNavMenu) {
        const closeMenu = () => {
            mobileToggle.classList.remove('active');
            mainNavMenu.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
            const overlay = document.querySelector('.mobile-menu-overlay');
            if (overlay) {
                overlay.classList.remove('active');
                setTimeout(() => {
                    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
                }, 300);
            }
        };

        const openMenu = () => {
            mobileToggle.classList.add('active');
            mainNavMenu.classList.add('active');
            mobileToggle.setAttribute('aria-expanded', 'true');
            document.body.classList.add('menu-open');
            
            let overlay = document.querySelector('.mobile-menu-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'mobile-menu-overlay';
                document.body.appendChild(overlay);
                overlay.getBoundingClientRect(); // force reflow
                overlay.classList.add('active');
                overlay.addEventListener('click', closeMenu);
            }
        };

        mobileToggle.addEventListener('click', () => {
            const isOpen = mobileToggle.classList.contains('active');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Hook escape key listener
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                closeMenu();
            }
        });
    }

    // ==========================================
    // T5: Smooth Scroll Custom Easing
    // ==========================================
    function smoothScrollTo(targetSelector, duration = 800) {
        const targetElement = document.querySelector(targetSelector);
        if (!targetElement) return;

        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        const startPosition = window.scrollY;
        const distance = offsetPosition - startPosition;
        let startTime = null;

        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    window.smoothScrollToTop = function(duration = 800) {
        const startPosition = window.scrollY;
        const distance = -startPosition;
        let startTime = null;

        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    // Bind custom smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            
            smoothScrollTo(targetId, 800);
            
            // Close mobile menu if active
            const mobileToggle = document.getElementById('mobile-toggle');
            const mainNavMenu = document.getElementById('main-nav-menu');
            if (mobileToggle && mobileToggle.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                if (mainNavMenu) mainNavMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
                const overlay = document.querySelector('.mobile-menu-overlay');
                if (overlay) {
                    overlay.classList.remove('active');
                    setTimeout(() => {
                        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
                    }, 300);
                }
            }
        });
    });

    // ==========================================
    // [I2] Shrink Header on Scroll
    // ==========================================
    const mainHeader = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (mainHeader) {
            if (window.scrollY > 80) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        }
    });

    // ==========================================
    // A3 & [I4]: Staggered Entry Animations
    // ==========================================
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                const items = container.querySelectorAll('.reveal-item');
                const delayBase = parseInt(container.getAttribute('data-reveal-delay')) || 100;
                items.forEach((item, index) => {
                    item.style.transitionDelay = `${index * delayBase}ms`;
                    item.classList.add('revealed');
                });
                observer.unobserve(container);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal-group').forEach(group => {
        revealObserver.observe(group);
    });

    // ==========================================
    // 2. Scroll Animation (Fade In)
    // ==========================================
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // ==========================================
    // [I1] Active nav link on scroll (Scrollspy) (T3)
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const scrollspyObserverOptions = {
        threshold: 0,
        rootMargin: '-20% 0px -60% 0px'
    };

    const scrollspyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, scrollspyObserverOptions);

    sections.forEach(sec => scrollspyObserver.observe(sec));

    // ==========================================
    // A1: Parallax for Ambient Glows
    // ==========================================
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const glow1 = document.querySelector('.bg-glow-1');
        const glow2 = document.querySelector('.bg-glow-2');
        if (glow1) glow1.style.transform = 'translateY(' + (scrollY * 0.1) + 'px) translateZ(0)';
        if (glow2) glow2.style.transform = 'translateY(' + (scrollY * -0.05) + 'px) translateZ(0)';
    });

    // ==========================================
    // A2: Magnetic Buttons
    // ==========================================
    document.querySelectorAll('.btn-primary, .btn-glow').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
            btn.style.transition = 'none';
            btn.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            btn.style.transform = '';
        });
    });

    // ==========================================
    // A4: Cursor Click Ripple
    // ==========================================
    window.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        
        const cleanup = () => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        };
        ripple.addEventListener('animationend', cleanup);
        setTimeout(cleanup, 1000);
    });

    // ==========================================
    // V14: Footer Polish Columns Reveal & Years
    // ==========================================
    const footerCols = document.querySelectorAll('.footer-brand, .footer-nav, .footer-contacts');
    footerCols.forEach(col => col.classList.add('footer-column-animated'));

    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerCols.forEach((col, idx) => {
                    setTimeout(() => {
                        col.classList.add('visible');
                    }, idx * 150);
                });
                footerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const footerElement = document.querySelector('footer.main-footer');
    if (footerElement) footerObserver.observe(footerElement);

    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    const yearElBottom = document.getElementById('footer-year-bottom');
    if (yearElBottom) yearElBottom.textContent = new Date().getFullYear();


    // ==========================================
    // [V1] Animated Particle Background
    // ==========================================
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let numParticles = window.innerWidth < 768 ? 30 : 90;
        let mouseX = -1000, mouseY = -1000;
        let animId = null;
        let isAnimating = true;

        const colors = ['#00d4ff', '#8a2be2'];

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });
        canvas.addEventListener('mouseleave', () => {
            mouseX = -1000;
            mouseY = -1000;
        });

        function initCanvas() {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
            numParticles = window.innerWidth < 768 ? 30 : 90;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.type = Math.random() > 0.5 ? 'stellar' : 'normal';
                
                if (this.type === 'stellar') {
                    this.radius = Math.random() * 2 + 1.5; // stellar are a bit larger/brighter
                    this.pulseSpeed = 0.02 + Math.random() * 0.03;
                    this.pulseTime = Math.random() * Math.PI * 2;
                    this.baseOpacity = Math.random() * 0.3 + 0.5; // 0.5 to 0.8
                    this.opacity = this.baseOpacity;
                } else {
                    this.radius = Math.random() * 1.5 + 1; // 1 to 2.5px
                    this.opacity = Math.random() * 0.4 + 0.3; // 0.3 to 0.7
                }
                
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse repulsion
                const dx = this.x - mouseX;
                const dy = this.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const repelRadius = 130;
                if (distance < repelRadius && distance > 0) {
                    const force = (repelRadius - distance) / repelRadius;
                    this.x += (dx / distance) * force * 4;
                    this.y += (dy / distance) * force * 4;
                }

                // Stellar pulse opacity
                if (this.type === 'stellar') {
                    this.pulseTime += this.pulseSpeed;
                    this.opacity = this.baseOpacity + Math.sin(this.pulseTime) * 0.25;
                    if (this.opacity < 0.1) this.opacity = 0.1;
                    if (this.opacity > 1) this.opacity = 1;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();
            }
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle());
            }
        }

        function drawLines() {
            ctx.globalAlpha = 1; // Ensure lines are drawn with correct relative transparency
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgba(0, 212, 255, ' + ((1 - dist / 100) * 0.15) + ')';
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            if (!isAnimating) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            drawLines();
            animId = requestAnimationFrame(animateParticles);
        }

        initCanvas();
        createParticles();
        animateParticles();

        window.addEventListener('resize', () => {
            initCanvas();
            createParticles();
        });

        // Visibilitychange handler to stop animation when hidden (T1)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                isAnimating = false;
                if (animId) cancelAnimationFrame(animId);
            } else {
                if (!isAnimating) {
                    isAnimating = true;
                    animateParticles();
                }
            }
        });
    }


    // ==========================================
    // 3. Interactive Vibe Coding Terminal
    // ==========================================
    const editorCode = document.getElementById('editor-code');
    const livePreview = document.getElementById('terminal-live-preview');
    const terminalWindow = document.querySelector('.terminal-window');
    // ==========================================
    // [T2] Robust data-attribute selector query elements
    // ==========================================
    const calcOptions = document.querySelectorAll('[data-base-price]');
    const designOptions = document.querySelectorAll('[data-multiplier]');
    const featureCheckboxes = document.querySelectorAll('.calc-feature');
    
    const displayPriceRange = document.getElementById('calc-price-range');
    const displayTime = document.getElementById('calc-time');
    const btnOrderCalc = document.getElementById('btn-order-calc');

    let lastMinPrice = 89;

    // [I5] Linear interpolation count-up budget animator
    function animateCountUp(element, start, end, duration, prefix = "$", suffix = "") {
        if (!element) return;
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Linear interpolation
            const current = Math.round(start + (end - start) * progress);
            const currentMax = Math.round(current * 1.35);
            
            element.textContent = `${prefix}${current}${suffix} - ${prefix}${currentMax}${suffix}`;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }

    function triggerResultAnimation() {
        const elements = [displayPriceRange, displayTime];
        elements.forEach(el => {
            if (el) {
                el.classList.remove('result-scale-up');
                void el.offsetWidth; // trigger reflow
                el.classList.add('result-scale-up');
            }
        });
    }

    function saveCalculatorState() {
        const activeType = document.querySelector('[data-base-price].active');
        const activeDesign = document.querySelector('[data-multiplier].active');
        const features = Array.from(document.querySelectorAll('.calc-feature')).map(cb => cb.checked);
        
        const state = {
            type: activeType ? activeType.getAttribute('data-type') : 'landing',
            design: activeDesign ? activeDesign.getAttribute('data-design') : 'standard',
            features: features
        };
        localStorage.setItem('tandemix_calc_state', JSON.stringify(state));
    }

    function restoreCalculatorState() {
        const saved = localStorage.getItem('tandemix_calc_state');
        if (!saved) return;
        try {
            const state = JSON.parse(saved);
            if (state.type) {
                const typeEl = document.querySelector(`[data-base-price][data-type="${state.type}"]`);
                if (typeEl && calcOptions.length > 0) {
                    calcOptions.forEach(o => o.classList.remove('active'));
                    typeEl.classList.add('active');
                }
            }
            if (state.design) {
                const designEl = document.querySelector(`[data-multiplier][data-design="${state.design}"]`);
                if (designEl && designOptions.length > 0) {
                    designOptions.forEach(o => o.classList.remove('active'));
                    designEl.classList.add('active');
                }
            }
            if (state.features && Array.isArray(state.features)) {
                featureCheckboxes.forEach((cb, idx) => {
                    const checked = state.features[idx];
                    cb.checked = !!checked;
                    const parent = cb.closest('.calc-checkbox-item');
                    if (parent) {
                        if (checked) parent.classList.add('active');
                        else parent.classList.remove('active');
                    }
                });
            }
        } catch (e) {
            console.error("Failed to restore calculator state", e);
        }
    }

    function calculateCost() {
        if (!displayPriceRange || !displayTime) return;

        // Get selected project type
        const activeType = document.querySelector('[data-base-price].active');
        if (!activeType) return;
        const basePrice = parseFloat(activeType.getAttribute('data-base-price'));
        const baseDays = parseInt(activeType.getAttribute('data-base-days'));

        // Get selected design style multiplier
        const activeDesign = document.querySelector('[data-multiplier].active');
        if (!activeDesign) return;
        const designMultiplier = parseFloat(activeDesign.getAttribute('data-multiplier'));

        // Sum additional features
        let extraPrice = 0;
        let extraDays = 0;
        let selectedOptions = [];

        featureCheckboxes.forEach(checkbox => {
            const parent = checkbox.closest('.calc-checkbox-item');
            if (parent) {
                if (checkbox.checked) {
                    parent.classList.add('active');
                    extraPrice += parseFloat(checkbox.value);
                    extraDays += parseInt(checkbox.getAttribute('data-days'));
                    const optionSpan = parent.querySelector('.checkbox-text span');
                    if (optionSpan) {
                        selectedOptions.push(optionSpan.textContent);
                    }
                } else {
                    parent.classList.remove('active');
                }
            }
        });

        // Compute total price and build a range ($min to $max)
        const minPrice = Math.round((basePrice * designMultiplier) + extraPrice);

        const minDays = baseDays + Math.round(extraDays * 0.7);
        const maxDays = baseDays + extraDays;

        // Format result output with count-up animation
        animateCountUp(displayPriceRange, lastMinPrice, minPrice, 400, "$", "");
        const daysText = minDays === maxDays 
            ? `${minDays} ${window.TRANSLATIONS[currentLang]["js.calc.days_short"]}` 
            : `${minDays}-${maxDays} ${window.TRANSLATIONS[currentLang]["js.calc.days"]}`;
        displayTime.textContent = daysText;

        // Trigger micro-scale animation
        triggerResultAnimation();

        // Update accordion previews for mobile
        const previewType = document.getElementById('calc-preview-type');
        const previewStyle = document.getElementById('calc-preview-style');
        const previewExtra = document.getElementById('calc-preview-extra');

        if (previewType) {
            const typeName = activeType.querySelector('span') ? activeType.querySelector('span').textContent : '';
            previewType.textContent = typeName ? `(${typeName})` : '';
        }
        if (previewStyle) {
            const styleName = activeDesign.querySelector('span') ? activeDesign.querySelector('span').textContent : '';
            previewStyle.textContent = styleName ? `(${styleName})` : '';
        }
        if (previewExtra) {
            if (selectedOptions.length > 0) {
                previewExtra.textContent = `(+${selectedOptions.length})`;
            } else {
                previewExtra.textContent = '';
            }
        }

        // Calculate Complexity Progress Bar
        let complexityPercent = 20;
        if (activeType) {
            const activeTypeVal = activeType.getAttribute('data-type');
            if (activeTypeVal === 'corporate') complexityPercent = 45;
            else if (activeTypeVal === 'shop') complexityPercent = 70;
            else if (activeTypeVal === 'saas') complexityPercent = 90;
        }
        let checkedCount = 0;
        featureCheckboxes.forEach(checkbox => {
            if (checkbox.checked) checkedCount++;
        });
        complexityPercent += checkedCount * 10;
        if (activeDesign) {
            const designMultiplierVal = parseFloat(activeDesign.getAttribute('data-multiplier'));
            if (designMultiplierVal === 1.5) complexityPercent += 15;
            else if (designMultiplierVal === 1.25) complexityPercent += 8;
        }
        complexityPercent = Math.min(complexityPercent, 100);
        const progressFill = document.getElementById('complexity-progress-fill');
        if (progressFill) {
            progressFill.style.width = complexityPercent + '%';
        }

        // Update tracking values
        lastMinPrice = minPrice;

        // Save current parameters to localStorage (T6)
        saveCalculatorState();

        const typeSpan = activeType.querySelector('span');
        const designSpan = activeDesign.querySelector('span');

        return {
            typeLabel: typeSpan ? typeSpan.textContent : '',
            designLabel: designSpan ? designSpan.textContent : '',
            features: selectedOptions,
            priceLabel: `$${minPrice} - $${Math.round(minPrice * 1.35)}`,
            daysLabel: minDays === maxDays 
                ? `${minDays} ${window.TRANSLATIONS[currentLang]["js.calc.days_short"]}` 
                : `${minDays}-${maxDays} ${window.TRANSLATIONS[currentLang]["js.calc.days"]}`
        };
    }

    // Expose calculateCost globally so setLanguage can trigger it
    window.calculateCost = calculateCost;

    // Set event handlers for Calculator Elements
    calcOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            calcOptions.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            calculateCost();
        });
    });

    designOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            designOptions.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            calculateCost();
        });
    });

    featureCheckboxes.forEach(chk => {
        chk.addEventListener('change', calculateCost);
    });

    // Restore calculator state if it exists (T6)
    restoreCalculatorState();

    // Initialize first calculation
    calculateCost();

    // Dynamic Calculator Layout Arranger (Mobile vs Desktop)
    function arrangeMobileCalculator() {
        const isMobile = window.innerWidth <= 768;
        const calcGroups = document.querySelectorAll('.calc-group');
        const resultsCard = document.querySelector('.results-card');
        const calcForm = document.querySelector('.calculator-form');
        const resultsTitle = document.querySelector('.results-title');

        if (!resultsCard || !calcForm || calcGroups.length === 0) return;

        if (isMobile) {
            // Move calcGroups inside resultsCard, right after the title
            let lastInserted = resultsTitle;
            calcGroups.forEach(group => {
                if (lastInserted) {
                    lastInserted.after(group);
                } else {
                    resultsCard.appendChild(group);
                }
                lastInserted = group;
            });
        } else {
            // Move calcGroups back to calcForm
            calcGroups.forEach(group => {
                calcForm.appendChild(group);
            });
        }
    }

    // Call layout arranger on resize and load
    window.addEventListener('resize', arrangeMobileCalculator);
    arrangeMobileCalculator();

    // Dynamic Portfolio Tags Cloner (Mobile vs Desktop)
    function arrangeMobilePortfolioTags() {
        const isMobile = window.innerWidth <= 768;
        document.querySelectorAll('.portfolio-card').forEach(card => {
            const details = card.querySelector('.portfolio-details');
            const hoverTags = card.querySelector('.portfolio-hover-info .hover-tags');
            
            if (!details || !hoverTags) return;
            
            let mobileTags = details.querySelector('.mobile-portfolio-tags');
            
            if (isMobile) {
                if (!mobileTags) {
                    mobileTags = hoverTags.cloneNode(true);
                    mobileTags.classList.add('mobile-portfolio-tags');
                    details.appendChild(mobileTags);
                }
            } else {
                if (mobileTags) {
                    mobileTags.remove();
                }
            }
        });
    }

    // Call portfolio tags cloner on resize and load
    window.addEventListener('resize', arrangeMobilePortfolioTags);
    arrangeMobilePortfolioTags();

    // Interactive Calculator Accordion on Mobile (Collapse/Expand)
    document.querySelectorAll('.calc-group').forEach((group) => {
        const label = group.querySelector('.calc-label');
        if (label) {
            label.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    const isExpanded = group.classList.contains('expanded');
                    
                    // Close other groups
                    document.querySelectorAll('.calc-group').forEach(otherGroup => {
                        if (otherGroup !== group) {
                            otherGroup.classList.remove('expanded');
                        }
                    });
                    
                    if (isExpanded) {
                        group.classList.remove('expanded');
                    } else {
                        group.classList.add('expanded');
                    }
                }
            });
        }
    });

    // Expand the first group by default on mobile viewports
    if (window.innerWidth <= 768) {
        const firstGroup = document.querySelector('.calc-group');
        if (firstGroup) {
            firstGroup.classList.add('expanded');
        }
    }

    // "Order by quote" handler (T6/T5)
    if (btnOrderCalc) {
        btnOrderCalc.addEventListener('click', () => {
            const calcDetails = calculateCost();
            const contactFormSection = document.getElementById('contacts');
            const hiddenTypeInput = document.getElementById('form-type');
            const customSelectElement = document.getElementById('custom-project-type');
            const messageArea = document.getElementById('form-message');

            if (contactFormSection && calcDetails) {
                // Scroll smoothly to form using custom smooth scroll (T5)
                if (typeof smoothScrollTo === 'function') {
                    smoothScrollTo('#contacts', 800);
                } else {
                    contactFormSection.scrollIntoView({ behavior: 'smooth' });
                }

                // Set value for hidden project_type input
                let mappedTypeVal = 'landing';
                let mappedTypeLabel = 'Landing Page (Одностраничник)';
                if (calcDetails.typeLabel.includes('Corporate') || calcDetails.typeLabel.includes('Корпоративный')) {
                    mappedTypeVal = 'corporate';
                    mappedTypeLabel = 'Корпоративный многостраничный сайт';
                } else if (calcDetails.typeLabel.includes('магазин') || calcDetails.typeLabel.includes('Shop')) {
                    mappedTypeVal = 'shop';
                    mappedTypeLabel = 'Интернет-магазин';
                } else if (calcDetails.typeLabel.includes('SaaS') || calcDetails.typeLabel.includes('сервис')) {
                    mappedTypeVal = 'saas';
                    mappedTypeLabel = 'Web-сервис / SaaS';
                }

                if (hiddenTypeInput) {
                    hiddenTypeInput.value = mappedTypeVal;
                }

                // Sync custom select UI
                if (customSelectElement) {
                    const triggerText = customSelectElement.querySelector('.custom-select-trigger span');
                    if (triggerText) {
                        triggerText.textContent = mappedTypeLabel;
                    }
                    const options = customSelectElement.querySelectorAll('.custom-option');
                    options.forEach(opt => {
                        if (opt.getAttribute('data-value') === mappedTypeVal) {
                            opt.classList.add('selected');
                        } else {
                            opt.classList.remove('selected');
                        }
                    });
                }

                const optionsStr = calcDetails.features.length > 0 
                    ? `${window.TRANSLATIONS[currentLang]["js.calc.additional"]}${calcDetails.features.join(', ')}` 
                    : '';
                
                if (messageArea) {
                    messageArea.value = window.TRANSLATIONS[currentLang]["js.calc.order_message"]
                        .replace("{type}", calcDetails.typeLabel)
                        .replace("{design}", calcDetails.designLabel)
                        .replace("{options}", optionsStr)
                        .replace("{price}", calcDetails.priceLabel)
                        .replace("{days}", calcDetails.daysLabel);
                }

                // Focus name input to prompt typing
                setTimeout(() => {
                    const nameInput = document.getElementById('form-name');
                    if (nameInput) {
                        nameInput.focus();
                    }
                }, 800);
            }
        });
    }

    function getTerminalCodeLines(lang) {
        const comments = {
            ru: {
                init: '// Инициализация проекта Tandemix Development...',
                vibe: ' // Использование AI ассистентов',
                launch: '// Запуск процесса разработки...',
                compiled: 'Сайт успешно скомпилирован!'
            },
            ro: {
                init: '// Inițializare proiect Tandemix Development...',
                vibe: ' // Utilizarea asistenților AI',
                launch: '// Lansare proces de dezvoltare...',
                compiled: 'Site compilat cu succes!'
            },
            en: {
                init: '// Initializing Tandemix Development project...',
                vibe: ' // Using AI assistants',
                launch: '// Launching development process...',
                compiled: 'Website compiled successfully!'
            }
        };
        const c = comments[lang] || comments.ru;
        return [
            { text: c.init, isComment: true },
            { text: 'const studio = new TandemixStudio("Tandemix Development");', isCode: true },
            { text: 'const project = studio.createProject({', isCode: true },
            { text: '  type: "Premium Web Application",', isCode: true, indent: true },
            { text: '  styling: "Custom Vanilla CSS (Ocean Gradient)",', isCode: true, indent: true },
            { text: `  vibeCoding: true,${c.vibe}`, isCode: true, indent: true },
            { text: '  quality: "Pixel Perfect",', isCode: true, indent: true },
            { text: '  speedBoost: "5x Faster"', isCode: true, indent: true },
            { text: '});', isCode: true },
            { text: '', isCode: true },
            { text: c.launch, isComment: true },
            { text: 'await project.renderLivePreview();', isCode: true },
            { text: `console.log("${c.compiled}");`, isCode: true }
        ];
    }

    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let typingTimer = null;

    function startTerminalAnimation() {
        if (!editorCode || !livePreview) return;
        
        if (typingTimer) {
            clearTimeout(typingTimer);
            typingTimer = null;
        }
        
        if (terminalWindow) {
            terminalWindow.classList.remove('compiled');
        }
        editorCode.innerHTML = '';
        const waitingText = window.TRANSLATIONS[currentLang]["hero.terminal.waiting"];
        livePreview.innerHTML = `<div class="preview-placeholder">${waitingText}</div>`;
        currentLineIndex = 0;
        currentCharIndex = 0;
        
        typeNextChar();
    }

    function typeNextChar() {
        const terminalCodeLines = getTerminalCodeLines(currentLang);
        if (currentLineIndex >= terminalCodeLines.length) {
            showLivePreview();
            return;
        }

        const currentLineObj = terminalCodeLines[currentLineIndex];
        const lineText = currentLineObj.text;

        let lineEl = editorCode.querySelector(`.line-${currentLineIndex}`);
        if (!lineEl) {
            lineEl = document.createElement('p');
            lineEl.className = `line-${currentLineIndex}`;
            
            if (currentLineObj.indent) {
                lineEl.style.paddingLeft = '1.5rem';
            }
            
            if (currentLineObj.isComment) {
                lineEl.classList.add('code-comment');
            } else {
                lineEl.classList.add('code-text');
            }
            
            const oldCursor = editorCode.querySelector('.code-cursor');
            if (oldCursor) oldCursor.remove();
            
            editorCode.appendChild(lineEl);
            
            const cursor = document.createElement('span');
            cursor.className = 'code-cursor';
            editorCode.appendChild(cursor);
        }

        if (currentCharIndex < lineText.length) {
            let char = lineText.charAt(currentCharIndex);
            lineEl.innerHTML += char;
            currentCharIndex++;
            
            const body = editorCode.parentElement;
            body.scrollTop = body.scrollHeight;

            typingTimer = setTimeout(typeNextChar, Math.random() * 20 + 10);
        } else {
            highlightFinishedLine(lineEl, lineText, currentLineObj.isComment);
            
            currentLineIndex++;
            currentCharIndex = 0;
            typingTimer = setTimeout(typeNextChar, 300);
        }
    }

    function highlightFinishedLine(element, text, isComment) {
        if (isComment) {
            element.innerHTML = `<span class="code-comment">${text}</span>`;
            return;
        }
        
        let html = text
            .replace(/(const|let|var|new|await|return|import|export)/g, '<span class="code-keyword">$1</span>')
            .replace(/(console\.log|TandemixStudio|createProject|renderLivePreview)/g, '<span class="code-func">$1</span>')
            .replace(/(true|false|"[^"]*")/g, '<span class="code-string">$1</span>');
            
        element.innerHTML = html;
    }

    function showLivePreview() {
        if (!livePreview) return;
        
        typingTimer = setTimeout(() => {
            const previewBtnText = window.TRANSLATIONS[currentLang]["js.terminal.preview_btn"];
            livePreview.innerHTML = `
                <div class="live-site-sim">
                    <div class="live-site-logo">Tandemix Development</div>
                    <div class="live-site-bar"></div>
                    <div class="live-site-btn">${previewBtnText}</div>
                </div>
            `;
            
            const successLogText = window.TRANSLATIONS[currentLang]["js.terminal.success"];
            const finalLog = document.createElement('p');
            finalLog.innerHTML = `<span class="code-comment" style="color: #27c93f; font-weight: bold;">${successLogText}</span>`;
            
            const cursor = editorCode.querySelector('.code-cursor');
            if (cursor) cursor.remove();
            editorCode.appendChild(finalLog);

            if (terminalWindow) {
                terminalWindow.classList.add('compiled');
            }

            typingTimer = setTimeout(startTerminalAnimation, 8000);
        }, 600);
    }

    // Launch terminal loop
    startTerminalAnimation();

    // Instantly pause/resume hero animations on scroll
    window.addEventListener('scroll', () => {
        const scrolledAway = window.scrollY > 100; // Pause as soon as they scroll down 100px
        
        if (scrolledAway) {
            // Instantly pause particle canvas
            if (canvas && isAnimating) {
                isAnimating = false;
                if (animId) {
                    cancelAnimationFrame(animId);
                    animId = null;
                }
            }
            // Instantly pause terminal typewriter
            if (typingTimer) {
                clearTimeout(typingTimer);
                typingTimer = null;
            }
            if (terminalWindow) {
                terminalWindow.classList.add('paused-animation');
            }
        } else {
            // Resume particle canvas when returning to top
            if (canvas && !isAnimating) {
                isAnimating = true;
                animateParticles();
            }
            // Resume terminal typewriter when returning to top
            if (editorCode && !typingTimer) {
                startTerminalAnimation();
            }
            if (terminalWindow) {
                terminalWindow.classList.remove('paused-animation');
            }
        }
    }, { passive: true });





    // ==========================================
    // [V8] Custom Select Dropdown Toggle Logic
    // ==========================================
    const customSelect = document.getElementById('custom-project-type');
    if (customSelect) {
        const trigger = customSelect.querySelector('.custom-select-trigger');
        const triggerText = trigger.querySelector('span');
        const options = customSelect.querySelectorAll('.custom-option');
        const hiddenInput = document.getElementById('form-type');

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            customSelect.classList.toggle('open');
        });

        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                triggerText.textContent = option.textContent;
                if (hiddenInput) {
                    hiddenInput.value = option.getAttribute('data-value');
                    hiddenInput.dispatchEvent(new Event('change'));
                }
                customSelect.classList.remove('open');
            });
        });

        document.addEventListener('click', () => {
            customSelect.classList.remove('open');
        });
    }


    // ==========================================
    // 5. Contact Form Submission with EmailJS
    // ==========================================
    const contactForm = document.getElementById('tandemix-contact-form');
    const formStatus = document.getElementById('form-status-msg');

    if (contactForm && formStatus) {
        // [T4] Regex для контакта: phone OR email OR @telegram
        const validateContact = (value) => {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
            const telegramRegex = /^@[a-zA-Z0-9_]{5,32}$/;
            const trimmed = value.trim();
            return emailRegex.test(trimmed) || phoneRegex.test(trimmed) || telegramRegex.test(trimmed);
        };

        // [I7] Real-time fields validation on blur
        const requiredFields = contactForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            const group = field.closest('.form-group');
            if (!group) return;
            
            field.addEventListener('blur', () => {
                let isValid = true;
                if (!field.value.trim()) {
                    isValid = false;
                } else if (field.id === 'form-contact') {
                    isValid = validateContact(field.value);
                }
                
                if (!isValid) {
                    group.classList.add('field-error');
                } else {
                    group.classList.remove('field-error');
                }
            });

            field.addEventListener('focus', () => {
                group.classList.remove('field-error');
            });

            field.addEventListener('input', () => {
                group.classList.remove('field-error');
            });
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Clear status
            formStatus.className = 'form-status';
            formStatus.style.display = 'none';

            // Extract values
            const nameEl = document.getElementById('form-name');
            const contactEl = document.getElementById('form-contact');
            const typeEl = document.getElementById('form-type');
            const messageEl = document.getElementById('form-message');

            const name = nameEl ? nameEl.value.trim() : '';
            const contact = contactEl ? contactEl.value.trim() : '';
            const type = typeEl ? typeEl.value : 'landing';
            const message = messageEl ? messageEl.value.trim() : '';

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (!submitBtn) return;
            const originalBtnText = submitBtn.textContent;

            // Form validation status check
            let hasErrors = false;
            requiredFields.forEach(field => {
                const group = field.closest('.form-group');
                if (!group) return;
                
                let isValid = true;
                if (!field.value.trim()) {
                    isValid = false;
                } else if (field.id === 'form-contact') {
                    isValid = validateContact(field.value);
                }
                
                if (!isValid) {
                    group.classList.add('field-error');
                    hasErrors = true;
                }
            });

            if (hasErrors) {
                formStatus.textContent = window.TRANSLATIONS[currentLang]["js.form.validation_error"];
                formStatus.classList.add('error');
                formStatus.style.display = 'block';
                return;
            }

            // [I8] Disable button and show CSS loading spinner state
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');

            const handleSuccess = () => {
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
                const successTitle = window.TRANSLATIONS[currentLang]["js.form.success_title"];
                const successDesc = window.TRANSLATIONS[currentLang]["js.form.success_desc"]
                    .replace("{name}", name)
                    .replace("{contact}", contact);
                
                // [T4] Animated SVG checkmark on success
                formStatus.innerHTML = `
                    <div class="checkmark-wrapper">
                        <svg class="checkmark-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                          <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                          <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                    </div>
                    <strong>${successTitle}</strong><br>${successDesc}
                `;
                formStatus.classList.add('success');
                formStatus.style.display = 'block';
                contactForm.reset();
                
                // Reset select trigger name
                const customSelectEl = document.getElementById('custom-project-type');
                if (customSelectEl) {
                    const triggerText = customSelectEl.querySelector('.custom-select-trigger span');
                    if (triggerText) {
                        triggerText.textContent = window.TRANSLATIONS[currentLang]["contacts.form.select.landing"];
                    }
                    const options = customSelectEl.querySelectorAll('.custom-option');
                    options.forEach((opt, idx) => {
                        if (idx === 0) opt.classList.add('selected');
                        else opt.classList.remove('selected');
                    });
                }
                // Reset checkbox classes
                document.querySelectorAll('.calc-checkbox-item').forEach(el => el.classList.remove('active'));
            };

            const handleError = () => {
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
                formStatus.textContent = window.TRANSLATIONS[currentLang]["js.form.error"];
                formStatus.classList.add('error');
                formStatus.style.display = 'block';
            };

            // Send request to FormSubmit to route email directly to tandemixdevelopment@gmail.com
            fetch("https://formsubmit.co/ajax/tandemixdevelopment@gmail.com", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    contact: contact,
                    project_type: type,
                    message: message,
                    _subject: "Новая заявка с сайта Tandemix"
                })
            })
            .then(response => {
                if (response.ok) {
                    handleSuccess();
                } else {
                    handleError();
                }
            })
            .catch(err => {
                console.error("FormSubmit Error: ", err);
                handleError();
            });
        });
    }


    // ==========================================
    // [I9] Scroll To Top Page Button Logic
    // ==========================================
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            if (typeof window.smoothScrollToTop === 'function') {
                window.smoothScrollToTop(800);
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'auto'
                });
            }
        });
    }

    // ==========================================
    // [P2] Textarea Resizer dragging script
    // ==========================================
    (function initTextareaResizer() {
        const textarea = document.getElementById('form-message');
        const resizer = document.getElementById('textarea-resizer');
        if (!textarea || !resizer) return;
        
        let startY = 0;
        let startHeight = 0;
        
        resizer.addEventListener('mousedown', (e) => {
            e.preventDefault();
            startY = e.clientY;
            startHeight = textarea.offsetHeight;
            
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        });
        
        function handleMouseMove(e) {
            const dy = e.clientY - startY;
            const newHeight = Math.max(100, Math.min(400, startHeight + dy));
            textarea.style.height = newHeight + 'px';
        }
        
        function handleMouseUp() {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    })();

    // ==========================================
    // [P3] 3D Mouse-Tilt Logic
    // ==========================================
    document.querySelectorAll('.service-card, .portfolio-card, .concept-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8; // max 8deg
            const rotateY = ((x - centerX) / centerX) * 8;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            
            // Set variables for concept-card spotlight
            if (card.classList.contains('concept-card')) {
                card.style.setProperty('--x', (x / rect.width * 100) + '%');
                card.style.setProperty('--y', (y / rect.height * 100) + '%');
            }
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
            card.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });

    // ==========================================
    // [P4] Hero Metrics Count-Up Animation
    // ==========================================
    document.querySelectorAll('.metric-val[data-count-to]').forEach(el => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(el.dataset.countTo);
                    const suffix = el.dataset.suffix || '';
                    let current = 0;
                    const increment = target / 60;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        el.textContent = Math.floor(current) + suffix;
                    }, 16);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.8 });
        observer.observe(el);
    });

    // ==========================================
    // Stats Bar Metrics Count-Up Animation
    // ==========================================
    document.querySelectorAll('.stats-val').forEach(el => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const text = el.textContent.trim();
                    const match = text.match(/^(\d+)(.*)$/);
                    if (match) {
                        const target = parseInt(match[1]);
                        const suffix = match[2];
                        let current = 0;
                        const increment = target / 60;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                current = target;
                                clearInterval(timer);
                            }
                            el.textContent = Math.floor(current) + suffix;
                        }, 16);
                    }
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(el);
    });

    // ==========================================
    // [P6] Process Line Animation on Scroll
    // ==========================================
    const processLine = document.querySelector('.process-line');
    const processStepsElement = document.querySelector('.process-steps');
    if (processLine && processStepsElement) {
        const processObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(() => processLine.classList.add('animate'), 200);
                processObserver.disconnect();
            }
        }, { threshold: 0.3 });
        processObserver.observe(processStepsElement);
    }

    // ==========================================
    // [P8] Testimonial Slider Auto-Play Logic
    // ==========================================
    (function initTestimonialSlider() {
        const track = document.getElementById('testimonials-track');
        const cards = track ? Array.from(track.children) : [];
        if (!track || cards.length < 2) return;
        
        let currentIndex = 0;
        const dotsContainer = document.getElementById('t-dots');
        
        function getSliderParams() {
            const visibleCards = window.innerWidth < 768 ? 1 : 2;
            const totalSlides = cards.length - visibleCards + 1;
            return { visibleCards, totalSlides };
        }

        // Rebuild dots
        function rebuildDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            const { totalSlides } = getSliderParams();
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = 'testimonial-dot' + (i === currentIndex ? ' active' : '');
                dot.addEventListener('click', () => goTo(i));
                dotsContainer.appendChild(dot);
            }
        }
        
        function goTo(index) {
            const { totalSlides } = getSliderParams();
            currentIndex = (index + totalSlides) % totalSlides;
            const cardWidth = cards[0].offsetWidth + 32; // 32 = gap 2rem
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
            if (dotsContainer) {
                const dots = dotsContainer.children;
                for (let i = 0; i < dots.length; i++) {
                    if (dots[i]) {
                        dots[i].classList.toggle('active', i === currentIndex);
                    }
                }
            }
        }
        
        rebuildDots();
        
        document.getElementById('t-prev')?.addEventListener('click', () => goTo(currentIndex - 1));
        document.getElementById('t-next')?.addEventListener('click', () => goTo(currentIndex + 1));
        
        // Auto-play every 5 seconds
        let autoPlay = setInterval(() => goTo(currentIndex + 1), 5000);
        track.addEventListener('mouseenter', () => clearInterval(autoPlay));
        track.addEventListener('mouseleave', () => {
            autoPlay = setInterval(() => goTo(currentIndex + 1), 5000);
        });
        
        // Touch/swipe for mobile
        let touchStartX = 0;
        track.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
        track.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) diff > 0 ? goTo(currentIndex + 1) : goTo(currentIndex - 1);
        });
        
        // Adjust translation on window resize
        window.addEventListener('resize', () => {
            const { totalSlides } = getSliderParams();
            if (currentIndex >= totalSlides) {
                currentIndex = totalSlides - 1;
            }
            rebuildDots();
            goTo(currentIndex);
        });
    })();

    // ==========================================
    // [P10] Section Header Title Reveal Logic
    // ==========================================
    document.querySelectorAll('.section-title').forEach(title => {
        title.innerHTML = `<span class="title-reveal">${title.innerHTML}</span>`;
        const sectionHeader = title.closest('.section-header');
        if (sectionHeader) {
            const headerObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    sectionHeader.classList.add('in-view');
                    headerObserver.disconnect();
                }
            }, { threshold: 0.5 });
            headerObserver.observe(sectionHeader);
        }
    });

    // ==========================================
    // [C1] Rotating Words in Hero Description
    // ==========================================
    const rotatingWords = {
        ru: ['лендингов', 'интернет-магазинов', 'SaaS-платформ', 'AI-сервисов', 'веб-экосистем'],
        ro: ['landing page-uri', 'magazine online', 'platforme SaaS', 'servicii AI', 'ecosisteme web'],
        en: ['landing pages', 'online stores', 'SaaS platforms', 'AI services', 'web ecosystems']
    };
    let wordIndex = 0;
    setInterval(() => {
        const rotatingEl = document.getElementById('rotating-word');
        if (!rotatingEl) return;
        rotatingEl.style.opacity = '0';
        rotatingEl.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            const currentWords = rotatingWords[currentLang] || rotatingWords.ru;
            wordIndex = (wordIndex + 1) % currentWords.length;
            const rotatingElUpdated = document.getElementById('rotating-word');
            if (rotatingElUpdated) {
                rotatingElUpdated.textContent = currentWords[wordIndex];
                rotatingElUpdated.style.opacity = '1';
                rotatingElUpdated.style.transform = 'translateY(0)';
            }
        }, 300);
    }, 2500);

    // ==========================================
    // [C2] Portfolio Filtering Logic
    // ==========================================
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            document.querySelectorAll('.portfolio-card').forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ==========================================
    // [F1] Scroll Progress Bar Logic
    // ==========================================
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressBar.style.width = progress + '%';
        });
    }

    // ==========================================
    // Viewport observer for Comparison Table (.tbl-good / .tbl-bad bounce animation)
    // ==========================================
    const tblGoods = document.querySelectorAll('.tbl-good');
    const tblBads = document.querySelectorAll('.tbl-bad');
    if (tblGoods.length > 0 || tblBads.length > 0) {
        const bounceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('tbl-good')) {
                        entry.target.classList.add('animate-bounce');
                    } else if (entry.target.classList.contains('tbl-bad')) {
                        entry.target.classList.add('animate-bounce-bad');
                    }
                    bounceObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        tblGoods.forEach(el => bounceObserver.observe(el));
        tblBads.forEach(el => bounceObserver.observe(el));
    }

    // ==========================================
    // [C3] FAQ Accordion Logic
    // ==========================================
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        if (trigger) {
            trigger.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
                });
                
                // If it wasn't active, open it
                if (!isActive) {
                    item.classList.add('active');
                    trigger.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });

    // ==========================================
    // Portfolio "Discuss Similar Project" Click Handler
    // ==========================================
    document.querySelectorAll('[data-i18n="portfolio.hover.discuss"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const card = btn.closest('.portfolio-card');
            if (!card) return;
            
            const titleEl = card.querySelector('h3');
            const projectTitle = titleEl ? titleEl.textContent.trim() : '';
            
            // Scroll to contacts
            if (typeof smoothScrollTo === 'function') {
                smoothScrollTo('#contacts', 800);
            } else {
                document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Pre-fill message area
            const messageArea = document.getElementById('form-message');
            if (messageArea) {
                const templates = {
                    ru: `Здравствуйте! Хочу обсудить проект, похожий на "${projectTitle}".`,
                    en: `Hello! I would like to discuss a project similar to "${projectTitle}".`,
                    ro: `Bună ziua! Aș dori să discut despre un proiect similar cu "${projectTitle}".`
                };
                messageArea.value = templates[currentLang] || templates.ru;
                messageArea.focus();
                messageArea.dispatchEvent(new Event('input'));
            }
        });
    });

    // Make the entire portfolio card clickable on mobile to discuss the project
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (e.target.closest('[data-i18n="portfolio.hover.discuss"]')) return;
                
                const titleEl = card.querySelector('h3');
                const projectTitle = titleEl ? titleEl.textContent.trim() : '';
                
                if (typeof smoothScrollTo === 'function') {
                    smoothScrollTo('#contacts', 800);
                } else {
                    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                }
                
                const messageArea = document.getElementById('form-message');
                if (messageArea) {
                    const templates = {
                        ru: `Здравствуйте! Хочу обсудить проект, похожий на "${projectTitle}".`,
                        en: `Hello! I would like to discuss a project similar to "${projectTitle}".`,
                        ro: `Bună ziua! Aș dori să discut despre un proiect similar cu "${projectTitle}".`
                    };
                    messageArea.value = templates[currentLang] || templates.ru;
                    messageArea.focus();
                    messageArea.dispatchEvent(new Event('input'));
                }
            }
        });
    });

    // ==========================================
    // Custom Scrollbar for Vibe Coding Terminal
    // ==========================================
    (function initTerminalScrollbar() {
        const body = document.querySelector('.terminal-body');
        const track = document.querySelector('.terminal-scrollbar-track');
        const thumb = document.querySelector('.terminal-scrollbar-thumb');
        
        if (!body || !track || !thumb) return;
        
        function updateScrollbar() {
            const height = body.clientHeight;
            const scrollHeight = body.scrollHeight;
            const scrollTop = body.scrollTop;
            
            if (scrollHeight <= height) {
                track.style.display = 'none';
                return;
            } else {
                track.style.display = 'block';
            }
            
            const thumbHeight = Math.max(15, (height / scrollHeight) * height);
            const maxScrollTop = scrollHeight - height;
            // Subtract thumb height and padding
            const maxThumbTop = height - thumbHeight - 8;
            const thumbTop = (scrollTop / maxScrollTop) * maxThumbTop;
            
            thumb.style.height = `${thumbHeight}px`;
            thumb.style.transform = `translateY(${thumbTop}px)`;
        }
        
        // Listen to scroll events
        body.addEventListener('scroll', updateScrollbar);
        
        // Also listen to MutationObserver to update when new content is added
        const observer = new MutationObserver(updateScrollbar);
        observer.observe(body, { childList: true, subtree: true });
        
        // Window resize handle
        window.addEventListener('resize', updateScrollbar);
        
        // Initial call
        updateScrollbar();
        
        // Dragging logic
        let isDragging = false;
        let startY = 0;
        let startScrollTop = 0;
        
        thumb.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isDragging = true;
            startY = e.clientY;
            startScrollTop = body.scrollTop;
            document.body.style.userSelect = 'none';
            
            // Visual feedback
            thumb.style.background = 'var(--accent-cyan)';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const deltaY = e.clientY - startY;
            const height = body.clientHeight;
            const scrollHeight = body.scrollHeight;
            const thumbHeight = parseFloat(thumb.style.height) || 30;
            const maxScrollTop = scrollHeight - height;
            const maxThumbTop = height - thumbHeight - 8;
            
            if (maxThumbTop > 0) {
                const deltaScroll = (deltaY / maxThumbTop) * maxScrollTop;
                body.scrollTop = startScrollTop + deltaScroll;
            }
        });
        
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                document.body.style.userSelect = '';
                thumb.style.background = '';
            }
        });
    })();

    // ==========================================
    // Custom Scrollbar for Main Viewport
    // ==========================================
    (function initMainScrollbar() {
        if (window.innerWidth < 768) return;
        
        const track = document.querySelector('.main-scrollbar-track');
        const thumb = document.querySelector('.main-scrollbar-thumb');
        if (!track || !thumb) return;
        
        function updateScrollbar() {
            const height = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            
            if (scrollHeight <= height) {
                track.style.display = 'none';
                return;
            } else {
                track.style.display = 'block';
            }
            
            const thumbHeight = Math.max(30, (height / scrollHeight) * height);
            const maxScrollTop = scrollHeight - height;
            const maxThumbTop = height - thumbHeight - 8;
            const thumbTop = (scrollTop / maxScrollTop) * maxThumbTop;
            
            thumb.style.height = `${thumbHeight}px`;
            thumb.style.transform = `translateY(${thumbTop}px)`;
        }
        
        // Listen to scroll events
        window.addEventListener('scroll', updateScrollbar);
        
        // Listen to MutationObserver to update when DOM height changes dynamically
        const observer = new MutationObserver(updateScrollbar);
        observer.observe(document.body, { childList: true, subtree: true });
        
        // Resize events
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                track.style.display = 'none';
            } else {
                updateScrollbar();
            }
        });
        
        // Initial call
        updateScrollbar();
        
        // Dragging logic
        let isDragging = false;
        let startY = 0;
        let startScrollTop = 0;
        
        thumb.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isDragging = true;
            startY = e.clientY;
            startScrollTop = window.scrollY;
            document.body.style.userSelect = 'none';
            thumb.style.background = 'var(--accent-cyan)';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const deltaY = e.clientY - startY;
            const height = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            const thumbHeight = parseFloat(thumb.style.height) || 50;
            const maxScrollTop = scrollHeight - height;
            const maxThumbTop = height - thumbHeight - 8;
            
            if (maxThumbTop > 0) {
                const deltaScroll = (deltaY / maxThumbTop) * maxScrollTop;
                window.scrollTo(0, startScrollTop + deltaScroll);
            }
        });
        
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                document.body.style.userSelect = '';
                thumb.style.background = '';
            }
        });
    })();

});
