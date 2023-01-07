import _ from 'lodash';
import { drinkData } from '../view/main';

class FilterData {
  static getDrinkData(drink, index) {
    const keyword = _.snakeCase(`${drink.strDrink}`);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        drinkData(responseJson.drinks, index);
      });
  }
}

export default FilterData;
