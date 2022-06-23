const preloader = document.querySelector("#loader");
const list = document.querySelector("#items");

const getExchangeRates = async () => {
  const response = await fetch("https://netology-slow-rest.herokuapp.com");
  const data = await response.json();
  return data.response.Valute;
};

const createListItem = (charCode, value) => {
  return `
    <div class="item">
      <div class="item__code">${charCode}</div>
      <div class="item__value">${value}</div>
      <div class="item__currency">руб.</div>
    </div>
  `;
};

(async () => {
  await getExchangeRates().then(data => {
    for (let item in data) {
      const charCode = data[item].CharCode;
      const value = data[item].Value;
      list.innerHTML += createListItem(charCode, value)
    }
  });
  preloader.classList.remove("loader_active");
})();
