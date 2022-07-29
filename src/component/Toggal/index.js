import "./style.css";
const Toggal = (props) => {
  return (
    <div className="toggle">
      <span>
        {props.children === "Register" && "Don't have an account ?  "}{" "}
      </span>
      <button className="text-three" onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Toggal;
