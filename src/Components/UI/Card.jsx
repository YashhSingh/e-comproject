import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <>
      <section className={classes.Card}>{props.children}</section>
    </>
  );
};

export default Card;
