let seconds=00;
let tens=00;
let getseconds=document.querySelector('.seconds');
let gettens=s=document.querySelector('.tens');
let btnstart=document.querySelector('.btn-start');
let btnstop=document.querySelector('.btn-stop');
let btnreset=document.querySelector('.btn-reset');
btnstart.addEventListener('click',function(){
   interval= setInterval(starttimer,10);
})
btnstop.addEventListener("click",function(){
    clearInterval(interval);
})
btnreset.addEventListener("click",function(){
    clearInterval(interval);
    tens=00;
    seconds=00;
   getseconds.innerHTML='0'+seconds;
gettens.innerHTML='0'+tens;
})
function starttimer(){
tens++;
    if(tens<=9){
        gettens.innerHTML='0'+tens;
    }
    if(tens>9){
        gettens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        getseconds.innerHTML='0'+seconds;
        tens=0;
        gettens.innerHTML='0'+0;
    }
    if(seconds>9){
        getseconds.innerHTML=seconds;
    }
}