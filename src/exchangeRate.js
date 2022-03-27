export default class exchangeRate {  
  static getExchange (location, location2, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${location}/${location2}/${amount}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {  
        return error;
      });
  }
}