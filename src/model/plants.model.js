export class PlantsModel {
  constructor({ id, name, price, staff_favorite, sun, toxicity, url, water }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.favorite = staff_favorite;
    this.sun = sun;
    this.toxicity = toxicity;
    this.img = url;
    this.water = water;
  }
}
