import React from 'react'
import Rupee from "../assets/rupee.svg";
import Edit from "../assets/edit.svg";
import Delete from "../assets/delete1.svg";
const Card = ({cardItem , handleId ,handleDelete}) => {
  return (
    <div className="card">
        <span className="card-container">
        <button className="card-delete" onClick={()=>handleDelete(cardItem._id)}><img src={Delete}/></button>
          <button className="card-edit" onClick={()=>handleId(cardItem._id)}><img src={Edit}/></button>
            <h3 className="card-name">{cardItem.name}</h3>
            <div className="image-container">
                <img src={cardItem.image} className="card-image"/>
            </div>
            <h2><img id="rupee" src={Rupee} alt=""/>{cardItem.price}</h2>
            <button className="card-button">Add to Cart</button>
            <button className="card-button">Buy Now</button>
        </span>

    </div>
  )
}

export default Card