const cityName = document.getElementById('city');
const countrySlug = document.getElementsByClassName('country');
const cityCloudy= document.getElementById('cloudy');
const cityTemp = document.getElementById('temp');
const ImgBox = document.getElementById('icon')
const searchBtn = document.getElementById('search_btn');
const cityInput = document.getElementsByClassName('search_input')
const precipitation = document.getElementById('degPer');
const humidity = document.getElementById('degHum');
const wind = document.getElementById('degKm');



let res;

searchBtn.addEventListener('click', function(){
    res = cityInput[0].value;
    getWeather()
    
})


const getWeather = async() =>{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${res}&appid=5756d9474f0081f3534e201d7d0020bd`);
        const data = await response.json();
        console.log(data.weather[0].main)
        cityName.innerText = data.name;
        countrySlug[0].innerText = data.sys.country
        cityTemp.innerText =  data.wind.deg
        cityCloudy.innerText = data.weather[0].main;

        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        
        ImgBox.src = iconUrl;
        console.log(ImgBox);
       
        precipitation.innerText = data.main.pressure
        humidity.innerText = data.main.humidity
        wind.innerText = data.wind.speed
       

        
          
        
    
}







// const fetchProducts = async () => {
//     // 1. Get the container from the HTML

//     const res = await fetch('https://fakestoreapi.com/products');
//     const data = await res.json();
//     for (let i = 0; i < data.length; i++) {
//         productsContainer.innerHTML += `
//             <div class="product-card">
//                 <div class="card-col">
//                  <img src="${data[i].image}" alt="${data[i].title}">
//                  <h3>${data[i].title}</h3>
//                  <p>$${data[i].price}</p>
//                 </div>  
//             </div>
//         `;
//     }

// };

// fetchProducts();