import { useReducer, useState } from "react";

const ACTIONS = {};

function reducer(result, action) {
  if(isNaN(action.payload.value) === true) {
    alert('Insert only numbers!')
    return result
  }
  switch (action.type) {
    case "title":
      return "Select convertion"
    case "LBS-KILOS":
      return (action.payload.value / 2.205).toFixed(2);
    case "KILOS-LBS":
      return (action.payload.value * 2.205).toFixed(2);
      case "C-F":
      return Math.floor((action.payload.value * 1.8) + 32);
      case "F-C":
      return Math.floor((action.payload.value - 32) * 0.5556);
  }
}

export default function UnitConverterPage() {
  const [unitSelector, setUnitSelector] = useState("title");
  const [value, setValue] = useState("");
  const [result, dispatch] = useReducer(reducer, "--");

  console.log(unitSelector, "unitSelector main");
  console.log(result, "result main");

  return (
    <div className="converter-container">
      <div className="converter-header-wrap">
        <select
          type="dropdown"
          className="unit-select"
          onChange={(e) => {
            setUnitSelector(e.target.value);
          }}
        >
          <option value="title">Select units</option>
          <option value="title">--WEIGHT--</option>
          <option value="LBS-KILOS">LBS to KILOS</option>
          <option value="KILOS-LBS">KILOS to LBS</option>
          <option value="title">--TEMPERATURE--</option>
          <option value="C-F">C° to F°</option>
          <option value="F-C">F° to C°</option>
        </select>
        <div className="converter-input-wrap">
          <input
            type="text"
            className="converter-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="converter-btn" onClick={() => dispatch({ type: unitSelector, payload: { value: value} })}>
            ENTER
          </button>
        </div>
      </div>
      <div className="conversion-container">
        <p>RESULT</p>
        <p className="conversion-result">{result}</p>
      </div>
    </div>
  );
}
