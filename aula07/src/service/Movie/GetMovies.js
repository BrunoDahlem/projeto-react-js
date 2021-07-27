import {api} from '../../config';

const GetMovies = async (movie) => {
    try {
        const response = await api.get(`/?apikey=ba1ecb32&s=${movie}`);
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export default GetMovies;