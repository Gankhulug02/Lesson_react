import Button from "react-bootstrap/esm/Button";

const Btn = (props) => {
  return (
    <Button
      variant={props.variant}
      onClick={() => {
        props.handleclick(props.title);
      }}
    >
      {props.title}
    </Button>
  );
};

export default Btn;
