import DataSource from '../data/data-source';
import '../components/drinks-menu';
import '../components/search-bar';

const drinksMenuElement = document.querySelector('drinks-menu');
const main = () => {
  const searchElement = document.querySelector('search-bar');

  DataSource.getDrinks().then((value) => {
    drinksMenuElement.drinks = value;
    searchElement.drinks = value;
  });
};

const drinkData = (drink, index) => {
  const [drinkItem] = drink;
  drinksMenuElement.index = index;
  drinksMenuElement.dataDetail = drinkItem;
};

const drinkDataClass = (className) => {
  drinksMenuElement.className = className;
};

export { main, drinkData, drinkDataClass };
