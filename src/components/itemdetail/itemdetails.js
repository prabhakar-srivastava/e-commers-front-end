import React, { useState, useEffect } from 'react'
import './itemdetails.css'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
const Itemdetails = () => {


  const [itemDetail, setitemDetail] = useState([])
  const id = useParams()

  const getItemDetail = async (e) => {

    await Axios.get(`https://fakestoreapi.com/products/${id.id}`).then((res) => {
      setitemDetail(res.data)
      // console.log(res.data.rating.rate)
    })
  }

  useEffect(() => {
    getItemDetail()
  }, [])



  return (
    <div className='container_itemDetail'>

    

      <div className='itemDelt'>
        <div>
          <img src={itemDetail.image} alt='not found' />
        </div>
        <div className='delta'>
          <h2>{itemDetail.title}</h2>
          <h3>Category : {itemDetail.category}</h3>
          {/* <h3>Rating : {JSON.stringify(itemDetail.rating.rate)}</h3> */}
          <h3>Price : {itemDetail.price}</h3>
          <button>Add To Cart</button>
        </div>
      </div>
      <div className='describe'>
        <h2>Descrption</h2><br />
        <h3>{itemDetail.description}</h3>

      </div>


    </div>
  )
}

export default Itemdetails