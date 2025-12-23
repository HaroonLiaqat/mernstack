import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import PageBody from "./components/page-body";

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-red-300 flex flex-col">
      <Header />
      <NavBar />
      <PageBody />
      <Footer />
    </div>
  );
}

export default App;
