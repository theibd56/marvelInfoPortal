import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const   _apiBase = 'https://gateway.marvel.com:443/v1/public/',
            _apiKey = 'apikey=e251c56562ab3f7896538d11f46d6633',
            _baseOffset = 250,
            _baseLimit = 9;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=${_baseLimit}&offset=${offset}&${_apiKey}`);        
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name ? `${char.name.slice(0, 50)}` : 'Noname',
            description: char.description ? `${char.description.slice(0, 200)}...` : 'There is no description for this character, at the request of the FBI representatives',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension, 
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    return {loading, error, getAllCharacters, getCharacter, clearError}
}

export default useMarvelService;