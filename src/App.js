import "../src/index.scss";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import Plants from "./components/plants/Plants";
import NoResults from "./components/plants/noResult/NoResult";

const App = () => {
  const App = document.createElement("main");

  App.setAttribute("class", "App");
  App.append(Header());
  App.append(Filter());
  App.append(Plants());
  App.append(NoResults());

  return App;
};

export default App;
