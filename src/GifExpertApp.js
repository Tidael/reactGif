import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd = ()=>{
        setCategories([...categories, 'No Game No Life'])
    }*/

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>


            <ol>
               
                {
                    categories.map(category=> 
                        <GifGrid 
                        key = {category}
                        category={category}/>
                    )
                }
                
            </ol>
        </>

    )

}
