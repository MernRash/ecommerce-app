import React, {useState} from "react";
// import Radio from "@material-ui/core/Radio";
import Slider from "@mui/material/Slider";

const minValue = 10000;
function LeftSideBar() {
    const [value, setValue] = useState([20000, 30000]);
  // const [, setColor] = useState("");

  const [, setBoardColor] = useState("");
  const getValueFromSlider = (e, val, activeThumb) => {
    if (!Array.isArray(val)) {
      return;
    }

    if (val[1] - val[0] < minValue) {
      if (activeThumb === 0) {
        const clamped = Math.min(val[0], 100000 - minValue);
        setValue([clamped, clamped + minValue]);
      } else {
        const clamped = Math.max(val[1], minValue);
        setValue([clamped - minValue, clamped]);
      }
    } else {
      setValue(val);
    }
  };

  // const colorSelectorFunc = (e) => {
  //   setColor(e.target.value);
  // };
  return (
    <div className="leftSide-component">
      <div className="accessories-box">
        <div className="accessoriesHeading">
          <b>Accessories</b>
        </div>
        <div className="accessories-option-container">
          <div className="accessories-Options option1">
            <span>Apple Car</span>
          </div>
          <div className="accessories-Options option2">
            <span>Air port & wireless</span>
          </div>
          <div className="accessories-Options option3">
            <span>Cables & Docks</span>
          </div>
          <div className="accessories-Options option4">
            <span>Cases & Films</span>
          </div>
          <div className="accessories-Options option5">
            <span>Charging Devices</span>
          </div>
          <div className="accessories-Options option6">
            <span>Connected home</span>
          </div>
          <div className="accessories-Options option7">
            <span>Headphones</span>
          </div>
        </div>
      </div>
      <div className="priceSlider">
        <div className="priceHeading">
          <b>PRICES</b>
        </div>
        <div className="displayRange">
          <span>Ranger: {`${value[0]} - ${value[1]}`}</span>
        </div>
        <div className="range-selector">
          <Slider
            value={value}
            valueLabelDisplay="auto"
            max={100000}
            onChange={getValueFromSlider}
            disableSwap
          />
        </div>
      </div>

      <div className="colorSelector">
        <div className="colorHeading">COLOR</div>
        <div className="coloRadioSelector">
          <input
            className="radio-btn r1"
            type="radio"
            name="r"
            id="radio1"
            value="1"
          />
          <input
            className="radio-btn r2"
            type="radio"
            name="r"
            id="radio2"
            value="2"
          />
          <input
            className="radio-btn r3"
            type="radio"
            name="r"
            id="radio3"
            value="3"
          />
          <input
            className="radio-btn r4"
            type="radio"
            name="r"
            id="radio4"
            value="4"
          />
          <input
            className="radio-btn r5"
            type="radio"
            name="r"
            id="radio5"
            value="5"
          />
          <input
            className="radio-btn r6"
            type="radio"
            name="r"
            id="radio6"
            value="6"
          />

          <label
            className="popup-r-label pl1"
            onClick={() => setBoardColor("#006CFF")}
            htmlFor="radio1"
          ></label>
          <label
            className="popup-r-label pl2"
            onClick={() => setBoardColor("#FC3E39")}
            htmlFor="radio2"
          ></label>

          <label
            className="popup-r-label pl3"
            onClick={() => setBoardColor("#171717")}
            htmlFor="radio3"
          ></label>

          <label
            className="popup-r-label pl4"
            onClick={() => setBoardColor("#FFF600")}
            htmlFor="radio4"
          ></label>

          <label
            className="popup-r-label pl5"
            onClick={() => setBoardColor("#FF00B4")}
            htmlFor="radio5"
          ></label>

          <label
            className="popup-r-label pl6"
            onClick={() => setBoardColor("#EFDFDF")}
            htmlFor="radio6"
          ></label>
        </div>
      </div>

      <div className="brandSelector">
        <div className="brandHeading">BRAND</div>
        <div className="brandsBox">
          <div className="brandsOptions">
            <span>Apple</span>
            <span>98</span>
          </div>
          <div className="brandsOptions">
            <span>LG</span>
            <span>80</span>
          </div>
          <div className="brandsOptions">
            <span>Samsung</span>
            <span>78</span>
          </div>
          <div className="brandsOptions">
            <span>Siemens</span>
            <span>99</span>
          </div>
        </div>
      </div>

      <div className="applyBox">
        <div className="applyBtn">Apply</div>
      </div>
    </div>
  )
}

export default LeftSideBar;
