import { PlantsModel } from "../../model/plants.model";

const API = "https://front-br-challenges.web.app/api/v2/green-thumb/";

export const getPlants = async (sun, water, pets) => {
  return await fetch(`${API}?sun=${sun}&water=${water}&pets=${pets}`, {
    method: "get",
  })
    .then((res) => res.json())
    .then((response) => response.map((res) => new PlantsModel(res)))
    .catch((err) => {
      console.error(err);
    });
};
