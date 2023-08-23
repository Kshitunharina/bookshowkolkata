import React from "react";
// import Child from "./Child";
//import Controls from"./Controls.js"
import Movies from "./Mo";

import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //////////cards////////////
      // <div className="img">
      //   <Child x="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1809/1571809-v-730ededb93c2"></Child>
      //   <Child x="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6553/1566553-v-62503ff858b8"></Child>
      //   <Child x="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4267/1364267-v-59ed5cfdea3a"></Child>
      //   <Child x="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5810/1565810-v-fd6514f3b4de"></Child>
      //   <Child x="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3569/1443569-v-9dd281391af9"></Child>
      // </div>
      ///////////////////////////

      // <Controls></Controls>
      <Movies></Movies>
    );
  }
}

export default App;
