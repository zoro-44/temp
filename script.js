const btn = document.querySelector("#btn");
const gen = document.querySelector("#gen");
let output = document.getElementById('out');
let password = "no password";

gen.addEventListener('click',()=>{
    const val = document.getElementById('len').value;
    const n = Number(val);
    let len = 8;
    if(Number.isInteger(n) && n>0){
        len = n;
    }else{
        len = 8;
    }
    let genpass="";
    const cap = document.getElementById('cap').checked;
    const small = document.getElementById('small').checked;
    const num = document.getElementById('num').checked;
    const sym = document.getElementById('sym').checked;

    if(cap && small){
        let temp="";
        for(let i=0;i<len;i++){
            temp += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
        genpass=temp;
    }else if(cap){
        let temp="";
        for(let i=0;i<len;i++){
            temp += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
        genpass=temp;
    }else if(small){
        let temp="";
        for(let i=0;i<len;i++){
            temp += String.fromCharCode(97 + Math.floor(Math.random() * 26));
        }
        genpass=temp;
    }else if(num){
        let temp="";
        for(let i=0;i<len;i++){
            temp += String.fromCharCode(48 + Math.floor(Math.random() * 10));
        }
        genpass=temp;
    }else if(sym){
        let temp="";
        for(let i=0;i<len;i++){
            temp += String.fromCharCode(33 + Math.floor(Math.random() * 15));
        }
        genpass=temp;
    }else{
        genpass = "check atleast 1 box";
    }

    password = genpass;
    output.innerText = password;
})


btn.addEventListener('click',()=>{
    if(password === "no password" || password === "Please check uppercase option"){
        alert("Generate a password first!");
        return;
    }
    navigator.clipboard.writeText(password)
    .then(()=>{
        alert("Copied");
    })
    .catch(()=>{
        alert("Failed!!!");
    })
})
