const GifList = ({ gifs }) => {
    return (
        <section className="grid">
            {
                gifs.map( gif => (
                    <article key={ gif.id } className='gif-card'>
                        <img src={ gif.image } alt={ gif.title } />
                    </article>
                ))
            }
        </section>
    )
}

const NoResults = () =>{
    return (
        <p className='no-results'>
            No se han encontrado resultados para tu búsqueda.
        </p>

    )
}

export function GifsGrid ({ gifs }) {
    const hasGifs = gifs.length > 0;
    return (
        hasGifs
        ? <GifList gifs={ gifs }/>
        : <NoResults/>
    )
        
}

