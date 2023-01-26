import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./components/form/booking page/BookingPage";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <ChakraProvider>
        <div className="my-app">
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route
                exact
                path="/order-online"
                element={<BookingPage />}
              ></Route>
            </Routes>
          </Router>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
