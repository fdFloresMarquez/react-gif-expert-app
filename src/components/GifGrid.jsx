import PropTypes from 'prop-types';
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onRemoveGrid }) => {

    const { images, isLoading } = useFetchGifs(category);

    //Oculta los grid y remueve la categoria correspondiente del arreglo.
    const removeGrid = () => {
        onRemoveGrid(category)
    }

    return (
        <>  
            <h3>{category}</h3>

            {
                isLoading
                    ? (<h2>Cargando...</h2>) : null
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
            
            <div>
                <button onClick={removeGrid}>Borrar</button>
            </div>


        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
    onRemoveGrid: PropTypes.func
}
