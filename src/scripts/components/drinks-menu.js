import './drink-list';

class DrinksMenu extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set drinks(drinks) {
    this.show();
    this.shadowDOM.querySelector('drink-list').drinks = drinks;
  }

  set dataDetail(drinkData) {
    this.shadowDOM.querySelector('drink-list').showDrinkDetail(drinkData);
  }

  set index(index) {
    this.shadowDOM.querySelector('drink-list').index = index;
  }

  set className(className) {
    this.shadowDOM.querySelector('drink-list').removeAndShow(className);
  }

  set keyword(keyword) {
    this.shadowDOM.querySelector('drink-list').showMessageNoResult(keyword);
  }

  show() {
    this.shadowDOM.innerHTML = `
    <style>
        drink-list {
            background-color: #E38B29;
            border-radius: 10px;
            padding: 5% 0 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            box-shadow: 0 1px 4px #000;
            box-sizing: border-box;
        }
    </style>
    `;
    const drinkListElement = document.createElement('drink-list');
    this.shadowDOM.appendChild(drinkListElement);
  }
}

customElements.define('drinks-menu', DrinksMenu);
