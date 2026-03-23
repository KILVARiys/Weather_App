import requests

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

API_TOKEN = 'YOUR_TOKEN'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather', methods=['POST'])
def get_weather():
    if request.method == 'POST':
        data = request.get_json()
        city = data['city']
        weather_info_from_site = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_TOKEN}&units=metric&lang=ru'
        request_weather = requests.get(weather_info_from_site)

        if request_weather.status_code == 200:
            data = request_weather.json()
            temp = data['main']['temp']
            content = data['weather'][0]['description']
            temp_real = data['main']['feels_like']
            wind = data['wind']['speed']
            humidity = data['main']['humidity']
            icon = data['weather'][0]['icon']

            # Создаем словарь и возвращаем его в браузер споомщью jsonify
            return jsonify({
                'temperature': temp,
                'feels_like': temp_real,
                'description': content,
                'wind_speed': wind,
                'humidity': humidity,
                'icon': icon
            })
        else:
            # Вернуть ошибку с статус кодом 404
            return jsonify({'error': 'Город не найден'}), 404
        
if __name__ == '__main__':
    app.run(debug=True)
