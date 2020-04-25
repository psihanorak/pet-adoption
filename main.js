var button = 
  document.createElement ("button");
  button.innerHTML = "Big Cats";


const pets = [
  {
    imageUrl: "appaloosa.png",
    name: "Appaloosa",
    color: "Base color with several pattern variations.",
    specialSkill: "Horse racing.",
    typeOfPet: "Horse"    
  },
  {
    image: "arabian.png",
    name: "Arabian",
    color: "Chestnut",
    specialSkill: "Gentle disposition.",
    typeOfPet: "Horse"
  },
  {
    image: "belgian.png",
    name: "Belgian",
    color: "Roan",
    specialSkill: "Plowing fields.",
    typeOfPet: "Horse"
  },
  {
    image: "cheetah.png",
    name: "Cheetah",
    color: "Tan with black-colored spots",
    specialSkill: "Fastest land animal.",
    typeOfPet: "Big Cat"
  },
  {
    image: "clydesdale.png",
    name: "Clydesdale",
    color: "Bay with white socks.",
    specialSkill: "Hauling for agriculture.",
    typeOfPet: "Horse"
  },
  {
    image: "german_shepard.png",
    name: "German Shepard",
    color: "Black and tan.",
    specialSkill: "Police/Military.",
    typeOfPet: "Dog"
  },
  {
    image: "husky.png",
    name: "Siberian Husky",
    color: "Black and white.",
    specialSkill: "Sled pulling.",
    typeOfPet: "Dog"
  },
  {
    image: "jaguar.png",
    name: "Jaguar",
    color: "Yellow-brownish with black spots.",
    specialSkill: "Swimmers.",
    typeOfPet: "Cat"
  },
  {
    image: "labrador.png",
    name: "Labrador",
    color: "Chocolate, black, or yellow.",
    specialSkill: "Excellent swimmers.",
    typeOfPet: "Dog"
  },
  {
    image: "leopard.png",
    name: "Leopard",
    color: "Orange-brown with solid black spots.",
    specialSkill: "Climb trees.",
    typeOfPet: "Big Cat"
  },
  {
    image: "lion.png",
    name: "Lion",
    color: "Yellow-gold.",
    specialSkill: "Guarding territory.",
    typeOfPet: "Big Cat"
  },
  {
    image: "palomino.png",
    name: "Palomino",
    color: "Gold with white mane.",
    specialSkill: "Multi-purpose.",
    typeOfPet: "Horse"
  },
  {
    image: "panther.png",
    name: "Panther",
    color: "Black.",
    specialSkill: "Climb trees and pouncing.",
    typeOfPet: "Big Cat"
  },
  {
    image: "pitbull.png",
    name: "Pitbull",
    color: "Base color with white accent markings.",
    specialSkill: "Police/Rescue.",
    typeOfPet: "Dog"
  },
  {
    image: "pug.png",
    name: "Pug",
    color: "Fawn.",
    specialSkill: "Affectionate.",
    typeOfPet: "Dog"
  },
  {
    image: "retriever.png",
    name: "Retriever",
    color: "Golden-Brown.",
    specialSkill: "Versatile to train.",
    typeOfPet: "Dog"
  },
  {
    image: "thoroughbred.png",
    name: "Thoroughbred",
    color: "Bay",
    specialSkill: "Agility and speed.",
    typeOfPet: "Horse"
  },
  {
    image: "tiger.png",
    name: "Siberian Tiger",
    color: "Orange with brown stripes",
    specialSkill: "Stalk prey.",
    typeOfPet: "Big Cat"
  }
];

const buildPets = () => {
  let domString = '';

  for (let i = 0; i < pets.length; i++) {
    domString += `<div class="pet-cards">`;
    domString += `<h3><center>${pets[i].name}</center></h3>`;
    domString += `<p><b>Color:</b> ${pets[i].color}</p>`;
    domString += `<p><b>Special Skill:</b> ${pets[i].specialSkill}</p>`;
    domString += `<p><center>${pets[i].typeOfPet}</center></p>`;
    domString += `</div>`;
  }

  const selectedDiv = document.querySelector('#petCards');
  selectedDiv.innerHTML = domString;
}

const init = () => {
  buildPets();
}

init();
