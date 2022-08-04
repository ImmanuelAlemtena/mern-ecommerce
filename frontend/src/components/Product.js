import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';

function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxdispatch } = useContext(Store);
  const {
    cart: { cartItem },
  } = state;
  const existItem = cartItem.find((x) => x._id === product._id);
  const quantity = existItem ? existItem.quantity + 1 : 1;

  const addToCartHandler = async (item) => {
    const { data } = await axios.get(`api/products/${item._id}`);
    if (data.countInStock < quantity) {
      toast.error('sorry.product out of stock');
      return;
    }
    ctxdispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReview={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
        {/* {product.countInStock < quantity ? (
          <Button variant="light" disabled>
            Out of Stock
          </Button>
        ) : (
          
        )} */}
      </Card.Body>
    </Card>
  );
}

export default Product;
