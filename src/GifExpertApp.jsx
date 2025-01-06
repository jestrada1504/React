import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GitExpertApp = () =>{

    const [ categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        //console.log(newCategory)

        if(categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ])

        //setcategories( cat => [ ...cat, 'Valor x'])
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            <AddCategory onNewCategory={ (value) => onAddCategory(value) }
            //setCategories={ setCategories }
            />
            {/* Listado de Gif */}
{/* 
            <button onClick={onAddCategory} >Agregar</button> */}

            { categories.map( (category) => (
                <GifGrid key={ category }
                category={ category } />
            ))
            }

            {/* Git Item */}
        </>
    )
}