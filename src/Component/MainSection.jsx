import AdvanceStat from "./AdvanceStat";
import DivStack from "./DivStack";
import Shortly from "./Shortly";


const MainSection = () => {
  return (
    <div className="bg-[#C0C0C0] w-dvh h-auto mt-32 font-Pop">
      <Shortly /> 
      <AdvanceStat />
      <DivStack/>
    </div>
  );
};

export default MainSection;
