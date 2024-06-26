import { apiUrl } from "../../configs/api_url";

// fetch data
export async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}