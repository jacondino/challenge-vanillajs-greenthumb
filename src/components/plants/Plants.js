import pick from "../../assets/images/illustrations/pick.png";
import { getPlants } from "../../service/plants";
import Card from "./card/Card";
import NoResult from "./noResult/NoResult";
import Favorite from "./favorite/Favorite";

export default () => {
  const Plants = document.createElement("section");

  let sun = "",
    water = "",
    dog = "",
    noResult = true;

  const RenderPlants = (plants) => {
    Plants.setAttribute("class", "plants");

    Plants.innerHTML = `
    <div class="container">
      <img width="158" src=${pick} />
      <h2>Our picks for you</h2>
      <div class="plants__box"></div>
    </div>`;

    const card = Plants.getElementsByClassName("plants__box")[0];

    plants.map((plant) => {
      card.appendChild(
        plant.favorite
          ? Favorite(
              plant.name,
              plant.img,
              plant.price,
              plant.sun,
              plant.toxicity,
              plant.water
            )
          : Card(
              plant.name,
              plant.img,
              plant.price,
              plant.sun,
              plant.toxicity,
              plant.water
            )
      );
    });
  };

  const getPlantsByType = async () => {
    if (sun && water && dog) {
      const res = await getPlants(sun, water, dog);

      RenderPlants(res);

      noResult = false;
      const noResultsElement = document.getElementsByClassName("noResults");
      noResultsElement[0].remove();
    }
  };

  window.onload = () => {
    const selectSun = document.getElementById("selectSun");
    const selectWater = document.getElementById("selectWater");
    const selectDog = document.getElementById("selectDog");

    selectSun.addEventListener("change", (e) => {
      sun = e.target.value;
      getPlantsByType();
    });

    selectWater.addEventListener("change", (e) => {
      water = e.target.value;
      getPlantsByType();
    });

    selectDog.addEventListener("change", (e) => {
      dog = e.target.value;
      getPlantsByType();
    });
  };

  return Plants;
};
