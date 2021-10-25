import Icons from "../icons/Icons";

export default (name, img, price, sun, toxicity, water) => {
  const Favorite = document.createElement("div");

  Favorite.setAttribute("class", "favorite");

  Favorite.innerHTML = `
    <div class="favorite__image">
        <img src=${img} />
    </div>
    <span class="favorite__pin">✨ Staff favorite</span>
    <div class="favorite__box">
        <h3>${name}</h3>
        <div class="favorite__card">
            <span class="favorite__prince">
                <b>$${price}</b>
            </span>
        </div>
    </div>`;

  Favorite.getElementsByClassName("favorite__card")[0].appendChild(
    Icons(sun, toxicity, water, "favorite__icons")
  );

  return Favorite;
};
