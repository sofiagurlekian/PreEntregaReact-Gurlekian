import React from 'react'
import "./ItemListContainer.css"

import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  return (
    <div className="ItemListContainer">
     <ul className="ItemListUL">
        {/* <Link to="/category/all"><li>Show all</li></Link> */}
        <Link to="/category/bottom"><li>Bottom</li></Link>
        <Link to="/category/top"><li>Top</li></Link>
        <Link to="/category/feet"><li>Sneakers and sandals</li></Link>
      </ul>
    </div>
  )
}


export default ItemListContainer
