import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Luffy'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    //Remueve de la categorias la que haya sido ocultada.
    const onRemoveGrid = (categoryToRemove) => {
        setCategories(prev => prev.filter(category => category !== categoryToRemove ))
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* Listado de Gif */}
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                        onRemoveGrid={(value) => onRemoveGrid(value)}/>
                ))
            }

        </>
    )
}
