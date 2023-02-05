let countries;
let populationA;
let populationB;
let nameA;
let nameB;

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

let a = getRandomCountry(249);
console.log(a);

let b = getRandomCountry(249);
console.log(b)



function initialize(countriesData)  {
    countries = countriesData;

    console.log("Population of", countries[a].name.common, "is", countries[a].population);
    let flagLinkA=(countries[a].flags.svg);
    console.log(flagLinkA);
    document.querySelector("#flag1 img").src = flagLinkA;
    populationA=(countries[a].population);
    nameA=(countries[a].name.common);
    document.getElementById("nameA").innerHTML = nameA;
    document.getElementById("populationA").innerHTML = "Population: " + populationA.toLocaleString("en-US");

    console.log("Population of", countries[b].name.common, "is", countries[b].population);
    let flagLinkB=(countries[b].flags.svg);
    console.log(flagLinkB);
    document.querySelector("#flag2 img").src = flagLinkB;
    populationB=(countries[b].population);
    nameB=(countries[b].name.common);
    document.getElementById("nameB").innerHTML = nameB;
}

let score = 0

function reload()   {

    a = b;
    console.log(a);
    b = getRandomCountry(249);
    console.log(b);
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => initialize(data))

}

function compareHigher()  {
    if(populationB > populationA)
    {
        score++;
        reload();
    }
    else
    {
        alert("Game over. Your score was " + score);
    }
}

function compareLower()  {
    if(populationB < populationA)
    {
        score++;
        reload();
    }
    else
    {
        alert("Game over. Your score was " + score);
    }
}


