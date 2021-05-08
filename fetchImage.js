import axios from 'axios'

const URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'gVm-qsXK0Vb7d6mbgHtOSaYbISI4uqmvUo91MYoF6Zo';

const fetchImage = async (query_) => {
    const { data } = await axios.get(URL,{
        params : {
            query:query_,
            page:1,
            client_id: API_KEY,
            orientation:'landscape'
        }
    });
    return data;
}

export default fetchImage;
