import { ethers } from "ethers";
import useGetBalance from "../hooks/useGetBalance";
import useGetRecord from "../hooks/useGetRecord";
import { useCountdown } from "../hooks/useCountdown";
import { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import connect from "../constants/connect";
import Loader from "./icons/Loader";
import Currency from "../types";

const SavingsCard = ({ currency }: { currency: Currency }) => {
  const { balance } = useGetBalance(currency);
  const { record } = useGetRecord(currency);
  const [isOpen, setIsOpen] = useState(false);

  const { days, hours, minutes, seconds, isCountdownCompleted } = useCountdown(
    //@ts-ignore
    parseInt(record?.expiresAt)
  );

  const { config, refetch } = usePrepareContractWrite({
    //@ts-ignore
    address: connect?.address,
    abi: connect?.abi,
    functionName: "breakPiggy",
    args: [currency?.symbol],
  });

  const {
    write: breakPiggy,
    data,
    isLoading: isBreaking,
  } = useContractWrite(config);

  const { isLoading: isWaitingTx } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(tx) {
      //disable modal
      setIsOpen(false);
    },
  });

  const handleBreak = async () => {
    await refetch();
    breakPiggy?.();
  };

  return (
    <div className="relative shadow-md bg-light w-[30%] rounded-md p-3">
      {
        //@ts-ignore
        record?.status > 0 && (
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } absolute text-center top-0 right-0 w-full h-full bg-white/10 p-4 backdrop-blur-lg flex-col justify-between`}
          >
            <h3 className="font-semibold">
              {isCountdownCompleted
                ? "Great Job saving! 🌦️"
                : "You can do better! 🎳"}
            </h3>
            <p className="text-sm">
              {isCountdownCompleted
                ? "You will earn 20RTK when you break your piggy!"
                : "You will be charged 5% penalty if you break before duration"}
            </p>

            <div className="flex gap-x-2 items-center justify-between mt-2">
              <button
                onClick={() => handleBreak()}
                className="bg-green-600 text-white px-2 py-1 rounded-sm w-full inline-flex justify-center items-center"
              >
                {isBreaking ? <Loader /> : isWaitingTx ? <Loader /> : "proceed"}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="border-black  text-black px-2 py-1 rounded-sm w-full inline-flex justify-center items-center"
              >
                cancel
              </button>
            </div>
          </div>
        )
      }

      <h3 className="mb-2 font-semibold">{currency?.name}</h3>
      <div className="flex justify-between mb-2">
        <div className="flex flex-col">
          <span className="text-sm">Locked</span>
          <span className="text-xl font-bold">
            {currency?.sign}
            {
              //@ts-ignore
              Math.floor(ethers?.formatEther(record?.balance || "0") * 100) /
                100
            }
          </span>
        </div>

        <div className="flex flex-col text-right">
          <span className="text-sm">Bal</span>
          <span className="text-xl font-bold">
            {currency?.sign}
            {
              //@ts-ignore
              Math.floor(ethers.formatEther(balance || "0") * 100) / 100
            }
          </span>
        </div>
      </div>

      {
        //@ts-ignore
        record?.status > 0 && (
          <>
            <div className="line w-[60%] mx-auto h-[1px]" />

            <div className="flex justify-between items-center mt-2">
              <div className="font-monospace">
                {isCountdownCompleted ? (
                  <p>Completed!</p>
                ) : (
                  <>
                    <p className="text-xs">Locked until</p>
                    <p>
                      {days}:{hours}:{minutes}:{seconds}
                    </p>
                  </>
                )}
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className={`${
                  isCountdownCompleted
                    ? "bg-green-500 hover:bg-green-600 active:bg-green-700"
                    : "bg-red-400 hover:bg-red-500"
                } py-1 px-2  text-white rounded`}
              >
                Break Piggy
              </button>
            </div>
          </>
        )
      }
    </div>
  );
};
export default SavingsCard;
