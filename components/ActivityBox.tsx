import { useEffect, useState } from "react";
import currencies from "../constants/currencies";
import SavingsCard from "./SavingsCard";
import Fire from "./icons/Fire";
import axios from "axios";
import { useAccount, useContractRead } from "wagmi";
import removeEmail from "../helpers/removeEmail";
import connect from "../constants/connect";
import { ethers } from "ethers";
import SavingsGraph from "./SavingsGraph";

const ActivityBox = () => {
  const { address } = useAccount();
  const [user, setUser] = useState("");

  const getUser = () => {
    axios
      .get(`/api/get-user?address=${address}`)
      .then(({ data }) => setUser(removeEmail(data?.email)))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getUser();
  }, []);

  const { data: tokenBalance } = useContractRead({
    //@ts-ignore
    address: connect?.token.address,
    abi: connect?.token?.abi,
    functionName: "balanceOf",
    args: [address],
    watch: true,
  });

  return (
    <main className="lg:w-[70%] h-full p-4">
      <div className="flex justify-between mb-6">
        <h3>Welcome {user},</h3>
        <div className="flex">
          <Fire />{" "}
          {
            //@ts-ignore
            ethers.formatEther(tokenBalance || "0")
          }
        </div>
      </div>

      <div className="flex justify-between mt-5">
        {currencies.map((currency, index) => (
          <SavingsCard key={index} currency={currency} />
        ))}
      </div>

      <SavingsGraph />
    </main>
  );
};
export default ActivityBox;
