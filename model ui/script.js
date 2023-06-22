// "use strict";
//input
const btnOne = document.getElementById("btn-one");
const btnTwo = document.getElementById("btn-two");
const btnThree = document.getElementById("btn-three");
const btnClose = document.getElementById("btn-close");
//output
const modelContainer = document.getElementById("model");


//function
const init = () => {
  modelContainer.classList.add("close")
};


const close = () => {
  modelContainer.classList.remove("close");
};
//event
//button to display
btnOne.addEventListener("click", close);
btnTwo.addEventListener("click",close );
btnThree.addEventListener("click", close);

// button for close
btnClose.addEventListener("click", init);

//keypress
document.addEventListener("keydown", (event)=> {
  // if (event.key === "Escape") 
  // {
    init()
  // }
});

//inital settings
init();
