// script.js - Northern Paws Rescue
// Class Activity 5: you will write this file, step by step.
const petItems = document.querySelectorAll(".pet-list li");
const petCount = document.querySelector("#pet-count");

petCount.textContent =
  "Showing " + petItems.length + " of " + petItems.length + " pets";
