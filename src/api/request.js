const {REACT_APP_API_KEY} = process.env;

function request(url, method = "get", data = null) {

    const config = {
        method,
        headers: {
            "content-type": "application/json",
            "Authorization": `Bearer ${REACT_APP_API_KEY}`
        }

    }
    if (method === "POST" || method === "PATCH") {
        config.body = JSON.stringify(data)
    }

    return fetch(url, config)
        .then(response => response.json())
};

function get(url) {
    return request(url);
}

function post(url, data) {
    return request(url, "POST", data);
}

export default {get, post};