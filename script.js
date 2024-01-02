const firstBtn=document.getElementById("button1");
const secondBtn=document.getElementById("button2");
const thirdBtn=document.getElementById("button3");

let count=0;

thirdBtn.onclick=function(){
    count=count-1;
    document.getElementById("Number").textContent=count;


}
firstBtn.onclick=function(){
    count+=1;
    document.getElementById("Number").textContent=count;


}



secondBtn.onclick=function(){
    count=0;
    document.getElementById("Number").textContent=count;
}


