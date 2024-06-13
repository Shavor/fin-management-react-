import styled from "styled-components";

const css = {
  DataContainer: styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: flex-start;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 800px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 0px 3px grey;
    margin: 10px auto 40px;
    padding: 20px;
  `,
  ContentLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    margin-bottom: 10px;
    border-top: ${(props) => props.bordertop};
  `,
  ContentCell: styled.span`
    display: block;
    position: relative;
    width: ${(props) => props.width};
    font-weight: ${(props) => props.fontWeigth};
    font-size: 18px;
  `,
  ButtonsLine: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    position: relative;
    width: 800px;
    margin: 0 auto;
    margin-top: 40px;
  `,
  ButtonItem: styled.div`
    font-size: 20px;
    color: grey;
    margin-right: 40px;
    margin: 0 auto;
    cursor: pointer;
    &:hover {
      color: red;
      font-weight: bold;
    }
  `,
};
export default css;
