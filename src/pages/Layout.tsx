import { useReducer } from "react";
import { Outlet } from "react-router";
import { AnimalContext } from "../context/AnimalContext";
import { animalReducer, initialState } from "../reducers/AnimalReducer";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const Layout = () => {
  const [state, dispatch] = useReducer(animalReducer, initialState);

  return (
    <AnimalContext.Provider value={{ ...state, dispatch }}>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </AnimalContext.Provider>
  );
};
