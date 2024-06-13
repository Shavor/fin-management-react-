import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DataList from "../views/local/DataList";
import Footer from "../views/global/Footer";
import DataChart from "../views/local/DataChart";

const Stat = (props) => {
  const { statData } = props;
  const [isShowChart, setIsShowChart] = useState(true);
  const { viewType } = useParams();

  return (
    <React.Fragment>
      <DataList viewType={viewType} setChart={setIsShowChart} data={statData} />
      <DataChart viewType={viewType} show={isShowChart} data={statData} />
      <Footer />
    </React.Fragment>
  );
};

export default Stat;
