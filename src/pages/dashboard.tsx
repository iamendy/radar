import ActivityBox from "../components/ActivityBox";
import SaveBox from "../components/SaveBox";

const Dashboard = () => {
  return (
    <section className="p-6 2xl:px-24 gap-x-9 flex justify-between mx-auto">
      <SaveBox />

      <ActivityBox />
    </section>
  );
};
export default Dashboard;
