# 🌤️ Weather App

Простое веб-приложение для получения информации о погоде в любом городе мира. Приложение использует Flask на бэкенде и OpenWeatherMap API для получения актуальных данных о погоде.

## ✨ Особенности

- 🔍 Поиск погоды по названию города
- 🌡️ Отображение температуры, ощущаемой температуры, влажности и скорости ветра
- ☁️ Описание погодных условий и соответствующая иконка
- 🎨 Современный адаптивный дизайн с плавными анимациями
- ⚡ Асинхронные запросы без перезагрузки страницы

## 🛠️ Технологии

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript (Fetch API)
- **API**: OpenWeatherMap API
- **Стили**: Адаптивный CSS с Flexbox и Grid

## 📋 Требования

- Python 3.7+
- Flask
- Requests
- Аккаунт на [OpenWeatherMap](https://openweathermap.org/api) для получения API ключа

## 🚀 Установка и запуск

### 1. Клонирование репозитория

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

### 2. Создание виртуального окружения (рекомендуется)

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

### 3. Установка зависимостей

```bash
pip install flask requests
```

### 4. Получение API ключа

1. Зарегистрируйтесь на [OpenWeatherMap](https://openweathermap.org/api)
2. Подтвердите email
3. Получите API ключ в личном кабинете

### 5. Настройка приложения

В файле `app.py` замените API ключ:

```python
API_TOKEN = 'ваш_api_ключ'
```

### 6. Запуск приложения

```bash
python app.py
```

Приложение будет доступно по адресу: `http://127.0.0.1:5000`

## 📁 Структура проекта

```
weather-app/
├── app.py                 # Flask сервер
├── templates/
│   └── index.html        # Главная страница
├── static/
│   ├── style.css         # Стили приложения
│   └── script.js         # Клиентская логика
└── README.md             # Документация
```

## 🎯 Как это работает

1. Пользователь вводит название города в форму
2. JavaScript отправляет асинхронный POST-запрос на сервер
3. Flask сервер обращается к OpenWeatherMap API
4. Полученные данные о погоде возвращаются в формате JSON
5. JavaScript динамически отображает информацию на странице


⭐️ Если вам понравился проект, поставьте звезду на GitHub!
