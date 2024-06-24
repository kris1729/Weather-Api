const tempField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emogiFiled = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".SearchField");
const form = document.querySelector("form");

const city = "London";




fetchData = async (city) => {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=891cb471cc114860b7b140433241906&q=${city}`;
    const responce = await fetch(url);
    const data = await responce.json();
    // console.log(data);

    // take data

    const {

        current: { temp_c, condition: { text, icon }
        },
        location: { name, localtime },
    } = data;

 

    domUpdate(temp_c, name, localtime, icon, text);
    } catch (error) {
       alert("Location is not Found") ;
    }


}

fetchData(city);
function domUpdate(temp_c, name, localtime, icon, text) {
    tempField.textContent = `${Math.floor(temp_c)}°C`;
    cityField.textContent = name;
    const day = new Date(localtime.split(" ")[0]).getDay();
    const dayInString = getDateValue(day);
    
    dateField.textContent = `${localtime.split(" ")[1]}  ${dayInString}  ${localtime.split(" ")[0]}`;
    emogiFiled.src = icon;
    weatherField.textContent = text;


}



form.addEventListener("submit", (e)=>{
    e.preventDefault();
  const city1 = searchField.value;
  
  fetchData(city1);
  
});



function getDateValue(val) {
    switch (val) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        default:
            return "Saturday"

    }
}


