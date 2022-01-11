var promo = ("Ahmad", "Jian", "Michael", "Dante", "Muhammet", "Nicolas", "Jordy", "Beryl", "Cynthia", "Ruben", "Magali", "Jawid", 
"Koen", "Kevin", "Benjamin", "Dery", "Michelle", "Colin", "Feruz", "Pieter", "Ellen", "Sara");

document.body.onload = addElement;

const newP = document.createElement("section");

const newContent = document.createTextNode(promo);

newP.appendChild(newContent);

const currentP = document