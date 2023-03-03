import { useState, useRef, useCallback } from "react"
import { searchGifs } from "../services/fetchGifs";

export const useGifs = ({ search }) => {

    const [ gifs, setGifs ] = useState([]);
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState( null );

    const ref = useRef( search );
   
    const getGifs = useCallback( async ({ search }) => {
        if( search === ref.current ) return;
        try {
            setLoading( true )
            setError( null )
            const searchedGifs = await searchGifs({ search });
            setGifs( searchedGifs )
        }
        catch ( e ) {
            setError( e.message )
        }
        finally {
            setLoading( false )
        }
    }, [])

    const getGifsError = () => {
        if ( error != null ) {
            console.log( error );
        }
    }

    return {
        gifs, getGifs, loading, getGifsError
    }
}