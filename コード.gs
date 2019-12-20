function myFunction() {
  var url = "https://api.exchangeratesapi.io/latest";
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json);
  Logger.log(data.rates);
}
