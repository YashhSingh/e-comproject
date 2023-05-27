import classes from "./Li.module.css";
import image from "../../../assets/images/almas-salakhov-3N8DuEVJ00I-unsplash.jpg";

const Li = (props) => {
  return (
    <li className={classes.listItem}>
      <div className={classes.imgDiv}>
        <img src={image} />
      </div>
      <h3>Cropped shirt</h3>
      <p>$1.20</p>
      <button>Add To Cart</button>
    </li>
  );
};

export default Li;
