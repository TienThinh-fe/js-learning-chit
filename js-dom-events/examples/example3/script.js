const button = document.getElementById("myButton");
// button.addEventListener("click", function () {
//   //   alert("You clicked the button");
//   const newParagraph = document.createElement("p");
//   newParagraph.innerText = Date();
//   const body = document.querySelector("body");
//   body.append(newParagraph);
// });

// const handleClick = function () {
//   alert("You clicked the button");
// };

// button.addEventListener("mouseover", function () {
//   button.style.backgroundColor = "red";
// });
// button.addEventListener("mouseout", function () {
//   button.style.backgroundColor = "blue";
// });

// const input = document.getElementById("myInput");
// input.addEventListener("focus", function () {
//   //   alert("You focus me!");
// });

// // button.addEventListener("click", function () {
// //   input.focus();
// // });

// // input.addEventListener("keypress", function () {
// //   alert("You press a key input field!");
// // });

// input.addEventListener("change", function () {
//   alert("The input is changed!");
// });

// input.addEventListener("input", function () {
//   console.log("input event!");
//   console.log("value of input", input.value);
// });

button.addEventListener("click", function () {
  this.innerText = "Oops";
});
