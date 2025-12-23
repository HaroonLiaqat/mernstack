import {
  BangladeshFlag,
  CostaRicaFlag,
  FranceFlag,
  JapanFlag,
  PalestineFlag,
  PanamaFlag,
  UAEFlag,
  UAERounded,
} from "./components";

function App() {
  return (
    <>
      <div className="pb-12">
        <h1 className="text-red-500 font-bold text-4xl">Flags</h1>
        <BangladeshFlag />
        <CostaRicaFlag />
        <FranceFlag />
        <JapanFlag />
        <PalestineFlag />
        <PanamaFlag />
        <UAEFlag />
        <UAERounded />
      </div>
    </>
  );
}

export default App;
