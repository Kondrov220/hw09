let array = JSON.parse(localStorage.getItem("array")) || [];
let id = 0
// показати всі елементи
array.forEach((element) => {
  document.querySelector(".box").insertAdjacentHTML("afterbegin", element.html);
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    document.querySelector("#name").value !== "" &&
    document.querySelector("#firstname").value !== "" &&
    document.querySelector("#email").value !== "" &&
    document.querySelector("#tel").value !== ""
  ) {
    const list = `
    <div class="contact" data-id="${id}">
      <ul class="list">
          <li><h2>Ім'я</h2><p>${document.querySelector("#name").value}</p></li>
          <li><h2>Прізвище</h2><p>${document.querySelector("#firstname").value}</p></li>
          <li><h2>Електрона адреса</h2><p>${document.querySelector("#email").value}</p></li>
          <li><h2>Телефон</h2><p>${document.querySelector("#tel").value}</p></li>
      </ul>
      <button class="delete">Видалити</button>
    </div>`;

    array.push({ id, html: list });
    localStorage.setItem("array", JSON.stringify(array));

    document.querySelector(".box").innerHTML = "";
    array.forEach((element) => {
      document.querySelector(".box").insertAdjacentHTML("afterbegin", element.html);
      id++;
    });
  }
});
document.querySelector(".box").addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON" && e.target.textContent === "Видалити") {
    const idToDelete = Number(e.target.closest(".contact").dataset.id); // взяти його ID


    array = array.filter((item) => item.id !== idToDelete);
    localStorage.setItem("array", JSON.stringify(array));
    document.querySelector(".box").innerHTML = "";
    array.forEach((element) => {
      document.querySelector(".box").insertAdjacentHTML("afterbegin", element.html);
      id++;
    });
  }
});