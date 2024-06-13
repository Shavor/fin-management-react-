import React from "react";
import css from "../../styles/form.css";

const { Input } = css;

const InputComponent = (props) => {
  // const [placeholder, setPlaceholder] = useState(0);
  const { place, action, newValue } = props;

  return (
    <React.Fragment>
      <Input
        value={newValue}
        type="text"
        onChange={(e) => {
          const newValue = e.target.value;
          action(newValue);
        }}
        placeholder={place}
        maxLength={"100"}
      />
    </React.Fragment>
  );
};

export default InputComponent;
