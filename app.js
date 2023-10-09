let btn1 = document.querySelector("#pBtn1");
let btn2 = document.querySelector("#pBtn2");
let startBtn = document.querySelector("#gameOn");
let sDisplay = document.querySelector(".display-wrapper");
let showNum = document.querySelector("#show-num");
let showRandom = document.querySelector("#show-random-num");
let storeValue = 0;
let p1Count = 0;
let p2Count = 0;
let btn1Count = 0;
let btn2Count = 0;
function randomNum(){
    let random = Math.floor(Math.random() * 40) + 1; 
    return random;
} 
let random = randomNum();
showRandom.innerHTML = random;
btn1.addEventListener("click",(e)=>{
    p2Count = 0;
    btn2Count = 0;
    p1Count = 1;
    btn1Count++;
    console.log(p1Count);
    storeValue += p1Count;
    showNum.innerHTML = storeValue;
    if (btn1Count > 2) {
        alert("You cant CLick more than 3 times \n Now Player 2 turn");
    }
    if(storeValue === random){
        console.log("Congrats Player 1 Won!!!!!!!");
    }
}); 
btn2.addEventListener("click",(e)=>{
    p1Count = 0;
    btn1Count = 0;
    p2Count = 1;
    btn2Count++;
    console.log(p2Count);
    storeValue += p2Count;
    showNum.innerHTML = storeValue;
    if(btn2Count > 2) {
        alert("You cant Click more than 3 times \n Now Player 1 turn");
    }
    if(storeValue === random){
        console.log("Congrats Player 2 Won!!!!!!!");
    }
});

startBtn.addEventListener("click",(e)=>{
    // let styleArr = ["translateY(-1000px)","translateX(-1000px)","scale(0)","translateX(1000px)"];
    // styleArr.forEach((style)=>{
    //     sDisplay.style.transform = `Math.random() * ${style}`;
    // })
    sDisplay.style.transform = "translateY(-1000px)";
    sDisplay.style.opacity = 0;
    sDisplay.style.transitionDuration = "1s";
})
