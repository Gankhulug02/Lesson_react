import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import style from "../Nav/style.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Nav = () => {
  return (
    <div>
      <nav className={style.navTop}>
        <div>
          <p>Need help? Call us: (+98) 0234 456 789</p>
        </div>
        <div className={style.navRight}>
          <p>Our store</p>
          <p>Track your order</p>
        </div>
      </nav>

      <nav className={style.navBottom}>
        <img src="./images/nav-logo.svg" alt="" />
        <div className={style.inputContainer}>
          <input className={style.input}></input>
          <Button variant="warning" className={style.btnSearch}>
            Search
          </Button>
        </div>
        <div className={style.icons}>
          <div>
            <i class="bi bi-person"></i>
            Sign in
          </div>
          <div>
            <i class="bi bi-heart"></i>
            <Button className={style.counter}>0</Button>
          </div>
          <div>
            <i class="bi bi-cart2"></i>
            <Button className={style.counter}>0</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
