import axios from 'axios'

const URL = 'http://api.weatherapi.com/v1/current.json?key=0e298b4078944156be5120924222201';
// const API_KEY = ' 0e298b4078944156be5120924222201';

export const fetchWeather = async (query)=>{
    const data = await axios.get(URL, {
        params:{
            q:query,
            units:'metric'
        }
    });
    return data
}