import Link from "next/link";
import Menu from "./icons/menu";
import User from "./icons/User";
import { useAccount, useNetwork } from "wagmi";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();

  return (
    <nav>
      <nav className="flex justify-between w-full p-6 2xl:px-24 text-base-100 font-bold border-b border-b-gray ">
        <Link href="/">Rainfy</Link>

        <Menu />
        <div className="hidden lg:flex items-center space-x-9 text-base-100 font-medium leading-[1.6em]">
          {openConnectModal && (
            <button
              onClick={openConnectModal}
              className="bg-yellow font-bold text-base-100 px-4 py-2 rounded-lg"
            >
              Connect wallet
            </button>
          )}

          {openAccountModal && (
            <>
              <Link href="/dashboard">Dashboard</Link>

              <button
                onClick={openAccountModal}
                className="flex items-center justify-center cursor-pointer"
              >
                {/* @ts-ignore */}
                {address.substring(0, 5)}
                <User />
              </button>
            </>
          )}

          {isConnected && chain?.id !== 10200 && (
            <button
              className="bg-red-500 rounded-md text-white p-2"
              onClick={openChainModal}
              type="button"
            >
              Wrong Network
            </button>
          )}
        </div>
      </nav>
    </nav>
  );
};
export default Navbar;
