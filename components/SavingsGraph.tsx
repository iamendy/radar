import { useAccount, useContractRead } from "wagmi";
import connect from "../constants/connect";
import splitData from "../helpers/splitData";
import {
  Chart as ChartJs,
  LineElement,
  LineController,
  LinearScale,
  Tooltip,
  Legend,
  CategoryScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJs.register(
  LineElement,
  LineController,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip,
  Legend
);

const SavingsGraph = () => {
  const { address } = useAccount();

  const { data: history } = useContractRead({
    //@ts-ignore
    address: connect?.address,
    abi: connect?.abi,
    functionName: "getHistory",
    args: [address, "EUR"],
    watch: true,
  });

  const [amount, duration] = splitData(history);

  const chartData = {
    labels: duration.map((d) => d),
    datasets: [
      {
        label: "Amount",
        data: amount.map((d) => d),
        fill: false,
        borderColor: "rgb(0, 0, 0)",
        tension: 0.1,
        backgroundColor: "#FFD55A",

        width: 5,
        borderWidth: 1,
        borderRadius: 15,
      },
    ],
  };

  return (
    <div className="mt-9">
      <h3 className="font-semibold mb-1">Savings Trend</h3>

      {
        //@ts-ignore
        history?.length > 0 ? (
          <Line data={chartData}>Graph here</Line>
        ) : (
          <div className="text-left">No record found</div>
        )
      }
    </div>
  );
};
export default SavingsGraph;
