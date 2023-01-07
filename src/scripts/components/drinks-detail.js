import closeImg from '../../img/close.svg';
import { drinkDataClass } from '../view/main';

class DrinkDetail extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set drink(drink) {
    this.show(drink);
  }

  set index(index) {
    this.drinkIndex = index;
  }

  show(drink) {
    this.shadowDOM.innerHTML = `
    <style>
        .frame {
            width: 45%;
            border-radius: 15px;
            overflow: hidden;
            margin: 5% auto;
        }

        img {
            width: 100%;
        }

        .detail {
            font-size: 0.8em;
        }
        
        p {
            margin-bottom: 10px;
            text-align: center;
        }
        
        ul {
            padding-left: 10%;
        }
        
        .close {
            width: 12%;
            position: absolute;
            top: 0;
            right: 0;
        }

        @media (min-width: 768px) {
            .close {
                width: 8%;
            }
        }

        @media (min-width: 1024px) {
            .detail {
                font-size: 1.2em;
            }
        }

        @media (min-width: 1400px) {
            .detail {
                font-size: 1.5em;
            }

            ul {
                padding-left: 5%;
            }
        }
    </style>

    <div class="frame">
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
    </div>
    `;
    const textDetail = document.createElement('div');
    textDetail.classList.add('detail');
    const drinkName = document.createElement('p');
    drinkName.innerText = drink.strDrink;
    textDetail.appendChild(drinkName);
    const ingredient = document.createElement('label');
    ingredient.setAttribute('for', 'ingredient-items');
    ingredient.innerText = 'Ingredient:';
    textDetail.appendChild(ingredient);
    const ingredientList = document.createElement('ul');
    ingredientList.setAttribute('id', 'ingredient-items');
    const ingredientItems = this.getIngredient(drink);
    ingredientItems.forEach((ingredientItem) => {
      if (ingredientItem != null) {
        const ingredientListItem = document.createElement('li');
        ingredientListItem.innerText = ingredientItem;
        ingredientList.appendChild(ingredientListItem);
      }
    });
    textDetail.appendChild(ingredientList);
    const instructions = document.createElement('p');
    instructions.innerText = drink.strInstructions;
    textDetail.appendChild(instructions);
    this.shadowDOM.appendChild(textDetail);
    const closeButton = document.createElement('img');
    closeButton.classList.add('close');
    closeButton.setAttribute('src', closeImg);
    closeButton.setAttribute('alt', 'close');
    closeButton.addEventListener('click', () => {
      drinkDataClass(`drink#${this.drinkIndex}`);
    });
    this.shadowDOM.appendChild(closeButton);
  }

  getIngredient(drink) {
    const {
      strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
      strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10,
      strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15,
    } = drink;
    const drinkDetail = [
      strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
      strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10,
      strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15,
    ];
    this.drinkDetail = drinkDetail;
    return this.drinkDetail;
  }
}

customElements.define('drink-detail', DrinkDetail);
