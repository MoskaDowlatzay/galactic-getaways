import axios from 'axios';

export const getLaunches = async() => {
    try {
        const response = await axios.get("https://api.spacexdata.com/v4/launches/upcoming");
        return response;
    } catch(error) {
        throw Error(error.message);
    }
}