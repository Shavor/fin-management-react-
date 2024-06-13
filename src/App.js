import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setData as setDataFromRedux } from "./redux-state/reducers/data";
import Main from "./components/pages/Main";
import Stat from "./components/pages/Stat";
import Header from "./components/views/global/Header";
import Plan from "./components/pages/Plan";

function App() {
  const data = useSelector((state) => state.dataReducer.data);
  const dispatch = useDispatch();
  const setData = (param) => dispatch(setDataFromRedux(param));
  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route path={"/main"} element={<Main action={setData} />} />
        <Route path={"/stat/:viewType"} element={<Stat statData={data} />} />
        <Route
          path={"/plan"}
          element={<Plan statData={data} testProp={"This is props"} />}
        />
        <Route path={"/*"} element={<Main action={setData} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
