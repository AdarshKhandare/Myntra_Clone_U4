import React ,{ createContext, useContext, useState } from "react";


export const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const [event, setEvent] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [data,setData] = useState([])
  const handleEvent = (e,c) => {
    setEvent(e)
    console.log(e)
    console.log(c)
    setChecked(c)
  }
  const handleData = (e) => {
    setData(e)
  }
    return (
        <FilterContext.Provider value={{ event,handleEvent,isChecked,handleData,data }} >
          {children}
        </FilterContext.Provider>
      );
}