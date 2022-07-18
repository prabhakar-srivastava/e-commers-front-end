import React, { useEffect, useState } from 'react'
import './item.css'
import  Axios from 'axios'
const Item = () => {

    const [item,setitem] = useState([])

    const getItem = async(e)=>{
    
        await Axios.get('https://fakestoreapi.com/products').then((res)=>{
            setitem(res.data)
           

        })
    }

    useEffect(()=>{
        getItem()

    },[])

  return (
    <div className='container-item'>
        {/* {JSON.stringify(item,undefined,2)} */}
        {
            item.map((val)=>{
                return(
                    <div key={val.id} className='product'>
                        <div className='val-image'>
                            <img src={val.image} alt=' not found'/>
                        </div>
                        <div className='delt'>
                            <h2>{val.title}</h2>
                            <div className='buy'>
                            <h3>Rating : {val.rating.rate}</h3>
                            <h3>Price : {val.price}</h3>
                            <button>Buy</button>

                            </div>
                        
                        </div>
                        
                    </div>

                )
            })
        } 
       

    </div>
  )
}

export default Item