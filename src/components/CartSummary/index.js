import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      console.log('summary', cartList)
      console.log(cartList)
      const priceList = cartList.map(
        eachItem => eachItem.price * eachItem.quantity,
      )
      const sum = priceList.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0,
      )
      console.log(sum)

      return (
        <div className="cart-summary-container">
          <h1 className="summery-heading">
            Order Total: <span className="amount">Rs {sum}/-</span>
          </h1>
          <p className="cart-items">{`${cartList.length} Items in cart`}</p>
          <button className="checkout-btn" type="button" data-testid="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
