import React, { Component } from 'React';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (obj) => { dispatch(actions.addToCart(obj)) },
    lowerQuantity: (index) => { dispatch(actions.removeQuantity(index)) },
    addQuantity: (index) => { dispatch(actions.addQuantity(index)) },
    addToCartAndResetQuantity: (obj) => { dispatch(actions.addToCartAndResetQuantity(obj)) },
  }
}
const Item = (props) => {
  const divStyle = {
    'border': '1px solid grey',
    'display': 'inline-block',
    'paddingLeft': '5px',
    'width': '75%',
    'marginBottom': '3px'
  }
  const rightPanel = {
    'float': 'right',
    'marginTop': '23px',
    'marginLeft': '5px',
    'marginRight': '5px'
  }
  const objCopy = Object.assign({}, props.passObj)
  return (
    <div style = {divStyle}>
      <h2 style = {{'display': 'inline-block', 'marginRight': '5px'}}>{props.name}</h2><span style = {{'display': 'inline-block'}}>{props.price}</span>
      <button onClick = {() =>props.addToCartAndResetQuantity(props.passObj)} style = {rightPanel}>Add to Cart</button>
    </div>
  )
}
export default connect(null, mapDispatchToProps)(Item);