btn=document.querySelector(".btn");
container=document.querySelector(".container");

btn.addEventListener('click',()=>{
    let input="#";
    // let input1=Math.floor(Math.random()*9);
    // let input2=Math.floor(Math.random()*9);
    // let input3=Math.floor(Math.random()*9);
    // let input4=Math.floor(Math.random()*9);
    // let input5=Math.floor(Math.random()*9);
    // let input6=Math.floor(Math.random()*9);
    for(let i=0 ;i<6;i++){
        input+=Math.floor(Math.random()*9);
        // console.log(input);
    }
    container.style.backgroundColor=input;
    console.log(input);
    // container.style.backgroundColor=("#"+input1+input2+input3+input4+input5+input6);
    // console.log("#"+input1+input2+input3+input4+input5+input6);
})