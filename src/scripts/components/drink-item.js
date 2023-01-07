class DrinkItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set drink(drink) {
    this.show(drink);
  }

  show(drink) {
    this.shadowDOM.innerHTML = `
    <style>
        .frame {
            width: 25vw;
            margin: 2% auto 0;
            border-radius: 10px;
            overflow: hidden;
        }

        img {
            width: 100%;
        }

        p {
            font-size: 0.8em;
        }

        @media (min-width: 768px) {
            .frame {
                width: 18vw;
            }

            p {
                font-size: 0.66em;
            }
        }
        
        @media (min-width: 1024px) {
            .frame {
                width: 12vw;
            }

            p {
                font-size: 1em;
            }
        }

        @media (min-width: 1400px) {
            .frame {
                margin-top: 5%;
            }

            p {
                font-size: 1.4em;
            }
        }

        @media (min-width: 1800px) {
            p {
                font-size: 2.2em;
            }
        }
    </style>

    <div class="frame">
        <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
    </div>
    <p>${drink.strDrink}</p>
    `;
  }
}

customElements.define('drink-item', DrinkItem);
