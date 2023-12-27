async function getWeather(city) {
  var response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=58fcad097bc144f2991194325232612&q=${city}&days=3`
  );

  if (response.ok === true && response.status === 200) {
    var data = await response.json();

    displayWeather(data);

    // console.log("day1");
    // console.log(data.forecast.forecastday[0].date);
    // console.log(data.location.name);
    // console.log(data.current.temp_c);
    // console.log(data.current.condition.icon);
    // console.log(data.current.condition.text);
    // console.log(data.current.feelslike_c);
    // console.log(data.current.wind_kph);
    // console.log(data.current.wind_dir);

    // console.log("day2");
    // console.log(data.forecast.forecastday[1].date);
    // console.log(data.forecast.forecastday[1].day.condition.icon);
    // console.log(data.forecast.forecastday[1].day.maxtemp_c);
    // console.log(data.forecast.forecastday[1].day.mintemp_c);
    // console.log(data.forecast.forecastday[1].day.condition.text);

    // console.log("day3");
    // console.log(data.forecast.forecastday[2].date);
    // console.log(data.forecast.forecastday[2].day.condition.icon);
    // console.log(data.forecast.forecastday[2].day.maxtemp_c);
    // console.log(data.forecast.forecastday[2].day.mintemp_c);
    // console.log(data.forecast.forecastday[2].day.condition.text);
  }
}

var data = [];

function displayWeather(data) {
  var day1 = data.forecast.forecastday[0].date;
  var dateText1 = new Date(day1);
  var dayNum1 = dateText1.getDay();
  var dayOneName = days[dayNum1];

  var day2 = data.forecast.forecastday[1].date;
  var dateText2 = new Date(day2);
  var dayNum2 = dateText2.getDay();
  var dayTwoName = days[dayNum2];

  var day3 = data.forecast.forecastday[2].date;
  var dateText3 = new Date(day3);
  var dayNum3 = dateText3.getDay();
  var dayThreeName = days[dayNum3];

  // var monthNum = dayNum1.getMonth()
  // var monthName = months[monthNum]
  // var day = dateText1.getDate()

  // console.log(day + "" + monthName);



  var box = `
  <!-- |card 1 -->

  <div class="col-12 col-md-6 col-lg-4">
            <div class="inner color3 rounded-4 text-white px-0 overflow-hidden">
              <div
                class="date color2 fw-medium d-flex justify-content-center align-items-center px-4 border-bottom border-info"
              >
                <p class="my-2">${dayOneName}</p>

              </div>

              <div class="info px-4">
                <h3 class="city mt-5 fs-4">${data.location.name}</h3>
                <div
                  class="temp d-flex justify-content-between align-items-center mt-5 pe-4"
                >
                  <p class="display-1 fw-bold">${data.current.temp_c}<sup>o</sup>C</p>
                  <img src="${data.current.condition.icon}" alt="icon" class="w-25" />
                </div>
                <p class="statu mt-2 fs-6 text-info">${data.current.condition.text}</p>
              </div>

              <div class="wind px-4 mt-5 mb-3">
                <span class="me-4"
                  ><i class="fa-solid fa-umbrella me-2 text-info"></i>${data.current.feelslike_c}%</span
                >
                <span class="me-4"
                  ><i class="fa-solid fa-wind me-2 text-info"></i>${data.current.wind_kph}km/h</span
                >
                <span
                  ><i class="fa-solid fa-compass me-2 text-info"></i>${data.current.wind_dir}</span
                >
              </div>
            </div>
          </div>

          <!-- |card 2 -->

          <div class="col-12 col-md-6 col-lg-4">
            <div class="inner color4 rounded-4 text-white px-0 overflow-hidden h-100">
              <div
                class="date color5 fw-medium d-flex justify-content-center px-4 border-bottom border-info"
              >
                <p class="my-2">${dayTwoName}</p>
              </div>

              <div class="info px-4 text-center">
                <img src="${data.forecast.forecastday[1].day.condition.icon}" alt="icon" class="w-25 mt-5" />
                <p class="fs-2 fw-semibold mb-0 mt-3">${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
                <p class="fs-5 opacity-75 fw-medium">${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></p>
                <p class="statu mt-4 fs-6 text-info">${data.forecast.forecastday[1].day.condition.text}</p>
              </div>
            </div>
          </div>

          <!-- |card 3 -->

          <div class="col-12 col-md-6 col-lg-4">
            <div class="inner color3 rounded-4 text-white px-0 overflow-hidden h-100">
              <div
                class="date color2 fw-medium d-flex justify-content-center px-4 border-bottom border-info"
              >
                <p class="my-2">${dayThreeName}</p>
              </div>

              <div class="info px-4 text-center">
                <img src="${data.forecast.forecastday[2].day.condition.icon}" alt="icon" class="w-25 mt-5" />
                <p class="fs-2 fw-semibold mb-0 mt-3">${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
                <p class="fs-5 opacity-75 fw-medium">${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></p>
                <p class="statu mt-4 fs-6 text-info">${data.forecast.forecastday[2].day.condition.text}</p>
              </div>
            </div>
          </div>
  `;
  document.querySelector(".row").innerHTML = box;
}

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];



var searchInput = document.querySelector("#home .container-search input");
searchInput.addEventListener("input", function () {
  getWeather(this.value);
});

getWeather("alexandria");


var currentLocation = window.location
var url = currentLocation.href
var protocol = currentLocation.protocol
console.log(protocol);