import styled from "styled-components";

const css = {
  FormContainer: styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    width: 600px;
    height: auto;
    min-height: 60px;
    border-radius: 8px;
    box-shadow: 0px 0px 3px grey;
    margin: 20px auto;
    padding: 20px;
  `,

  Input: styled.input`
    display: block;
    position: relative;
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    background-color: rgb(229, 229, 229);
    border-radius: 6px;
    margin-bottom: 10px;
    padding-left: 20px;
    &:last-child {
      margin-bottom: 0px;
    }
  `,
  Button: styled.span`
    display: block;
    position: relative;
    width: 220px;
    height: 44px;
    line-height: 42px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    background-color: ${(props) => props.backcolor};
    &:hover {
      background-color: #bab8b8;
      transform: translate(2px, -2px);
    }
  `,
  ButtonMenu: styled.button`
    display: block;
    padding: 10px 14px 12px;
    border-radius: 6px;
    border: none;
    background-color: #b0f347;
    cursor: pointer;
    &:hover {
      background-color: #6da417;
    }
  `,
};

export default css;
