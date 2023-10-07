let btn1 = document.querySelector("#pBtn1");
let btn2 = document.querySelector("#pBtn2");
let storeValue = 0;
let p1Count = 0;
let p2Count = 0;
let btn1Count = 0;
let btn2Count = 0;
btn1.addEventListener("click",(e)=>{
    p2Count = 0;
    btn2Count = 0;
    p1Count = 1;
    btn1Count++;
    console.log(p1Count);
    storeValue += p1Count;
    // console.log(storeValue);
    if (btn1Count > 2) {
        alert("You cant CLick more than 3 times \n Now Player 2 turn");
    }
})
btn2.addEventListener("click",(e)=>{
    p1Count = 0;
    btn1Count = 0;
    p2Count = 1;
    btn2Count++;
    console.log(p2Count);
    storeValue += p2Count;
    // console.log(storeValue);
    if(btn2Count > 2) {
        alert("You cant CLick more than 3 times \n Now Player 1 turn");
    }
})
