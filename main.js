const pets = [
  {
    image: "images/appaloosa.png",
    name: "Speckles",
    color: "black with white spots",
    specialSkill: "speed",
    typeOfPet: "Horse"    
  },
  {
    image: "images/arabian.png",
    name: "Ebony",
    color: "black",
    specialSkill: "speed",
    typeOfPet: "Horse"
  },
  {
    image: "images/belgian.png",
    name: "Felix",
    color: "roan",
    specialSkill: "work",
    typeOfPet: "Horse"
  },
  {
    image: "images/cheetah.png",
    name: "Foxy",
    color: "tan with black spots",
    specialSkill: "speed",
    typeOfPet: "Big Cat"
  },
  {
    image: "images/clydesdale.png",
    name: "Donna",
    color: "black and white",
    specialSkill: "work",
    typeOfPet: "Horse"
  },
  {
    image: "images/german_shepard.png",
    name: "Hershey",
    color: "black and tan",
    specialSkill: "guard",
    typeOfPet: "Dog"
  },
  {
    image: "images/husky.png",
    name: "Bono",
    color: "black and white",
    specialSkill: "work",
    typeOfPet: "Dog"
  },
  {
    image: "images/jaguar.png",
    name: "Cleopatra",
    color: "yellow-brown with black spots",
    specialSkill: "climber",
    typeOfPet: "Cat"
  },
  {
    image: "images/labrador.png",
    name: "Charlie",
    color: "yellow",
    specialSkill: "swimmer",
    typeOfPet: "Dog"
  },
  {
    image: "images/leopard.png",
    name: "Felix",
    color: "orange-brown with black spots",
    specialSkill: "climber",
    typeOfPet: "Big Cat"
  },
  {
    image: "images/lion.png",
    name: "Romeo",
    color: "yellow-gold.",
    specialSkill: "king",
    typeOfPet: "Big Cat"
  },
  {
    image: "images/palomino.png",
    name: "Roxie",
    color: "gold",
    specialSkill: "finesse",
    typeOfPet: "Horse"
  },
  {
    image: "images/panther.png",
    name: "ZsaZsa",
    color: "black",
    specialSkill: "stealth",
    typeOfPet: "Big Cat"
  },
  {
    image: "images/pitbull.png",
    name: "Tank",
    color: "gray",
    specialSkill: "guard",
    typeOfPet: "Dog"
  },
  {
    image: "images/pug.png",
    name: "Spark",
    color: "fawn",
    specialSkill: "affectionate",
    typeOfPet: "Dog"
  },
  {
    image: "images/retriever.png",
    name: "Mia",
    color: "Gold-Brown.",
    specialSkill: "versatile",
    typeOfPet: "Dog"
  },
  {
    image: "images/thoroughbred.png",
    name: "Mercedes",
    color: "bay",
    specialSkill: "speed",
    typeOfPet: "Horse"
  },
  {
    image: "images/tiger.png",
    name: "Mika",
    color: "orange with brown stripes",
    specialSkill: "stalker",
    typeOfPet: "Big Cat"
  }
];

//function that domString loops objects in an array
const buildPets = () => {
  let domString = '';

  for (let i = 0; i < pets.length; i++) {
    domString += `<div class="pet-cards">`;
    domString += `<img src="${pets[i].image}"></img>`;
    domString += `<h3><center>${pets[i].name}</center></h3>`;
    domString += `<br>`;
    domString += `<p><b>Color:</b> ${pets[i].color}</p>`;
    domString += `<br>`;
    domString += `<p><b>Special Skill:</b> ${pets[i].specialSkill}</p>`;
    domString += `<br>`;
    domString += `<p><center>${pets[i].typeOfPet}</center></p>`;
    domString += `</div>`;
  }

  const selectedDiv = document.querySelector(`#petCards`);
  selectedDiv.innerHTML = domString;
}

const init = () => {
  buildPets();
}

init();
