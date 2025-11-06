import axios from 'axios';

const apiKey = import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY;

console.log('API key: ' + apiKey);

const fetchCars = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${apiKey}`
        },

        params: {
            query: 'cars'
        }
    })   

    console.log('Response: ' + response);

    return response;
}

export default fetchCars;
