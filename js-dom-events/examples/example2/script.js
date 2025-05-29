// console.log(1);
const parentParagraph = document.getElementById("parentParagraph");
const newParagraph = document.createElement("p");
// console.log(newParagraph);
newParagraph.innerText = "Hello Bim";
parentParagraph.append(newParagraph);
newParagraph.setAttribute("id", "Chit");
const removeElement = document.getElementById("remove");
removeElement.remove();
