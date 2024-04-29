
class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=e251c56562ab3f7896538d11f46d6633';


    getResource = async (url) => {
        let result = await fetch(url);

        if(!result.ok) {
            throw new Error(`could not fetch ${url}, status: ${result.status}`)
        }

        return await result.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?orderBy=modified&limit=9&offset=250&${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        
    }
}

export default MarvelService;