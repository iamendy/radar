import { Listbox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import currencies from "../constants/currencies";
import UpdatePiggy from "./UpdatePiggy";
import NewPiggy from "./NewPiggy";
import { useContractRead, useAccount } from "wagmi";
import connect from "../constants/connect";
import Loader from "./icons/Loader";

const SaveBox = () => {
  const [selected, setSelected] = useState(currencies[0]);
  const { address } = useAccount();

  const { data: isActive, isLoading } = useContractRead({
    //@ts-ignore
    address: connect?.address,
    abi: connect?.abi,
    functionName: "isActive",
    args: [address, selected?.symbol],
    watch: true,
  });

  return (
    <aside className="lg:w-[30%] p-4">
      <h3 className="font-semibold">Start your Savings Journey</h3>
      <form className="mt-4 ">
        <div className="space-y-5">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left rounded-md border border-gray-300 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {currencies.map((currency, i) => (
                    <Listbox.Option
                      key={i}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={currency}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {currency.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          {isActive ? (
            <UpdatePiggy selectedCurrency={selected} />
          ) : (
            <NewPiggy selectedCurrency={selected} />
          )}
        </div>
      </form>
    </aside>
  );
};
export default SaveBox;
