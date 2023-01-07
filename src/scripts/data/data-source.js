import 'regenerator-runtime';

class DataSource {
  static getDrinks() {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
      .then((response) => response.json())
      .then((responseJson) => responseJson.drinks);
  }
}

export default DataSource;
