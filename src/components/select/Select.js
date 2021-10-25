export default (options, id) => {
  const Select = document.createElement("div");

  Select.setAttribute("class", "select");

  Select.innerHTML = `
  <select>
    <option value="">Select...</option>
  </select>`;

  const SetOptions = Select.getElementsByTagName("select")[0];

  SetOptions.setAttribute("id", id);

  options.map((option) => {
    let opt = document.createElement("option");
    opt.innerHTML = option;
    SetOptions.appendChild(opt);
  });

  return Select;
};
