const Faq = () => {
  return (
    <section className="py-12 px-6 lg:py-16 lg:px-8 mb-24">
      <div className="flex flex-col space-y-12 lg:space-y-16  xl:max-w-[1080px] xl:mx-auto">
        <div className="flex flex-col gap-y-4">
          <h2
            className="text-[28px] text-base-100 font-bold tracking-normal leading-[1.2em] text-center  
            md:w-[80%] md:mx-auto lg:text-4xl lg:w-[60%] lg:mx-auto
          "
          >
            Get started in 3 simple steps
          </h2>
        </div>

        <div className="md:w-[70%] md:mx-auto">
          <div className="flex flex-col space-y-2">
            <div className="bg-light flex flex-col p-4 rounded-lg ">
              <h3 className="font-bold p-2 md:text-lg flex gap-x-2 items-center">
                <span className="w-6 h-6 flex rounded-full  items-center justify-center text-light bg-base-50">
                  1
                </span>
                <span>Connect your Wallet</span>
              </h3>
            </div>

            <div className="bg-light flex flex-col p-4 rounded-lg">
              <h3 className="font-bold p-2 md:text-lg flex gap-x-2 items-center">
                <span className="w-6 h-6 flex rounded-full  items-center justify-center text-light bg-base-50">
                  2
                </span>
                <span>
                  Deposit Naira through USSD, debit card or mobile money to get
                  USDC
                </span>
              </h3>
            </div>

            <div className="bg-light flex flex-col p-4 rounded-lg">
              <h3 className="font-bold p-2 md:text-lg flex gap-x-2 items-center">
                <div className="items-center flex justify-center text-light">
                  <span className="w-6 h-6 rounded-full bg-base-50 flex items-center justify-center">
                    3
                  </span>
                </div>

                <span>
                  Save from your available balance and set a duration. We only
                  charge you when you break your piggy before duration.
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
