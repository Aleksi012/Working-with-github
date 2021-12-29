let omistajat = document.getElementById("omistajat")

omistajat.addEventListener("click", myFunction1)





function myFunction1() {
    document.getElementById("col1").innerHTML = ""
    document.getElementById("col2").innerHTML = ""

    let x = document.createElement("img");
    x.setAttribute("src", "images/radrizzani.jpg")
    document.getElementById("col2").appendChild(x)

    document.getElementById("col1").innerHTML = "Seuran enemmistö omistaja on Italialainen Andrea Radrizzani. Hän on syntynyt 10.9.1974. Tammikuussa 2017 hän osti 50 % osuuden seurasta ja 23.5.2017 hänestä tuli seuran 100 % omistaja yhteensä 53 milj euron kauppahinnalla. Tämän jälkeen hän on määrätietoisesti kehittänyt seuraa kohti uutta kukoistusta. Merkittävin yksittäinen asia on ollut argentiinalaisen Marcelo Bielsan hankkiminen seuran manageriksi kesällä 2018. Tällä hetkellä Radrizzani omistaa seurasta 56 % ja loput omistaa 49ers Enterprise, joka on NFL seura San Francisco 49ers omistaja."
}

let premierleague = document.getElementById("premierleague")

premierleague.addEventListener("click", myFunction2)

function myFunction2() {
    document.getElementById("col1").innerHTML = ""
    document.getElementById("col2").innerHTML = ""

    let y = document.createElement("img");
    y.setAttribute("src", "images/premierleague.JPG")
    document.getElementById("col2").appendChild(y)

    document.getElementById("col1").innerHTML = "<p> Englannin Valioliiga on Englannin korkein jalkapallon sarjataso. Ensimmäinen valioliigakausi pelattiin kaudella 1992-1993, jolloin Englannin 22 korkeimmalla sarjatasolla, silloisessa 1. divisioonassa, pelannutta jalkapalloseuraa erosi The Football Leaguen alaisuudesta ja sai näin päätösvallan televisiointi- ja sponsorisopimusasioissa itselleen. Liiga solmi rahakkaan televisointisopimuksen British Sky Broadcasting-yhtiön kanssa. Sarjassa pelaa 20 joukkuetta ja liigaa seurataan maailmanlaajuisesti."
}


let tärkeimmätpelaajat = document.getElementById("tärkeimmätpelaajat")

tärkeimmätpelaajat.addEventListener("click", myFunction3)

function myFunction3() {
    document.getElementById("col1").innerHTML = ""
    document.getElementById("col2").innerHTML = ""

    document.getElementById("col1").innerHTML = "<p>Illian Meslier ( syntynyt 2.3.2000 ) on ranskalainen ja tällä hetkellä valioliigan nuorin ykkösmaalivahti. Liam Cooper ( syntynyt 30.8.1991 ) on Skotlannin A-maajoukkueen keskuspuolustaja ja seuran kapteeni. Keskikenttäpelaaja Kalvin Philips ( syntynyt 2.12.1995 ) on seuran oma kasvatti ja englannin maajoukkuepelaaja. Raphinha ( syntynyt 14.12.1996 ) on brasilialainen laitahyökkääjä, joka siirtyi seuraan elokuussa 2020 ja on sen jälkeen edustanut myös maataan maajoukkuetasolla. Patrik Bamford ( syntynyt 5.9.1993 ) on ollut seuran ykköshyokkääjä viimeiset sarjakaudet"
    

    let x = document.createElement("img");
    x.setAttribute("src", "images/pelaajat.JPG")
    document.getElementById("col2").appendChild(x)

}

let pelipaidat = document.getElementById("pelipaidat")

pelipaidat.addEventListener("click", myFunction4)

function myFunction4() {

    document.getElementById("col1").innerHTML = ""
    document.getElementById("col2").innerHTML = ""

    let x = document.createElement("img");
    x.setAttribute("src", "images/homekit2.JPG")
    document.getElementById("col1").appendChild(x)

    let y = document.createElement("img");
    y.setAttribute("src", "images/awaykit2.JPG")
    document.getElementById("col2").appendChild(y)
}

