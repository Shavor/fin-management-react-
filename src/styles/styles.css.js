import styled from "styled-components";

const css = {
  HeaderContainer: styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 80px;
    background-color: #202634;
    padding: 0 10px;
  `,
  FooterContainer: styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 80px;
    background-color: #e5e5e5;
  `,
  HeaderCss: {
    Logo: styled.div`
      font-size: 30px;
      color: #80f347;
      text-transform: uppercase;
    `,
    MenuContainer: styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: relative;
    `,
  },
  ButtonMenu: styled.button`
    display: block;
    padding: 10px 14px 12px;
    border-radius: 6px;
    background-color: #b0f347;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
      background-color: #6da417;
    }
  `,
};

export default css;
