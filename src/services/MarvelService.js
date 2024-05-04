
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

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?orderBy=modified&limit=12&offset=250&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 200)}...` : 'There is no description for this character, at the request of the FBI representatives',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension, 
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}

export default MarvelService;