import { getJson } from "./script";

export function getCurrentWeather(location) {
    
    const url = `${base_url}?q=${location}&key=${api_key}`;
    getJson(url);
}
