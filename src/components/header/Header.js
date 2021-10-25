import ArrowDownIcon from "../../assets/images/icons/arrow-down.svg";
import Logo from "../../assets/images/icons/logo-white.svg";
import { PageScroll } from "../../util/pageScroll";
import bgLeft from "../../assets/images/hero/desktop/left-leaves.png";
import bgCenter from "../../assets/images/hero/desktop/plantperson.png";
import bgRight from "../../assets/images/hero/desktop/right-leaves.png";

export default () => {
  const Header = document.createElement("header");

  Header.setAttribute("class", "header");

  Header.innerHTML = `
  <div class="header__bg">
    <div class="header__bg__img" id="header__bg1"><img src=${bgLeft} /></div>	
    <div class="header__bg__img" id="header__bg2"><img src=${bgCenter} /></div>	
    <div class="header__bg__img" id="header__bg3"><img src=${bgRight} /></div>	
  </div>
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
