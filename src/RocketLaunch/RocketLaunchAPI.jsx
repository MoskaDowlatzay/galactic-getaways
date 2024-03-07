import axios from 'axios';

export const getRockets = async() => {
    try {
        const response = await axios.get("https://fdo.rocketlaunch.live/json/launches/next/5");
        return response;
    } catch(error) {
        throw Error(error.message);
    }
}