const API_KEY = '7nLGE3yo5tb2rgFxJfEdyv3nIsNOMF99'

export const searchGifs = async ({ search }) => {
    if ( search === '' ) return null;
	try {

		const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ API_KEY }&q=${ search }&limit=20`)

		const json = await resp.json();

		const gifs = json.data;

		return gifs?.map( gif => ({
			id: gif.id,
			title: gif.title,
			image: gif.images.original.url
		}))
		
	}
	catch( e ) {
		throw new Error('Error searching gifs');
	}
}