import React from 'React'
function product({name,id,price,available,vendoor,category}) {
    return (
      
      <div className="product">
          <div className="product_info">
              <p>{name}</p>
              <p  className="product_price">
                  <small>$</small>
                  <strong>{price}</strong></p>
              </div>
          <img src={image} alt=""/>
          <button>Add cart</button>
  
        </div>
    )
}
export default product;