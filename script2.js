// // use the rest countries'API URL & display all the country flags in the console:

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);//result is json object
    console.log(result);
    for(var i in result)
        console.log(result[i].flag);

};
