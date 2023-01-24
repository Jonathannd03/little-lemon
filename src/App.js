import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="my-app">
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
