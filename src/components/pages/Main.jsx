import React from "react";
import { useRef } from "react";
import {
  changeViewType,
  changeValue,
  changeComment,
} from "../../redux-state/reducers/view-type-for-main";
import Footer from "../views/global/Footer";
import css from "../../styles/form.css";
import InputComponent from "../comps/InputComponent";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { useDispatch, useSelector } from "react-redux";

const { FormContainer, Input, Button, ButtonMenu } = css;

const Main = (props) => {
  const { action } = props;
  const valueInput = useRef();

  const dispatch = useDispatch();
  const viewType = useSelector((state) => state.viewTypeMain.viewType);
  const viewValue = useSelector((state) => state.viewTypeMain.value);
  const viewComment = useSelector((state) => state.viewTypeMain.comment);

  const validation = () => {
    if (viewValue.length > 0) {
      console.log("Валидация пройдена");

      const dataLine = `${viewValue}::${viewType}::${viewComment}`;
      action(dataLine);

      dispatch(changeValue(""));
      dispatch(changeViewType("Доход"));
      dispatch(changeComment(""));
    } else {
      console.log("Валидация не пройдена");
    }
  };

  const handleChange = (event) => {
    dispatch(changeViewType(event.target.value));
  };

  const handleChangeValue = (param) => {
    dispatch(changeValue(param));
  };

  const handleChangeComment = (param) => {
    dispatch(changeComment(param));
  };

  const handleChangeCommentRadio = (event) => {
    dispatch(changeComment(event.target.value));
  };

  const setFocus = () => {
    valueInput.current.disabled = false;
    valueInput.current.focus();
  };

  return (
    <React.Fragment>
      <FormContainer>
        <ButtonMenu onClick={setFocus} style={{ marginBottom: "12px" }}>
          Начать заполнение
        </ButtonMenu>
        <Input
          ref={valueInput}
          value={viewValue}
          type={"text"}
          placeholder={"Введите сумму транзакции"}
          maxLength={"100"}
          disabled
          onChange={(event) => {
            const newValue = event.target.value;
            handleChangeValue(newValue);
          }}
        />

        {false && (
          <InputComponent
            ref={valueInput}
            inputValue={viewValue}
            action={handleChangeValue}
            placeholder={"Введите сумму транзакции"}
          />
        )}

        {/* <InputComponent
          newValue={viewValue.replace(/\D/g, "")}
          action={handleChangeValue}
          place={"Введите сумму транзакции"}
        /> */}
        <FormControl>
          <FormLabel>Выбери тип транзакции</FormLabel>
          <RadioGroup
            defaultValue="female"
            name="controlled-radio-buttons-group"
            value={viewType}
            onChange={handleChange}
            sx={{ my: 1 }}
          >
            <Radio value="Доход" label="Доход" />
            <Radio value="Расход" label="Расход" />
          </RadioGroup>
        </FormControl>
        {viewType === "Доход" && (
          <InputComponent
            newValue={viewComment}
            action={handleChangeComment}
            place={"Введите комментарий"}
          />
        )}
        {viewType === "Расход" && (
          <FormControl>
            <FormLabel>Выбери тип расходов</FormLabel>
            <RadioGroup
              defaultValue="female"
              name="controlled-radio-buttons-group"
              value={viewComment}
              onChange={handleChangeCommentRadio}
              sx={{ my: 1 }}
            >
              <Radio value="покупка продуктов" label="Покупка продуктов" />
              <Radio value="оплата счетов" label="Оплата счетов" />
              <Radio value="покупка одежды" label="Покупка одежды" />
              <Radio value="расход на транспорт" label="Расход на транспорт" />
              <Radio value="развлечения" label="Развлечения" />
              <Radio value="путешествия" label="Путешествия" />
            </RadioGroup>
          </FormControl>
        )}
        <Button
          onClick={validation}
          backcolor={
            viewValue.length < 3
              ? "rgb(229, 229, 229)"
              : viewType.length < 3
              ? "rgb(229, 229, 229)"
              : "#b0f347"
          }
        >
          Сохранить транзакцию
        </Button>
      </FormContainer>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Main;
