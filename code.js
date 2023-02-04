let countries;


/*fetch("https://restcountries.com/v3.1/all")
then(function(res){
    //console.log(res);
    return res.json();
})
.then(function(data){
    //console.log(data);
    initialize(data);
})

function initialize(countriesData){
    console.log(countriesData)
} */

fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data => initialize(data))

function getRandomCountry(total)  {
    return Math.floor(Math.random() * total);

}

let i = getRandomCountry(249);
console.log(i);



function initialize(countriesData)  {
    countries = countriesData;

    console.log("Population of", countries[i].name.common, "is", countries[i].population);
//    console.log(countries[i].flags.svg);
    let flagLink=(countries[i].flags.svg);
    console.log(flagLink);

    document.querySelector("#flag img").src = flagLink;

}




