export default class HttpClient{
    async get(url){
        const response = await fetch(url);
        const body = await response.json();
        return body;
    }
    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            }
        });
        const body = await response.json();
        return body;
    }
    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            }
        });
        const body = await response.json();
        return body;
    }
    async delete(url){
        const response = await fetch(url, {
            method: 'DELETE',
        });
        const body = await response.json();
        return body;
    }
}