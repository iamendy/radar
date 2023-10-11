import ActivityBox from "./ActivityBox";
import SaveBox from "./SaveBox";
import Fire from "./icons/Fire";

const PiggieBank = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-x-8 max-w-[90rem] mx-auto h-full">
      <SaveBox />

      <ActivityBox />
    </section>
  );
};
export default PiggieBank;
