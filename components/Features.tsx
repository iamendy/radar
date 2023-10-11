import Link from "next/link";
import Calculator from "./icons/Calculator";
import Carrot from "./icons/Carrot";
import Customize from "./icons/Customize";
import { useAccount } from "wagmi";

const Features = () => {
  const { isConnected } = useAccount();

  return (
    <section className="py-12 px-6 lg:py-16 lg:px-8">
      <div className="flex flex-col space-y-12 lg:space-y-16  xl:max-w-[1080px] xl:mx-auto">
        <div className="flex flex-col gap-y-4">
          <h3 className="tracking-[0.25em] leading-[1.7em] text-center">
            FEATURES
          </h3>
          <h2
            className="text-[28px] text-base-100 font-bold tracking-normal leading-[1.2em] text-center  
            lg:text-4xl lg:w-[60%] lg:mx-auto
          "
          >
            Easy onRamp, Easy Savings
          </h2>
          <p className="text-sm text-center leading-[1.75em] md:w-[70%] md:mx-auto lg:text-base lg:w-[65%]">
            Rainfy integrates Monerium to help you save your Euros, Pounds or
            Sterling securely on Gnosis Blockchain. Earn Rainfy tokens (RAIN) as
            you hit your savings target.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-12">
            <div className="p-8 flex flex-col gap-y-5 bg-light rounded-xl lg:rounded-2xl lg:col-span-4 lg:gap-y-8">
              <div className="w-9 h-9 lg:w-12 lg:h-12">
                <Customize />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <h3 className="font-bold text-xl text-base-100 leading-[1.2em] lg:text-2xl">
                  Gnosis Powered
                </h3>
                <p className="lg:text-lg ">
                  Our vault is built on the security, and speed of Gnosis
                  blockchain
                </p>
              </div>
            </div>

            <div className="p-8 flex flex-col gap-y-5 bg-light rounded-xl lg:rounded-2xl lg:col-span-8 lg:gap-y-8">
              <div className="w-9 h-9 lg:w-12 lg:h-12">
                <Calculator />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <h3 className="font-bold text-xl text-base-100 leading-[1.2em] lg:text-2xl">
                  Flexible Vault
                </h3>
                <p className="lg:text-lg lg:w-[90%]">
                  Save in Euros, Pounds or Sterling. Add more savings as you
                  wish, and break your piggy bank after your set duration
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-12 lg:gap-y-8">
            <div className="p-8 flex flex-col gap-y-5 bg-light rounded-xl lg:rounded-2xl lg:col-span-8">
              <div className="w-9 h-9 lg:w-12 lg:h-12">
                <Carrot />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <h3 className="font-bold text-xl text-base-100 leading-[1.2em] lg:text-2xl">
                  Habit Hack
                </h3>
                <p className="lg:text-lg lg:w-[90%]">
                  We only charge you when you break your piggy before the
                  deadline. This discourages impulse spending and helps build a
                  savings habit
                </p>
              </div>
            </div>

            <div className="p-8 flex flex-col gap-y-5 text-white rounded-xl lg:rounded-2xl bg-base-100 lg:col-span-4">
              <h3 className="font-bold text-xl text-white leading-[1.2em] lg:text-2xl">
                Secured Piggy
              </h3>

              <div className="flex flex-col gap-y-[10px] lg:gap-y-[20px]">
                <p className="lg:text-lg ">Ready to start saving?</p>

                {isConnected ? (
                  <Link
                    href="/dashboard"
                    className="bg-yellow w-fit font-bold text-base-100 px-5 py-2 rounded-lg lg:px-9"
                  >
                    Start saving →
                  </Link>
                ) : (
                  <button className="bg-yellow w-fit font-bold text-base-100 px-5 py-2 rounded-lg lg:px-9">
                    Connect wallet →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
