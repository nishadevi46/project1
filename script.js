function hide(){
   let btn=document.getElementById('btn1');
   let para=document.getElementById('para11');
   
   if(para.display.style !='none'){
   para.style.display='none';}
   else{
   para.style.display='inline-flex';}
}
function toggle(){
    let btn=document.getElementById('btn2');
    let para=document.getElementByclass('para12');
    if(para.display.style !='none'){
    para.style.display='none';}
    else{
    para.style.display='inline-flex';}
 }