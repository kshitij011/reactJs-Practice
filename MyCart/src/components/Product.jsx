import React from 'react'

export default function Product(props) {
  // console.log(props);
  return (
    <div className='row'>
        <div className="columns">
            <h2>{props.productProp.name}<span>₹{props.productProp.price}</span></h2>
        </div>

        <div className="btn-grp">
          <button type='button' className='minus'
          onClick={    //functions cannot be called here. It can only be passed, hence we pass function in another funtion*/}
            ()=> {props.decrementQuantity(props.index);
              console.log(props.productProp.quantity);
            }
          }
          >-</button>
          <button type='button' className='middle'>{props.productProp.quantity}</button>
          <button type='button' className='plus'
          onClick={    //functions cannot be called here. It can only be passed, hence we pass function in another funtion*/}
            ()=> {props.incrementQuantity(props.index);
              console.log(props.productProp.quantity);
            }
          }
          >+</button>
        </div>

        <div className="total">{props.productProp.quantity*props.productProp.price}</div>
    </div>
  )
}
