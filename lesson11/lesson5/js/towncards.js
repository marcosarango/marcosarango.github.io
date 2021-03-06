fetch('https://byui-cit230.github.io/weather/data/towndata.json')
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    // console.table(jsonObject);   temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    const townname = towns.filter((town) => town.name === 'Preston' || town.name === 'Soda Springs' || town.name === 'Fish Haven');
    townname.forEach((town) => {
      let section = document.createElement('section');
      let h2 = document.createElement('h2');
      let motto = document.createElement('p');
      let yrfounded = document.createElement('p');
      let population = document.createElement('p');
      let annualrainfall = document.createElement('p');
      let image = document.createElement('img');
      let div = document.createElement('div');

      h2.textContent = `${town.name}`;
      motto.textContent = `${town.motto}`;
      yrfounded.textContent = `Year Founded: ${town.yearFounded}`;
      population.textContent = `Population: ${town.currentPopulation}`;
      annualrainfall.textContent = `Annual Rain Fall: ${town.averageRainfall}`;
      image.textContent = `imagen: ${town.photo}`;

      if (town.name === 'Preston') {
        image.setAttribute('src', "/lesson5/images/florian.jpeg");
        image.setAttribute('alt', "");
      } else if (town.name === 'Soda Springs') {
        image.setAttribute('src', "/lesson5/images/sajad.jpeg");
        image.setAttribute('alt', "");
      } else {
        image.setAttribute('src', "/lesson5/images/zoltan.jpeg");
        image.setAttribute('alt', "");
      }

      div.appendChild(h2);
      div.appendChild(motto);
      div.appendChild(yrfounded);
      div.appendChild(population);
      div.appendChild(annualrainfall);
      section.appendChild(div);
      section.appendChild(image);

      document.querySelector('div.sections').appendChild(section);
    });
  });
