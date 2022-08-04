
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onHideGrid }) => {

    const { images, isLoading } = useFetchGifs(category);

    //Oculta los grid y remueve la categoria correspondiente del arreglo.
    const hideGrid = () => {
        onHideGrid(category)
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
                            isShown= {hideGrid}
                        />
                    ))
                }
            </div>
            
            <div>
                <button onClick={hideGrid}>Borrar</button>
            </div>


        </>
    )
}
