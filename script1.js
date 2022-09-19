// // 2. Use the rest countries and print all countries names,regions,subregion and populations

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);//result is json object
    // console.log(result);
    for(var i in result)
        console.log("countries Name:",result[i].name);
    console.log("countries Regions:",result[i].region);
    console.log("countries Subregion:",result[i].subregion);
    console.log("countries Population:",result[i].population);

};
