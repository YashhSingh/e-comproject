import classes from "./BodyDiv.module.css";
import image from "../../assets/images/almas-salakhov-3N8DuEVJ00I-unsplash.jpg";
import { Outlet } from "react-router";
import Li from "./Elements/Li";
const BodyDiv = () => {
  return (
    <>
      <Outlet />
      <section className={classes.MainDiv}>
        <section className={classes.filter}>
          <span className={classes.title}>Select Size</span>
          <div className={classes.filterDiv}>
            <label>
              <input type="checkbox" />
              <span className={classes.checkmark}>XS</span>
            </label>
            <label>
              <input type="checkbox" />
              <span className={classes.checkmark}>XS</span>
            </label>{" "}
            <label>
              <input type="checkbox" />
              <span className={classes.checkmark}>XS</span>
            </label>{" "}
            <label>
              <input type="checkbox" />
              <span className={classes.checkmark}>XS</span>
            </label>
            <label>
              <input type="checkbox" />
              <span className={classes.checkmark}>XS</span>
            </label>{" "}
            <label>
              <input type="checkbox" />
              <span className={classes.checkmark}>XS</span>
            </label>{" "}
            <label>
              <input type="checkbox" />
              <span className={classes.checkmark}>XS</span>
            </label>
            <label>
              <input type="checkbox" />
              <span className={classes.checkmark}>XS</span>
            </label>{" "}
            <label>
              <input type="checkbox" />
              <span className={classes.checkmark}>XS</span>
            </label>{" "}
            <label>
              <input type="checkbox" />
              <span className={classes.checkmark}>XS</span>
            </label>
          </div>
          <div className={classes.info}>
            <h3>
              This is lorem ipsum wala text pura ka pura padhne ki zarurat nahi
              hai
            </h3>
            <a href="#">
              <p>Star</p>
            </a>
          </div>
        </section>
        <ul className={classes.productGrid}>
          <Li />
          <Li />
          <Li />
          <Li />
          <Li />
          <Li />
          <Li />
        </ul>
      </section>
    </>
  );
};

export default BodyDiv;
