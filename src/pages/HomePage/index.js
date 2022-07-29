import "./style.css";
import { useState } from "react";
import LoginForm from "../../component/LoginForm";
import Registration from "../../component/Registration";
import Toggal from "../../component/Toggal";
const HomePage = () => {
  const [change, setChange] = useState(true);

  function clickHandler() {
    setChange(!change);
  }

  return (
    <div className="containar bg-two">
      {change ? <LoginForm /> : <Registration />}

      <Toggal onClick={clickHandler}>{change ? "Register" : "Login"}</Toggal>
    </div>
  );
};
export default HomePage;
