import { api } from "../../config"

const GetDetailMovie = async (idMovie) => {
    try {
        const response = await api.get(`/?apikey=ba1ecb32&i=${idMovie}`);
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export default GetDetailMovie;