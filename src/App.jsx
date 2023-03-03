import { useCallback } from 'react';
import { useSearch, useGifs } from './hooks';
import { GifsGrid, Loader } from './components';
import debounce from 'just-debounce-it';

import './App.css'




function App () {

	const { search, updateSearch, error } = useSearch();	
	const { gifs, getGifs, loading } = useGifs({ search })

	const debouncedGifs = useCallback(
		debounce( search => {
			getGifs({ search })
		}, 400)
		, [ getGifs ]
	)

	const handleChange = ( e ) => {
		const newSearch = e.target.value;
		updateSearch( newSearch )
		debouncedGifs( newSearch )
	}

	const handleSubmit = ( e ) => {
		e.preventDefault();
		getGifs({ search })
	}

	return (
		<div className="app">
			<header>
				<h1>Gif Searcher</h1>
				<form className='form' onSubmit={ handleSubmit }>
					<input type="text" placeholder='Cats, memes, anime...' onChange={ handleChange } value={search}/>
					<button type='submit'> Buscar </button>
				</form>
				{ error && <p style={{ color:'tomato', textAlign: 'center', marginTop: '2rem' }}>{ error }</p> }
			</header>
		
			<main>
				{
					loading 
					? <Loader/>
					: <GifsGrid gifs={ gifs }/>
				}
			</main>
		</div>
		
	)
}

export default App
