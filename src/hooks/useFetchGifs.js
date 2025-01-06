import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
const [imagenes, setimagenes] = useState([]);
const [isLoading, setIsLoading] = useState( true );

  const getImagenes = async() => {
    const newImagenes = await getGifs( category );
    setimagenes(newImagenes);
    setIsLoading(false);
  }

  useEffect( () => {
    getImagenes();
  }, []);

  return {
    imagenes,
    isLoading
  }

}
