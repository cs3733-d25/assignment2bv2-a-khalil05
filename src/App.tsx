
import Title from "./components/title";
import Intro from "./components/intro";
import Hobby1 from "./components/hobby1";
//import Hobby2 from "./components/hobby2";
import "./App.css";
import * as React from "react";

const App: React.FC =() => {
    return (

        <div className={"app"}>

            <Title className={"CS3733-D25"} teamNum={12} hobby1={"Lifting"} hobby2={"Makeup"}/>
            <Intro name1={"Aliza Khalil"} name2={"Zahra Karim"}/>
            <Hobby1 name={"Aliza khalil"} hobby={"Lifting"} image={"/public/lift.jpg"}/>
            //ADD Hobby 2!
        </div>
    );
};

export default App;
