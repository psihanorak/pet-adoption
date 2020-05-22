const pets = [
  {
    image: "images/appaloosa.png",
    name: "Speckles",
    color: "black with white spots",
    specialSkill: "speed",
    type: "horse"    
  },
  {
    image: "images/arabian.png",
    name: "Ebony",
    color: "black",
    specialSkill: "speed",
    type: "horse"
  },
  {
    image: "images/belgian.png",
    name: "Felix",
    color: "roan",
    specialSkill: "work",
    type: "horse"
  },
  {
    image: "images/cheetah.png",
    name: "Foxy",
    color: "tan with black spots",
    specialSkill: "speed",
    type: "cat"
  },
  {
    image: "images/clydesdale.png",
    name: "Donna",
    color: "black and white",
    specialSkill: "work",
    type: "horse"
  },
  {
    image: "images/german_shepard.png",
    name: "Hershey",
    color: "black and tan",
    specialSkill: "guard",
    type: "dog"
  },
  {
    image: "images/husky.png",
    name: "Bono",
    color: "black and white",
    specialSkill: "work",
    type: "dog"
  },
  {
    image: "images/jaguar.png",
    name: "Cleopatra",
    color: "yellow-brown with black spots",
    specialSkill: "climber",
    type: "cat"
  },
  {
    image: "images/labrador.png",
    name: "Charlie",
    color: "yellow",
    specialSkill: "swimmer",
    type: "dog"
  },
  {
    image: "images/leopard.png",
    name: "Felix",
    color: "orange-brown with black spots",
    specialSkill: "climber",
    type: "cat"
  },
  {
    image: "images/lion.png",
    name: "Romeo",
    color: "yellow-gold.",
    specialSkill: "king",
    type: "cat"
  },
  {
    image: "images/palomino.png",
    name: "Roxie",
    color: "gold",
    specialSkill: "finesse",
    type: "horse"
  },
  {
    image: "images/panther.png",
    name: "ZsaZsa",
    color: "black",
    specialSkill: "stealth",
    type: "cat"
  },
  {
    image: "images/pitbull.png",
    name: "Tank",
    color: "gray",
    specialSkill: "guard",
    type: "dog"
  },
  {
    image: "images/pug.png",
    name: "Spark",
    color: "fawn",
    specialSkill: "affectionate",
    type: "dog"
  },
  {
    image: "images/retriever.png",
    name: "Mia",
    color: "Gold-Brown.",
    specialSkill: "versatile",
    type: "dog"
  },
  {
    image: "images/thoroughbred.png",
    name: "Mercedes",
    color: "bay",
    specialSkill: "speed",
    type: "horse"
  },
  {
    image: "images/tiger.png",
    name: "Mika",
    color: "orange with brown stripes",
    specialSkill: "stalker",
    type: "cat"
  }
];

// add event listeners to buttons
const allButton = document.getElementById("all");
const catButton = document.getElementById("cat");
const dogButton = document.getElementById("dog");
const horseButton = document.getElementById("horse");

const filterPets = (petType) => {
  filteredPets = [];

  pets.forEach(pet => {
    if (pet.type === petType) {
      filteredPets.push(pet)
    }
  })

  buildPets(filteredPets)
}

allButton.addEventListener("click", function() {
  buildPets(pets)
})

catButton.addEventListener("click", function() {
  filterPets("cat")
})

dogButton.addEventListener("click", function() {
  filterPets("dog")
})

horseButton.addEventListener("click", function() {
  filterPets("horse")
})

// build card for each pet
const buildPet = (image, name, color, specialSkill, type) => {
  let domString = ""

  domString += `<div class="pet-cards">
                      <img src="${image}"></img>
                      <h3><center>${name}</center></h3>
                      <br>
                      <p><b>Color:</b> ${color}</p>
                      <br>
                      <p><b>Special Skill:</b> ${specialSkill}</p>
                      <br>
                      <div class="pet-footer ${type}">
                        <footer><center>${type}</center></footer>
                      </div>
                    </div>`;
  return domString;
}

const printToDom = (selector, domString) => {
  const selectedDiv = document.querySelector(selector)
  selectedDiv.innerHTML = domString;
}

// build DOM string loop for pet cards
const buildPets = (petArr) => {
  let cardDomString = "";

  for (let i = 0; i < petArr.length; i++) {
    pet = petArr[i];

    image = pet.image;
    name = pet.name;
    color = pet.color;
    specialSkill = pet.specialSkill;
    type = pet.type;

    cardDomString += buildPet(image, name, color, specialSkill, type);
  }
  printToDom("#petCards", cardDomString)
}

const init = () => {
  buildPet(pets);
}

init();
