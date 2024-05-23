import {
  useCallback,
  useMemo,
  useEffect,
  useState,
} from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import useGetData from "./useGetData";

const App = () => {
  const days = useGetData();

  console.log("refresh");
  return (
    <div>
      <div>RESULT: {days?.toString()}</div>
      <Chart
        chartType="LineChart"
        data={[
          ["Age", "Weight"],
          [4, 5.5],
          [6, 6.8],
          [8, 12],
        ]}
        width="100%"
        height="100%"
        legendToggle
      />
    </div>
  );
};

export default App;
