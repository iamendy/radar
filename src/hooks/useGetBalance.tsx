import { useAccount, useContractRead, useNetwork } from "wagmi";

import connect from "../constants/connect";

const useGetBalance = (currency: string) => {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { data: balance } = useContractRead({
    //@ts-ignore
    address: connect?.[chain?.id]?.[currency]?.address,
    //@ts-ignore
    abi: connect?.[chain?.id]?.[currency]?.abi,
    functionName: "balanceOf",
    args: [address],
    watch: true,
  });

  return balance;
};

export default useGetBalance;
