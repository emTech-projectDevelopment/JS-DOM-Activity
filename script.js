//Your code goes here

// 1. Click the button to display your name
//Selectors

//Function
const button = document.querySelector("#btnName");
const inputValue = document.querySelector("#myName");

button.addEventListener("click", () => {
  inputValue.setAttribute("value", "Shahan");
});
//Call the event

//2. Switch lights on mouseover
//Selectors

function changeImage() {
  let light = document.getElementById("imageOff");
  light.src.match("lightoff")
    ? (light.src = "images/lighton.png")
    : (light.src = "images/lightoff.png");
}

//Call the event
/*-----------------------*/

//3. Double click to display content
//Selectors
/*Function {
  //some code here
  //create a new img element
}*/
let btn = document.querySelector("#btndbName");
btn.addEventListener("dblclick", () => {
  const parra = document.querySelector("#displayPara");
  let image = document.createElement("img");
  image.setAttribute("src", "images/smileyface.png");
  parra.appendChild(image);
});

// 4. Traffic Lights
//Selectors

//Function 1
//Function 2
//Function 3

//Call the events

let btn1 = document.getElementById("btnStop");
let btn2 = document.getElementById("btnReady");
let btn3 = document.getElementById("btnGo");
let stop = document.getElementById("stopDiv");
let ready = document.getElementById("readyDiv");
let go = document.getElementById("goDiv");

btn1.addEventListener("click", () => {
  stop.style.backgroundColor = "red";
  ready.style.backgroundColor = "black";
  go.style.backgroundColor = "black";
});
btn2.addEventListener("click", () => {
  stop.style.backgroundColor = "black";
  ready.style.backgroundColor = "orange";
  go.style.backgroundColor = "black";
});
btn3.addEventListener("click", () => {
  stop.style.backgroundColor = "black";
  ready.style.backgroundColor = "black";
  go.style.backgroundColor = "green";
});

//5. Change textbox border colours
//Selectors

//Function

//Call the event
let btn2Name = document.getElementById("btn2Name");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

btn2Name.addEventListener("click", () => {
  firstName.style.borderColor = "red";
  lastName.style.borderColor = "blue";
});

//6. validate the box [length should be more than 5 characters]
//Selectors

/*Function {
  //if statement
}*/

//Call the event
const butSub2 = document.getElementById("btnSub2");
butSub2.addEventListener("click", () => {
  const myName2 = document.getElementById("myName2");
  const errMsg = document.getElementById("errMsg");
  if (myName2.value.trim() === "" || myName2.value.length < 8) {
    errMsg.textContent = "* Please fill min 8 Character";
    errMsg.style.color = "red";
  } else {
    errMsg.textContent = "Form has been submitted";
    errMsg.style.color = "green";
    myName2.value = " ";
  }
});
// 7.create a list of hobbies
//Selectors

/*Function {
  //for loop
}*/
const btnHobbies = document.getElementById("btnHobbies");
btnHobbies.addEventListener("click", () => {
  let hobbyOutput = document.querySelector("#hobbies ul");
  
  for (let i = 0;  i < 3; i++) {
    let hobbies = prompt("What is Your Hobbies?", "");
    const li = document.createElement('li');
  li.textContent = hobbies;
  console.log(li);
  hobbyOutput.appendChild(li)
  }
  /*while(true){
    let hobbies = prompt("What is Your Hobbies?", "");
    if (!hobbies) {
      break;
    }
        const li = document.createElement('li');
        li.textContent = hobbies;
        console.log(li);
        hobbyOutput.appendChild(li)
  }*/
});

//Call the event

// 8. Display a profile card from an object
//Object
const btnProfile = document.getElementById("btnProfile");
btnProfile.addEventListener("click", () => {
  const displayCard = document.getElementById("displayCard");
  const myProfile = {
    Name: "Aroush",
    Age: 7,
    School: "Kimore Primary",
    FavouriteSubject: "Arts",
    City: "Melbourne",
  };
  const cardParra = document.createElement("p");
  cardParra.innerHTML = `Name : ${myProfile.Name}</br>
     Age : ${myProfile.Age} Years</br>
     School : ${myProfile.School}</br>
     Favourite Subject : ${myProfile.FavouriteSubject}</br>
     City : ${myProfile.City}</br>
     `;
  displayCard.style.backgroundColor = "beige";
  displayCard.appendChild(cardParra);
});

console.log("--------------------------------");
///recursion 1//
let oddEven = (num) => {
  // base case tell function when to stop
  if (num === 0) {
    return "Even";
  } else if (num === 1) {
    return "Odd";
  } else {
    //recursion happen here
    return oddEven(num - 2);
  }
};
console.log(oddEven(7));
console.log(oddEven(9));
console.log(oddEven(8));
console.log(oddEven(11));

console.log("--------------------------------");
///recursion 2//

const multiply = (num) => {
  //base case
  if (num === 0) {
    return 1;
    //if number is positive
  } else {
    return num * multiply(num - 1);
  }
  //
};

let result = multiply(6);
console.log(`The big num of 3 is ${result}`);

console.log("--------------------------------");
////...rest operator
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];
for (const prod of produce) {
  console.log(prod);
}
