const myURL = 'https://marcosarango.github.io/project/rental.json';

fetch(myURL)
  .then((response) => response.json())
  .then((prices) => {
    console.log(prices);


    //Fill in html with vehicle name 
    document.getElementById('name-metro').textContent = prices.vehicles[0].name;
    document.getElementById('name-dio').textContent = prices.vehicles[1].name;
    document.getElementById('name-pcx').textContent = prices.vehicles[2].name;
    document.getElementById('name-pioneer').textContent = prices.vehicles[3].name;
    document.getElementById('name-jeep-wrangler').textContent = prices.vehicles[4].name;
    document.getElementById('name-jeep2').textContent = prices.vehicles[5].name;

    //Fill in html with number of persons allowed 
    document.getElementById('max-pers-metro').textContent = prices.vehicles[0].max_persons;
    document.getElementById('max-person-dio').textContent = prices.vehicles[1].max_persons;
    document.getElementById('max-person-pcx').textContent = prices.vehicles[2].max_persons;
    document.getElementById('max-person-pionner').textContent = prices.vehicles[3].max_persons;
    document.getElementById('max-person-jeep-wrangler').textContent = prices.vehicles[4].max_persons;
    document.getElementById('max-person-jeep2').textContent = prices.vehicles[5].max_persons;

    //Fill in html with price for reserved half day
    document.getElementById('reservation-metro-half').textContent = prices.vehicles[0].res_half;
    document.getElementById('reservation-dio-half').textContent = prices.vehicles[1].res_half;
    document.getElementById('reservation-pcx-half').textContent = prices.vehicles[2].res_half;
    document.getElementById('reservation-pionner-half').textContent = prices.vehicles[3].res_half;
    document.getElementById('reservation-jeepWragler-half').textContent = prices.vehicles[4].res_half;
    document.getElementById('reservation-jeep2-half').textContent = prices.vehicles[5].res_half;

    //Fill in html with price for reserved full day
    document.getElementById('reservation-metro-full').textContent = prices.vehicles[0].res_full;
    document.getElementById('reservation-dio-full').textContent = prices.vehicles[1].res_full;
    document.getElementById('reservation-pcx-full').textContent = prices.vehicles[2].res_full;
    document.getElementById('reservation-pionner-full').textContent = prices.vehicles[3].res_full;
    document.getElementById('reservation-jeepWrangler-full').textContent = prices.vehicles[4].res_full;
    document.getElementById('reservation-jeep2-full').textContent = prices.vehicles[5].res_full;

    //Fill in html with price for walk ins half day
    document.getElementById('ins-metro-half').textContent = prices.vehicles[0].in_half;
    document.getElementById('ins-dio-half').textContent = prices.vehicles[1].in_half;
    document.getElementById('ins-pcx-half').textContent = prices.vehicles[2].in_half;
    document.getElementById('ins-pionner-half').textContent = prices.vehicles[3].in_half;
    document.getElementById('ins-jeepWrangler-half').textContent = prices.vehicles[4].in_half;
    document.getElementById('ins-jeep2-half').textContent = prices.vehicles[5].in_half;

    //Fill in html with price for walk ins full day
    document.getElementById('ins-metro-full').textContent = prices.vehicles[0].in_full;
    document.getElementById('ins-dio-full').textContent = prices.vehicles[1].in_full;
    document.getElementById('ins-pcx-full').textContent = prices.vehicles[2].in_full;
    document.getElementById('ins-pionner-full').textContent = prices.vehicles[3].in_full;
    document.getElementById('ins-jeepWrangler-full').textContent = prices.vehicles[4].in_full;
    document.getElementById('ins-jeep2-full').textContent = prices.vehicles[5].in_full;

  });