import SelectCard from "../selectCard/SelectCard";
import dog from "../../assets/images/illustrations/dog.png";
import sun from "../../assets/images/illustrations/sun.png";
import wateringcan from "../../assets/images/illustrations/wateringcan.png";

export default () => {
  const Filter = document.createElement("section");

  Filter.setAttribute("class", "container");
  Filter.setAttribute("id", "selects");
  Filter.innerHTML = '<div class="cards"></div>';

  const cards = Filter.getElementsByClassName("cards")[0];

  cards.appendChild(
    SelectCard(
      sun,
      ["no", "low", "high"],
      `<p>
        <b>1.</b> Set the amount of <b>sunlight</b> your plant will get.
      </p>`,
      "selectSun"
    )
  );

  cards.appendChild(
    SelectCard(
      wateringcan,
      ["regularly", "daily", "rarely"],
      `<p>
        <b>2.</b> How often do you want to <b>water</b> your plant?
      </p>`,
      "selectWater"
    )
  );

  cards.appendChild(
    SelectCard(
      dog,
      ["true", "false"],
      `<p>
        <b>3.</b> Do you have pets? Do they <b>chew</b> plants?
      </p>`,
      "selectDog"
    )
  );

  return Filter;
};
