import Select from "../select/Select";

export default (img, options, text, id) => {
  const SelectCard = document.createElement("div");

  SelectCard.setAttribute("class", "cards__box");

  SelectCard.innerHTML = `
  <img width="75" src=${img} />
  ${text}
`;

  SelectCard.appendChild(Select(options, id));

  return SelectCard;
};
