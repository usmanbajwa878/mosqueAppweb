import { API_URL } from "../Constants";


export const handleRequest = async (method = 'GET', url, data = {}) => {

    const URL = getURL(url)
    const response = await fetch(URL, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
};

export const handleUploadRequest = async (method = 'GET', url, data = {}) => {

    const URL = getURL(url)
    const response = await fetch(URL, {
        method: method,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: data
    });
    const responseData = await response.json();
    return responseData;
};



export const getURL = (url) => {
    switch (url) {
        case 'signup':
            {
                return `${API_URL}/user/signup`
            }
        case 'login':
            {
                return `${API_URL}/user/login`
            }
        case 'changePassword':
            {
                return `${API_URL}/user/changePassword`
            }
        case 'getRequest':
            {
                return `${API_URL}/request/getrequest`
            }
        case 'createRequest':
            {
                return `${API_URL}/request/newrequest`
            }
        case 'uploadImage':
            {
                return `${API_URL}/fileUpload/upload`
            }
    }
}



