import { useEffect, useState, useRef } from "react"

export const useSearch = () => {

	const [ search, updateSearch ] = useState('');
	const [ error, setError ] = useState( null );

    const isFirstInput = useRef( true )

	useEffect(() => {
        if( isFirstInput.current ) {
            isFirstInput.current = search === ''
            return
        }
		if( search === '') {
			setError('No se puede realizar una búsqueda vacía.')
			return;
		}
		if( search.length < 3 ) {
			setError('La búsqueda debe tener al menos 3 carácteres.')
			return;
		}
		setError( null )
	}, [ search ]);

	return {
		search, updateSearch, error
	}
}