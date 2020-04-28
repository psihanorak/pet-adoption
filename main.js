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

//function that domString loops objects in an array
const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildPets = (petsArr) => {
  let domString = '';

  for (let i = 0; i < petsArr.length; i++) {
    domString += `<div class="pet-cards">
                    <img src="${petsArr[i].image}"></img>
                    <h3><center>${petsArr[i].name}</center></h3>
                    <br>
                    <p><b>Color:</b> ${petsArr[i].color}</p>
                    <br>
                    <p><b>Special Skill:</b> ${petsArr[i].specialSkill}</p>
                    <br>
                    <div class="pet-type">
                      <p><center>${petsArr[i].type}</center></p>
                    </div>
                  </div>`;
  }

  printToDom('#petCards', domString);
}

const filterPetsEvent = (event) => {
  const buttonId = event.target.id;
  const tempPetCollection = [];

  if (buttonId === 'all') {
    buildPets(pets);
    return;
  }

  for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === buttonId) {
      tempPetCollection.push(pets[i]);
    }
  }

  buildPets(tempPetCollection);
}

const clickEvents = () => {
  document.querySelector('#cat').addEventListener('click', filterPetsEvent);
  document.querySelector('#dog').addEventListener('click', filterPetsEvent);
  document.querySelector('#horse').addEventListener('click', filterPetsEvent);
  document.querySelector('#all').addEventListener('click', filterPetsEvent);
}

const init = () => {
  buildPets(pets);
  clickEvents();
}

init();
