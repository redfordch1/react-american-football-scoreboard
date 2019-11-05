import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [quarterValue, setQuarter] = useState(1);
  const [downValue, setDown] = useState(1);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downValue}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterValue}</div>
      </div>
      <section className="buttons">
        <div className="bottomButtons">
          <button onClick= { () => setQuarter(quarterValue + 1)} className= "awayButtons__touchdown">Quarter</button>
          <button onClick= { () => setDown(downValue + 1)} className= "awayButtons__fieldGoal">Down</button>
        </div>
      </section>
    </div>
  );
};

export default BottomRow;
