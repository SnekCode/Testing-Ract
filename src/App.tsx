import React from 'react';
import logo from './logo.svg';
import './App.css';
import Select from "react-select";

function App() {

    const optionArray = [{value: "Testing1", label: "Testing1"},{value: "Testing2", label: "Testing2"},{value: "Testing3", label: "Testing3"}]
    let customStyles: { singleValue: (base: any, {data}: { data: any }) => any; control: (base: any) => any; menu: (base:any) => any};
    customStyles = {
        singleValue: (base:any, {data}) => ({...base, color: "blue"}),
        menu: (base:any) => ({...base, backgroundColor: "transperent"}),
        control: (base:any) => ({...base, backgroundColor: "transperent", '&:hover': {}, '&:focus-within': {},})
    }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Testing react select vs an input dropdown
        </p>
          <form role={"form"}>
              <Select id={"select"} name={"test"} inputId={"test"} className={"w-50"} options={optionArray} styles={{...customStyles}} value={optionArray[0]}/>
          </form>
      </header>



    </div>
  );
}

export default App;
