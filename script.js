document.addEventListener('DOMContentLoaded', function() {
    const planets = document.querySelectorAll('.planet');
    const factDisplay = document.getElementById('fact-display');
    const closeButton = document.getElementById('close-button');
  
    planets.forEach(planet => {
      planet.addEventListener('click', function() {
        const planetName = planet.classList[1]; 
        const facts = getPlanetFacts(planetName); 
  
        const factContent = document.getElementById('fact-content');
        factContent.innerHTML = `
          <h2>${planetName}</h2>
          <p>${facts}</p>
        `;
  
        factDisplay.style.display = 'block';
      });
    });
  
    closeButton.addEventListener('click', function() {
      const factContent = document.getElementById('fact-content');
      factContent.innerHTML = ''; 
      factDisplay.style.display = 'none';
    });
  });
  
  function getPlanetFacts(planetName) {
    return 'Interesting facts about ' + planetName;
  }
  