import noImg from "../../../assets/images/illustrations/no-results.png";

export default () => {
  const NoResult = document.createElement("section");

  NoResult.setAttribute("class", "noResults");

  NoResult.innerHTML = `
    <div class="container">
      <div class="noResults__box">
        <div>
          <h3>No results yet…</h3>
          <p>Use the filters above to find<br /> the plant that best fits your<br /> environment :)</p>
        </div>
        <div class="noResults__box__icon--left">
          <img src=${noImg} />
        </div>
      </div>
    </div>`;

  return NoResult;
};
