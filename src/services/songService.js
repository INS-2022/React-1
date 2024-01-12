class songService{
    constructor(httpClient){
        this.httpClient = httpClient;
    }

    async getAll(){
        return await this.httpClient.get('http://localhost:3000/songs');
    }

    async get(id){
        return await this.httpClient.get(`http://localhost:3000/songs/${id}`);
    }

    async create(data){
        return await this.httpClient.post('http://localhost:3000/songs', data);
    }

    async update(id, data){
        return await this.httpClient.put(`http://localhost:3000/songs/${id}`, data);
    }

    async delete(id){
        return await this.httpClient.delete(`http://localhost:3000/songs/${id}`);
    }

    async search(query){
        return await this.httpClient.get(`http://localhost:3000/songs?q=${query}`);
    }

}