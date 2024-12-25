import axios from 'axios';

export const fetchWeatherData = async (latitude, longitude, startDate, endDate) => {
    const baseURL = 'https://archive-api.open-meteo.com/v1/archive';
    try {
        const response = await axios.get(baseURL, {
            params: {
                latitude,
                longitude,
                start_date: startDate,
                end_date: endDate,
                daily: 'temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean',
            },
        });
        return response.data.daily;
    } catch (error) {
        throw new Error('Error fetching weather data.');
    }
};
