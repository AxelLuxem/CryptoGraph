import "./App.css";
import { Chart } from "react-google-charts";
import useGetData from "./useGetData";

const App = () => {
  const data = useGetData();
  const transformedData = data.map((item) => [
    item.date,
    item.value,
  ]);

  const values = [["Year", "BTC"]];

  for (let i = 0; i < transformedData.length; i++) {
    values.push(transformedData[i]);
  }

  return (
    <div className="Pagebackground">
      <h1 className="title">
        Bitcoin price over the last 7 days
      </h1>
      <Chart
        chartType="LineChart"
        rows={transformedData}
        options={{
          hAxis: { title: "date" },
          vAxis: { title: "price" },
        }}
        data={values}
        width="1200px"
        height="500px"
      />
    </div>
  );
};

export default App;
