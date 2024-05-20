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

    const getAllComics = async (offset = 0) => {
		const res = await request(
			`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`
		);
		return res.data.results.map(_transformComics);
	}

	const getComics = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
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

	const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} pages`
				: "No information about the number of pages",
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			// optional chaining operator
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
		}
	}

    return {loading, error, clearError, getAllCharacters, getCharacter, getAllComics, getComics}
}

export default useMarvelService;