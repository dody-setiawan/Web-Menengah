import searchImg from '../../img/search.svg';
import './drinks-menu';

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this.show();
  }

  set drinks(drinks) {
    this.drinksData = drinks;
  }

  show() {
    this.shadowDOM.innerHTML = `
    <style>
        input {
            width: 100%;
            border: none;
            background: transparent;
            color: #FDEEDC;
            font-family: 'Lora', serif;
            font-size: 0.8em;
            margin-right: 10px;
        }
        
        input:focus {
            outline: none;
        }
        
        input::placeholder {
            color: #FDEEDC;
            font-family: 'Lora', serif;
        }

        @media (min-width: 768px) {
            input {
                font-size: 1em;
                margin-right: 20px;
            }
        }

        @media (min-width: 1800px) {
            input {
                font-size: 1.8em;
            }
        }
    </style>
    `;
    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'search');
    searchInput.setAttribute('id', 'search-input');
    searchInput.setAttribute('placeholder', 'Enter drink name');
    searchInput.setAttribute('autocomplete', 'off');
    searchInput.setAttribute('spellcheck', 'false');
    this.shadowDOM.appendChild(searchInput);
    const searchIcon = document.createElement('img');
    searchIcon.setAttribute('src', `${searchImg}`);
    searchIcon.setAttribute('alt', 'search');
    searchIcon.setAttribute('id', 'search-icon');
    searchIcon.addEventListener('click', () => {
      const keyword = searchInput.value;
      const drinksMenuElement = document.querySelector('drinks-menu');
      const searchResult = this.drinksData.filter((drink) => drink.strDrink.match(new RegExp(keyword, 'gi')) != null);
      if (searchResult.length) {
        drinksMenuElement.drinks = searchResult;
      } else {
        drinksMenuElement.keyword = keyword;
      }
    });
    this.shadowDOM.appendChild(searchIcon);
  }
}

customElements.define('search-bar', SearchBar);
