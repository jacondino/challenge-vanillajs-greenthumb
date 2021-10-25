import ArrowDownIcon from "../../assets/images/icons/arrow-down.svg";
import Logo from "../../assets/images/icons/logo-white.svg";
import { PageScroll } from "../../util/pageScroll";

export default () => {
  const Header = document.createElement("header");

  Header.setAttribute("class", "header");

  Header.innerHTML = `
  <div class="container">
    <div class="header__title">
      <img src=${Logo} alt="logo Green thumb" />
      <h1>Find your <br />next green <br />friend</h1>
    </div>
  </div>`;

  const btn = document.createElement("button");

  btn.className = "button__transparent";

  btn.innerHTML = `<img src=${ArrowDownIcon} alt="button to go to the next section of the page" />`;

  btn.addEventListener("click", () => {
    PageScroll("#selects");
  });

  const HeaderTitle = Header.getElementsByClassName("header__title");

  HeaderTitle[0].appendChild(btn);

  return Header;
};
