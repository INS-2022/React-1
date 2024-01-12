export class PlaylistAPI {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async fetchPlaylist(id) {
        const response = await this.httpClient.get(`http://localhost:8000/playlist/${id}`);
        const data = await response.json();
        return data;
    }
    async addPlaylist(newPlaylist) {
        const response = await this.httpClient.post("http://localhost:8000/playlist", newPlaylist);
        const data = await response.json();
        return data;
    }
    async removePlaylist(id) {
        const response = await this.httpClient.delete(`http://localhost:8000/playlist/${id}`);
        const data = await response.json();
        return data;
    }
    async updatePlaylist(id, newPlaylist) {
        const response = await this.httpClient.put(`http://localhost:8000/playlist/${id}`);
        const data = await response.json();
        return data;
    }
}