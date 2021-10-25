import ToxiImg from "../../../assets/images/icons/toxic.svg";
import PetImg from "../../../assets/images/icons/pet.svg";
import SunNoImg from "../../../assets/images/icons/no-sun.svg";
import SunLowImg from "../../../assets/images/icons/low-sun.svg";
import SunHighImg from "../../../assets/images/icons/high-sun.svg";
import Water1Img from "../../../assets/images/icons/1-drop.svg";
import Water2Img from "../../../assets/images/icons/2-drops.svg";
import Water3Img from "../../../assets/images/icons/3-drops.svg";

export default (sun, toxicity, water, classIcon) => {
  const Icons = document.createElement("div");

  Icons.setAttribute("class", classIcon);

  let SunImg = "";
  let WaterImg = "";

  switch (sun) {
    case "no":
      SunImg = SunNoImg;
      break;
    case "low":
      SunImg = SunLowImg;
      break;
    case "high":
      SunImg = SunHighImg;
      break;
  }

  switch (water) {
    case "rarely":
      WaterImg = Water1Img;
      break;
    case "regularly":
      WaterImg = Water2Img;
      break;
    case "daily":
      WaterImg = Water3Img;
      break;
  }

  Icons.innerHTML = `
  <img src=${toxicity ? ToxiImg : PetImg} />
  <img src=${SunImg} />
  <img src=${WaterImg} />`;

  return Icons;
};
