
import { useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onHideGrid }) => {

    const { images, isLoading } = useFetchGifs(category);
    const [showGrid, setShowGrid] = useState(true)

    //Oculta los grid y remueve la categoria correspondiente del arreglo.
    const hideGrid = () => {
        setShowGrid(!showGrid)
        onHideGrid(category)
    }

    return (
        <>  
            { showGrid && <h3>{category}</h3>}

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
                            isShown= {showGrid}
                        />
                    ))
                }
            </div>
            
            { showGrid && 
                <div>
                    <button onClick={hideGrid}>Borrar</button>
                </div>
            }

        </>
    )
}
