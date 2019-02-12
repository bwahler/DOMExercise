Display();

class Country{
    constructor(name, lang, greeting, colors){
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = new Array(3);
        this.colors = colors;
    }
    setColors(color1, color2, color3){
        this.colors = {color1, color2, color3};
    }
}

function Display()
{
    var chosenCountry = SwitchCountry();

    document.getElementById("Color1").style.backgroundColor = chosenCountry.colors[0];
    document.getElementById("Color2").style.backgroundColor = chosenCountry.colors[1];
    document.getElementById("Color3").style.backgroundColor = chosenCountry.colors[2];
    document.getElementById("CountryName").innerHTML = chosenCountry.name;
    document.getElementById("OfficialLanguage").innerHTML = chosenCountry.lang;
    document.getElementById("HelloWorld").innerHTML = chosenCountry.greeting;
}


function SwitchCountry(){
    let input = prompt("Please input a country: (USA, Canada, Germany, Mexico, Italy)").toLowerCase();
    var number;
    var listCountry = new Array(5);
    listCountry = countryArray();
    for(var i = 0; i < listCountry.length; i++)
    {
        if(listCountry[i].name.toLowerCase() == input)
        {
            console.log(listCountry[i].name);
            number = i;
        }
    }
    return listCountry[number];
}
function countryArray()
{
    var listCountry = new Array(5);
    listCountry[0] = {name: "USA", lang: "English", greeting: "Hello World!", colors: ["red", "white", "blue"]};
    listCountry[1] = {name: "Canada", lang: "English, French", greeting: "Hello World!, Bonjour Le Monde!", colors: ["red", "white", "red"]};
    listCountry[2] = {name: "Germany", lang: "German", greeting: "Hallo Welt!", colors: ["black", "red", "gold"]};
    listCountry[3] = {name: "Mexico", lang: "Spanish", greeting: "Halo Mundo!", colors: ["green", "white", "red"]};
    listCountry[4] = {name: "Italy", lang: "Italian", greeting: "Ciao mondo!", colors: ["green", "white", "red"]};
    return listCountry;
}