import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./components/form/booking page/BookingPage";
import Home from "./components/Home/Home";
import { fetchAPI } from "./BookingsApi";
import React, { useReducer } from "react";

function App() {
  const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return updateTimes(state, action.payload);
      default:
        return state;
    }
  };

  const updateTimes = (state, selectedDate) => {
    return fetchAPI(selectedDate);
  };

  const initializeTimes = (state, selectedDate) => {
    return fetchAPI(selectedDate);
  };

  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initializeTimes()
  );

  const handleDateChange = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };
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
                element={
                  <BookingPage
                    state={availableTimes}
                    statechangingF={handleDateChange}
                  />
                }
              ></Route>
            </Routes>
          </Router>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
