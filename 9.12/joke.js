function get_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
         let joke = JSON.parse(this.response);
	     // Access the result here
	     document.getElementById("joke").innerHTML = joke.contents.jokes[0].joke.text
         document.getElementById("copyright").innerHTML = "&copy;" + joke.contents.copyright;
	 }
    };
    xhttp.open("GET", "https://api.jokes.one/jod?category=blonde", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

get_joke_of_the_day()

console.log(http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=XML&APPID=ff64c247a136f706923d1ee0d55d71e2)