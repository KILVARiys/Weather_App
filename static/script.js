document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('weather-form');
    const cityInput = document.getElementById('city');
    const resultDiv = document.getElementById('weather-result');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const city = cityInput.value.trim();  // trim() убирает пробелы
        if (!city) {
            resultDiv.innerHTML = '<p style="color: red;">Введите название города</p>';
            return;
        }

        fetch('/weather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ city: city })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                // Здесь код для ошибки
                resultDiv.innerHTML = `<p style="color: red;">${data.error}</p>`;
            } else {
                // Вместо текущего weatherHtml используйте эту структуру:
            const weatherHtml = `
                <div class="weather-card">
                    <h2>${city}</h2>
                    <div class="weather-icon">
                        <img src="http://openweathermap.org/img/wn/${data.icon}@2x.png" alt="Иконка погоды">
                    </div>
                    <div class="weather-grid">
                        <div class="weather-item">
                            <span>🌡️</span>
                            <span>${data.temperature}°C</span>
                        </div>
                        <div class="weather-item">
                            <span>🤔</span>
                            <span>Ощущается как ${data.feels_like}°C</span>
                        </div>
                        <div class="weather-item">
                            <span>💧</span>
                            <span>${data.humidity}%</span>
                        </div>
                        <div class="weather-item">
                            <span>💨</span>
                            <span>${data.wind_speed} м/с</span>
                        </div>
                    </div>
                    <div class="weather-description">
                        ${data.description}
                    </div>
                </div>
            `;
                resultDiv.innerHTML = weatherHtml;
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            resultDiv.innerHTML = '<p style="color: red;">Произошла ошибка при запросе</p>';
        });
    });
});