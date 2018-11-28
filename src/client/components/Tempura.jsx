import React, {Component} from 'React';
import { connect } from 'react-redux';
import * as actions from '../actions/orderActions';
import Item from './Item.jsx';
const mapStateToProps = store => {
  return {
    productList: store.product.products
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: (category) => {
      dispatch(actions.getProducts(category));
    }
  }
}
class Tempura extends Component {
  componentDidMount() {
    this.props.fetchProducts('Tempura');
  }
  render() {
    const tempuraProducts = this.props.productList.map(element => {
      return ( <Item name = {element.name} 
        price = {element.price} 
        category = {element.category} 
        description = {element.description}
        key = {element.product_id}
        subCategory = {element.sub_category}
        index = {element.index}
        quantity = {element.quantity}
        passObj = {element}
        ></Item>)
    })
    return (
      <div>
        <h1>Tempura</h1>
        {tempuraProducts}
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tempura);