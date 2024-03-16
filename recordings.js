// Dynamic Field Creation with Javascript

const addBtn = document.querySelector(".add");

const input = document.querySelector(".inp-group");

let clickCount = 0;

function removeInput(){
    this.parentElement.remove();
   
    
   
}

function appendElements(){

 

    const diagnosis = document.createElement("input");
    diagnosis.type="text";
    diagnosis.placeholder = "Enter a diagnosis";

    const btn=document.createElement("button");
    btn.className = "delete";
    btn.innerHTML = "&times";
    

    btn.addEventListener("click", removeInput);

    const flex=document.createElement("div");
    flex.className = "flex";

        input.appendChild(flex);
        flex.appendChild(diagnosis);
        flex.appendChild(btn);
       
}

// Function to handle button click
function addInput() {
    if (clickCount < 2) {
        appendElements();
        clickCount++;
    }
   
    
    if (clickCount === 2) {
        // Disable the button after it's clicked three times
        addBtn.disabled = true;
    }

    
}

    addBtn.addEventListener("click", addInput);




const addBtn1 = document.querySelector(".add1");

const input1 = document.querySelector(".inp-group1");
 let clickCount1 = 0;

function removeInput1(){
    this.parentElement.remove();
}

function appendElements1(){

    const diagnosis = document.createElement("input");
    diagnosis.type="text";
    diagnosis.placeholder = "Enter a diagnosis";

    const btn1=document.createElement("button");
    btn1.className = "delete";
    btn1.innerHTML = "&times";
   

    btn1.addEventListener("click", removeInput1);

    const flex1=document.createElement("div");
    flex1.className = "flex";

    input1.appendChild(flex1);
    flex1.appendChild(diagnosis);
    flex1.appendChild(btn1);
   
}
// Function to handle button click
function addInput1() {
    if (clickCount1 < 2) {
        appendElements1();
        clickCount1++;
    }
    if (clickCount1 === 2) {
        // Disable the button after it's clicked three times
        addBtn1.disabled = true;
    }
}
addBtn1.addEventListener("click", addInput1);






const addBtn2 = document.querySelector(".add2");

const input2 = document.querySelector(".inp-group2");
 let clickCount2 = 0;

function removeInput2(){
    this.parentElement.remove();
}

function appendElements2(){

    const diagnosis = document.createElement("input");
    diagnosis.type="text";
    diagnosis.placeholder = "Enter a diagnosis";

    const btn2=document.createElement("button");
    btn2.className = "delete";
    btn2.innerHTML = "&times";

    btn2.addEventListener("click", removeInput2);

    const flex2=document.createElement("div");
    flex2.className = "flex";

    input2.appendChild(flex2);
    flex2.appendChild(diagnosis);
    flex2.appendChild(btn2);
   
}
// Function to handle button click
function addInput2() {
    if (clickCount2 < 2) {
        appendElements2();
        clickCount2++;
    }
    if (clickCount2 === 2) {
        // Disable the button after it's clicked three times
        addBtn2.disabled = true;
    }
}
addBtn2.addEventListener("click", addInput2);