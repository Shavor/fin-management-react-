import React from "react";
import css from "../../../styles/dataList.css";
import { useNavigate } from "react-router-dom";

const { DataContainer, ContentLine, ContentCell, ButtonsLine, ButtonItem } =
  css;

const DataList = (props) => {
  const { data = [], setChart, viewType } = props;
  const navigate = useNavigate();

  const filterData = data.filter((item) => item.split("::")[1] === viewType);
  const reduceFilterData = () => {
    navigate("/stat/Доход");
    setChart(false);
  };
  const reduceFilterData1 = () => {
    navigate("/stat/Расход");
    setChart(true);
  };
  const reduceFilterData2 = () => navigate("/stat/Общее");

  const filterDataSum = data
    .filter((item) => item.split("::")[1] === viewType)
    .reduce((sum, item) => {
      return (sum = sum + +item.split("::")[0]);
    }, 0);

  const filterDataDel = data.reduce((sum, item) => {
    if (item.split("::")[1] === "Доход") {
      return sum + +item.split("::")[0];
    } else {
      return sum - +item.split("::")[0];
    }
  }, 0);

  return (
    <React.Fragment>
      <ButtonsLine>
        <ButtonItem
          style={{ fontWeight: viewType === "Доход" ? "bold" : "" }}
          onClick={reduceFilterData}
        >
          Доходы
        </ButtonItem>
        <ButtonItem
          style={{ fontWeight: viewType === "Расход" ? "bold" : "" }}
          onClick={reduceFilterData1}
        >
          Расходы
        </ButtonItem>
        <ButtonItem
          style={{ fontWeight: viewType === "Общее" ? "bold" : "" }}
          onClick={reduceFilterData2}
        >
          Общее
        </ButtonItem>
      </ButtonsLine>

      <DataContainer>
        {filterData.length > 0 ? (
          <React.Fragment>
            {filterData.map((item, i) => {
              return (
                <ContentLine key={i}>
                  <ContentCell width={"25%"}>
                    {" "}
                    {item.split("::")[0]}
                  </ContentCell>
                  <ContentCell width={"25%"}>
                    {" "}
                    {item.split("::")[1]}
                  </ContentCell>
                  <ContentCell width={"50%"}>{item.split("::")[2]}</ContentCell>
                </ContentLine>
              );
            })}
            <ContentLine bordertop={"1px solid black"}>
              <ContentCell width={"25%"}>{filterDataSum}</ContentCell>
              <ContentCell width={"25%"}>----</ContentCell>
              <ContentCell width={"50%"}>----</ContentCell>
            </ContentLine>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {data.map((item, i) => {
              return (
                <ContentLine key={i}>
                  <ContentCell width={"25%"}>
                    {" "}
                    {item.split("::")[0]}
                  </ContentCell>
                  <ContentCell width={"25%"}>
                    {" "}
                    {item.split("::")[1]}
                  </ContentCell>
                  <ContentCell width={"50%"}>{item.split("::")[2]}</ContentCell>
                </ContentLine>
              );
            })}
            <ContentLine bordertop={"1px solid black"}>
              <ContentCell width={"25%"}>{filterDataDel}</ContentCell>
              <ContentCell width={"25%"}>----</ContentCell>
              <ContentCell width={"50%"}>----</ContentCell>
            </ContentLine>
          </React.Fragment>
        )}
      </DataContainer>
    </React.Fragment>
  );
};

export default DataList;
