import { useContext, useEffect, useState } from "react";
import "./App.css";
import Routing from "./Router";
import { DataContext } from "./components/dataProvider/DataProvider";
import { Type } from "./utility/action.type";
import { auth } from "./utility/firebase";
function App() {
  const [{user}, dispatch]= useContext(DataContext)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser)
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })
      } else {
        dispatch({
          type: Type.SET_USER,
          user:null
        })
      }
    })
  },[])
  return (
    <Routing/>
  );
}

export default App;
