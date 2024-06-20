import axios from "axios";
import Cookies from "js-cookie";

const postMethodWithoutToken = async (url, body) => {
    try {
        const response = axios.post(
            url,
            body,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        return response;
    } catch (error) {
        console.log("Error in postMethodWithoutToken : ", error);
        return null;
    }
}

const postMethodWithToken = async (url, body) => {
    const loginResponse = JSON.parse(Cookies.get('loginResponse'));
    const accessToken = loginResponse.data.token;
    try {
        const response = axios.post(
            url,
            body,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`

                }
            }
        );
        return response;
    } catch (error) {
        console.log("Error in postMethodWithToken : ", error);
        return null;
    }
}

const getMethodWithToken = async (url) => {
    try {
        const loginResponse = JSON.parse(Cookies.get('loginResponse'));
        const accessToken = loginResponse.data.token;
        const response = axios.get(
            url,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }
            }
        );
        return response;
    } catch (error) {
        console.log("Error in getMethodWithToken : ", error);
        return null;
    }
}

const putMethodWithToken = async (url, body) => {
    const loginResponse = JSON.parse(Cookies.get('loginResponse'));
    const accessToken = loginResponse.data.token;
    try {
        const response = axios.put(
            url,
            body,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }
            }
        );
        return response;
    } catch (error) {
        console.log("Error in putMethodWithToken : ", error);
        return null;
    }
}

export { postMethodWithToken, postMethodWithoutToken, getMethodWithToken, putMethodWithToken };