import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setinputValue ] = useState('');

    const onInputChance = ( { target } ) => {
        setinputValue( target.value );
    }

    const onSubmin = ( event ) => {
        event.preventDefault();
        /* console.log(inputValue);
        setinputValue( ) */
        
        if( inputValue.trim().length <= 1) return
        
        //setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setinputValue('');
    }

    return(
        <form onSubmit={ onSubmin }>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChance }
        />
        </form>
        
    )

}