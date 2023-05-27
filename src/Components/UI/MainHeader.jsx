import classes from "./MainHeader.module.css";
import logo from "../../assets/soda.png";

const MainHeader = () => {
  return (
    <>
      <header className={classes.MainHead}>
        <div className={classes.title}>
          <img src={logo} alt="Soda logo" />
          <h1>Bloom Drinks</h1>
        </div>
        <button className={classes.titleBtn}>
          <h3>Cart</h3>
          <span className={classes.itemqt}>
            <p>100</p>
          </span>
        </button>
      </header>
    </>
  );
};

export default MainHeader;
