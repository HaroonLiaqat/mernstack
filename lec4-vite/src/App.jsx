function App() {
  return (
    <>
      <h1 className="text-red-500 font-bold text-4xl">Flags</h1>
      <div className="flex gap-14">
        <div className="h-52 w-72 flex flex-row items-center mt-5 border">
          <div className="flex-1 bg-[#002654] h-full" />
          <div className="flex-1 bg-white h-full" />
          <div className="flex-1 bg-[#CD1227] h-full" />
        </div>
        {/* <hr /> */}
        <div className="h-52 w-72 flex flex-col mt-5 border border-black">
          <div className="flex-1 bg-[#002654] " />
          <div className="flex-1 bg-white " />
          <div className="flex-2 flex bg-[#CD1227] items-center justify-center">
            <div className="h-3/4 aspect-square rounded-full bg-green-500" />
          </div>
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#002654]" />
        </div>

        <div className="h-52 w-72 flex items-center justify-center mt-5 border border-black">
          <div className="bg-[#CD1227] h-2/4 aspect-square rounded-full" />
        </div>
      </div>
    </>
  );
}

export default App;
