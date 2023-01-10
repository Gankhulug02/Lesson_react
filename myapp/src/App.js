import "./App.css";
import "../src/style.scss";
import Home from "./Components/Home/index";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Btns from "./Components/index";
import { useState } from "react";

// const items = [
//   {
//     title: "Add",
//     variant: "danger",
//   },
//   {
//     title: "Minus",
//     variant: "primary",
//   },
// ];

function App() {
  //   const [count, setCount] = useState(0);

  //   const handleClick = (title) => {
  //     if (title === "Add") {
  //       setCount(count + 1);
  //       console.log("asd");
  //     } else {
  //       setCount(count - 1);
  //       console.log("asd");
  //     }
  //   };

  return <Home />;
  //   return (
  //     <div>
  //       <h1>Count: {count}</h1>

  //       {items.map((item) => (
  //         <Btns
  //           title={item.title}
  //           variant={item.variant}
  //           handleClick={handleClick}
  //         />
  //       ))}
  //     </div>
  //   );
}

export default App;
