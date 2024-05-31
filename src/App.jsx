import { Chart } from "react-google-charts";
import useGetData from "./useGetData";

const App = () => {
  const data = useGetData();
  const temp = data.map((item) => [item.date, item.value]);

  const values = [["Year", "BTC"]];

  for (let i = 0; i < temp.length; i++) {
    values.push(temp[i]);
  }

  return (
    <div>
      <Chart
        chartType="LineChart"
        rows={temp}
        options={{
          hAxis: { title: "date" },
          vAxis: { title: "price" },
        }}
        data={values}
        width="800px"
        height="100%"
      />
    </div>
  );
};

export default App;
