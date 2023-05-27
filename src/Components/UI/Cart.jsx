import { createPortal } from "react-dom";
import { ReactDOM } from "react-dom";
import classes from "./Cart.module.css";
import Card from "./Card";
import cartlogo from "../../assets/icons8-cart-100.png";
import ListItem from "./Elements/ListItem";
import Backdrop from "./Elements/Backdrop";

const Backdroper = () => {
  return <Backdrop />;
};

const Card_w_items = () => {
  return (
    <Card>
      <div className={classes.title}>
        <img src={cartlogo} />
        <h2>Cart</h2>
      </div>

      <div className={classes.cartListDiv}>
        <ul>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>
      <div className={classes.totalSection}>
        <div className={classes.upper}>
          <h2>SUBTOTAL</h2>
          <h3>$121</h3>
        </div>
        <div className={classes.checkoutActions}>
          <button>Checkout</button>
          <button>Cancel</button>
        </div>
      </div>
    </Card>
  );
};

const portalPlace = document.getElementById("backdrop");
const Cart = () => {
  return (
    <>
      <Backdrop />
      <Card>
        <div className={classes.title}>
          <img src={cartlogo} />
          <h2>Cart</h2>
        </div>

        <div className={classes.cartListDiv}>
          <ul>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </ul>
        </div>
        <div className={classes.totalSection}>
          <div className={classes.upper}>
            <h2>SUBTOTAL</h2>
            <h3>$121</h3>
          </div>
          <div className={classes.checkoutActions}>
            <button>Checkout</button>
            <button>Cancel</button>
          </div>
        </div>
      </Card>
      {/* {createPortal(<Backdroper />, portalPlace)}
      {createPortal(<Card_w_items />, portalPlace)} */}
    </>
  );
};

export default Cart;
