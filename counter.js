let buttons = document.querySelectorAll(".choice");
let para = document.querySelector("#second");
let counter = 0;


const Increase = () => {
    counter++;
    console.log("Counter value",counter);
    para.textContent = counter;
    para.style.color = "green";
}

const Decrease= () => {
    counter--;
    console.log("Counter value",counter);
    para.textContent = counter;
    para.style.color = "red";
}
const Reset = () => {
    counter = 0;
    console.log("Counter value",counter);
    para.textContent = counter;
    para.style.color = "black";
}

const play = (userc) => {
    if(userc === "Increase"){
        Increase();
    }
    else if (userc === "Decrease") {
        Decrease();
    }
    else{
        Reset();
    }

}

buttons.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userc = choice.getAttribute("id");
        console.log(userc);
        play(userc);  
    })

});