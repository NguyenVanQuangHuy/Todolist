export default function callAPI() {

    return new Promise((resolve, reject) => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url, {
            method: "GET"
        }).then((response) => response.json())
        .then((res) => {
            resolve(res);
        }).catch((error) => {
            reject(error);
        })
    })
}