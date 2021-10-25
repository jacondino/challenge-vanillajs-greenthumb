import Icons from "../icons/Icons";

export default (name, img, price, sun, toxicity, water) => {
  const Card = document.createElement("div");

  Card.setAttribute("class", "plants__box__card");
  console.log(Icons(sun, toxicity, water, "plants__box__card__icons"));
  Card.innerHTML = `
    <div class="plants__box__card__image">
      <img src=${img} />
    </div>
    <h3>${name}</h3>
    <div class="plants__box__card__footer">
      <span class="plants__box__card__prince">
        <b>$${price}</b>
      </span>
    </div>`;

  Card.getElementsByClassName("plants__box__card__footer")[0].appendChild(
    Icons(sun, toxicity, water, "plants__box__card__icons")
  );

  return Card;
};
