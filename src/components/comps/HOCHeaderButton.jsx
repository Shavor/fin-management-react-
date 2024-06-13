import React from "react";
import { useNavigate } from "react-router-dom";

const HOCButton = (ButtonComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const click = () => {
      navigate(props.text);
      props.onClick();
    };

    return <ButtonComponent {...props} onClick={click} />;
  };
};

export default HOCButton;
