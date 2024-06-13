import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "../../../styles/styles.css";

import HOCButton from "../../comps/HOCHeaderButton";
import Button from "../../comps/Button";

const HOCButtonComponent = HOCButton(Button, { text: "Тестовая кнопка" });

const { HeaderContainer, HeaderCss } = css;

const Header = () => {
  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderCss.Logo>finmanager</HeaderCss.Logo>
        <HeaderCss.MenuContainer>
          <HOCButtonComponent
            text={"/main"}
            onClick={() => console.log("Преход на /main")}
          >
            Главная
          </HOCButtonComponent>
          <HOCButtonComponent
            text={"/stat/доход"}
            onClick={() => console.log("Преход на /stat/доход")}
          >
            Статистика
          </HOCButtonComponent>
          <HOCButtonComponent
            text={"/plan"}
            onClick={() => console.log("Преход на /plan")}
          >
            Планирование
          </HOCButtonComponent>
        </HeaderCss.MenuContainer>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;
