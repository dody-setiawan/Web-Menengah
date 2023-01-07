import logoImg from '../../img/logo.svg';

class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this.show();
  }

  show() {
    this.shadowDOM.innerHTML = `
    <style>
        #logo {
            width: fit-content;
            margin: auto;
            display: flex;
        }
        
        #logo img {
            width: 18%;
        }
        
        #logo #logo-text {
            font-family: 'Satisfy', cursive;
            font-size: 1.6em;
            margin-left: 10px;
        }
        
        #description-text {
            font-size: 1.8em;
            margin: 0;
            text-align: center;
        }

        @media (min-width: 768px) {
            #logo {
                margin: 0;
                justify-content: left;
            }

            #logo img {
              width: 18%;
            }
            
            #logo #logo-text {
                font-size: 1.8em;
            }
            
            #description-text {
                font-size: 2.4em;
            }
        }

        @media (min-width: 1024px) {
            #logo {
                margin: auto;
                justify-content: left;
            }
        }

        @media (min-width: 1400px) {
            #logo img {
                width: 16%;
            }
            
            #logo #logo-text {
                font-size: 2.2em;
            }
            
            #description-text {
                font-size: 3em;
            }
        }

        @media (min-width: 1800px) {
            #logo img {
                width: 20%;
            }
            
            #logo #logo-text {
                font-size: 3em;
                width: 16vw;
            }
            
            #description-text {
                font-size: 4.5em;
            }
        }
    </style>

    <div id="logo">
        <img src="${logoImg}" alt="logo">
        <p id="logo-text">Halal Drinks Finder</p>
    </div>
    <p id="description-text">Find a halal drink that you like</p>
    `;
  }
}

customElements.define('app-header', AppHeader);
