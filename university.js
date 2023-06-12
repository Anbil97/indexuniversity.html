function getUniversities() {
    fetch("https://universities.hipolabs.com/search")
      .then(response => response.json())
      .then(data => {
        displayUniversities(data);
      })
      .catch(error => {
        console.error("Error retrieving universities:", error);
      });
  }
  
  function displayUniversities(universities) {
    const universityListContainer = document.getElementById("university-list");
    universityListContainer.innerHTML = "";
  
    universities.forEach(university => {
      const universityCard = createUniversityCard(university);
      universityListContainer.appendChild(universityCard);
    });
  }
  
  function createUniversityCard(university) {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const name = document.createElement("h5");
    name.classList.add("card-title");
    name.textContent = university.name;
  
    const country = document.createElement("p");
    country.classList.add("card-text");
    country.textContent = `Country: ${university.country}`;
  
    const domain = document.createElement("p");
    domain.classList.add("card-text");
    domain.textContent = `Domain: ${university.domains.join(", ")}`;
  
    cardBody.appendChild(name);
    cardBody.appendChild(country);
    cardBody.appendChild(domain);
    card.appendChild(cardBody);
  
    return card;
  }
  