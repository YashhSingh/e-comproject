import classes from "./ListItem.module.css";
import image from "../../../assets/images/almas-salakhov-3N8DuEVJ00I-unsplash.jpg";
const ListItem = () => {
  return (
    <>
      <li>
        <button className={classes.close}>
          <p>X</p>
        </button>
        <div className={classes.imgDiv}>
          <img src={image} />
        </div>
        <div className={classes.product_details}>
          <h3>This is Coldrink</h3>
          <p>Happy drinking</p>
        </div>
        <div className={classes.actions}>
          <p>$12.5</p>
          <button>+</button>
          <button>-</button>
        </div>
      </li>
    </>
  );
};

export default ListItem;
