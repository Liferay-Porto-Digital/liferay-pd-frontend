export const get = async (path) => {
    const connectAPI = await fetch(`https://evp-api.herokuapp.com/api/v1/${path}`)
    const data = await connectAPI.json()
    return data;
};

const post = async (path) => {
    const connectAPI = await fetch(`https://evp-api.herokuapp.com/api/v1/${path}`, {method: 'POST'}, {body: JSON.stringify()})
    const data = await connectAPI.json()
    return data;
};

