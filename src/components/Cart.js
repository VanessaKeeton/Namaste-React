import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items)
  const dispatch = useDispatch();

  const handleAddItem = (id) => {

    dispatch(removeItem(id));
  }

  const handleClearCard = () => {
    dispatch(clearCart());
  }

 return (
  <div className="text-center">
    <h1 className="font-bold">hello cart</h1>
    <button type="button" className="px-4 py-2 bg-green-400 cursor-pointer" onClick={handleClearCard}>Clear Cart</button>

     <ul>
      {items.map((item) => {
        const { name, price, id, restId } = item;
        return (
          <li key={`${id}_${name}_${restId}`} className="menu-item">
            {`${name} $${price}`} <button type="button" className="px-4 py-2 bg-green-400 cursor-pointer" onClick={() => handleAddItem(item.id)}>Remove</button>
          </li>
        );
      })}
    </ul>
  </div>
 )
}

export default Cart;