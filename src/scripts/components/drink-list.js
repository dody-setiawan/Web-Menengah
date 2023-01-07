import './drink-item';
import './drinks-detail';
import _ from 'lodash';
import FilterData from '../data/filter-data';

class DrinkList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set drinks(drinks) {
    this.showDrink(drinks);
  }

  set index(index) {
    this.drinkIndex = index;
  }

  showMessageNoResult(keyword) {
    this.shadowDOM.innerHTML = `
    <style>
        p {
            color: #FDEEDC;
            font-family: 'Lora', serif;
            font-size: 1em;
            margin: 2% auto 4%;
            font-weight: medium;
        }

        @media (min-width: 1400px) {
            p {
                font-size: 1.5em;
            }
        }

        @media (min-width: 1800px) {
            p {
                font-size: 2.2em;
            }
    </style>

    <p>No results found for "${keyword}"</p>
    `;
  }

  showDrink(drinks) {
    this.shadowDOM.innerHTML = `
    <style>
        drink-detail {
          width: 70%;
          padding: 3%;
          background-color: #FFD8A9;
          position: relative;
          margin: 2% auto 5%;
          border-radius: 2%;
          display: flex;
          flex-direction: column;
        } 

        drink-item {
          flex-basis: 25%;
          padding: 15px;
          background-color: #FFD8A9;
          border-radius: 10px;
          margin-bottom: 3%;
          text-align: center;
          display: block;
        }

        @media (min-width: 1400px) {
            drink-item {
                border-radius: 40px;
                font-size: 0.8em;
            }
        }
    </style>
    `;
    _.each(drinks, (drink, index) => {
      const drinkItemElement = document.createElement('drink-item');
      drinkItemElement.setAttribute('id', index);
      drinkItemElement.drink = drink;
      drinkItemElement.addEventListener('click', () => {
        const drinkIndex = drinkItemElement.getAttribute('id');
        drinkItemElement.classList.add(`drink#${drinkIndex}`);
        const drinkItemElements = this.shadowDOM.querySelectorAll('drink-item');
        _.each(drinkItemElements, (itemElement, indexItemElement) => {
          if (index === itemElement.getAttribute('id')) {
            const drinkItem = itemElement;
            drinkItem.style.display = 'none';
            drinkItemElements[indexItemElement] = drinkItem;
          }
        });
        const drinkData = drinks[index];
        FilterData.getDrinkData(drinkData, index);
      });
      this.shadowDOM.appendChild(drinkItemElement);
    });
  }

  showDrinkDetail(drinkData) {
    const drinkDetailElement = document.createElement('drink-detail');
    drinkDetailElement.classList.add(`drink#${this.drinkIndex}`);
    drinkDetailElement.drink = drinkData;
    drinkDetailElement.index = this.drinkIndex;
    this.shadowDOM.insertBefore(drinkDetailElement, this.shadowDOM.querySelector('drink-item'));
  }

  removeAndShow(className) {
    const drinkDetailElements = this.shadowDOM.querySelectorAll('drink-detail');
    _.each(drinkDetailElements, (drinkDetailElement) => {
      if (className === drinkDetailElement.getAttribute('class')) {
        drinkDetailElement.remove();
      }
    });
    const drinkItemElements = this.shadowDOM.querySelectorAll('drink-item');
    _.each(drinkItemElements, (itemElement, indexItemElement) => {
      if (className === itemElement.getAttribute('class')) {
        const drinkItem = itemElement;
        drinkItem.style.display = 'block';
        drinkItemElements[indexItemElement] = drinkItem;
      }
    });
  }
}

customElements.define('drink-list', DrinkList);
