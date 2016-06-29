import axios from 'axios';

const API_KEY = 'ce5fcbd1bafeaf95bbc2da7075006479';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FEATHER_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},uk`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };    
}