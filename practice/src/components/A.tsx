import { Images } from "../assets";

const A = () => {
  return (
    <div className="flex  flex-1 flex-row bg-fuchsia-700 w-1/2 px-6 py-10 mx-auto">
      <div className="flex flex-col flex-1 justify-between">
        <p>Super Protech Ltd.</p>
        <p>Company Town Hall</p>
        <p>January 8, 2025</p>
        <button>Watch from here</button>
      </div>
      <div className="p-6 rounded-xl bg-white">
        <img
          src={Images.team}
          alt="team"
          className="h-[calc(100vh-500px)] w-[calc(100vh-500px)]"
        />
      </div>
    </div>
  );
};

export default A;
