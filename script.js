const nums = Array.from(document.querySelectorAll('.num'));
const operators = Array.from(document.querySelectorAll('.ops'));
let testing = 0;
let cnum = "";
let copp = "";
let cnum2= "";
let cout="";
let whileTest=0;
let enterTest=0;
let val = 0;
let finalO = "0";
let displayValue = "0";
let pointTest=0;
let delTest=0;

//pass input numbers as strings
updateDisplay("0");
//I think this might be the fucking key to solving this

/*I think that I was wrong. But, the problem is 100% with the display function. What if I pass 3 variables into it. The one I want to display, 
whether we have used an operator (so we can put an if statement into the display function), and the final amount that we wanted to display. We'd have to 
create another variable for that since we want to erase final0 every time. 

Something is also wrong with the neg for the keyboard input. 
*/

function calculate(e) {
   
   let RN="";
   
    let num = document.querySelector(`[data-key="${e.keyCode}"]`);
   console.log(num);
   console.log(e.key);
   //converts the buttons and the keyboard input to the same value so we don't duplicate the code.
 
   if(e != "Del" && (e==1 || e===2|| e===3 || e===4 || e===5 || e===6 || e===7 || e===8 || e===9 || e==='+' || e==='Enter' || e==='Neg'||e==='-'||e==='*'||e==='/'||e==='%'||e==='.'&&pointTest===0))
  {
 RN = `${e}`;
console.log(RN);

}
//
else if(`${e}`==='Del'||e.key==="Backspace")
{RN="Del"; }

else if(num!=null && pointTest===0 && e.key!="Backspace")
 {RN = `${e.key}`;}
    //wont accept any key besides those on the calculato
    
    
    else if (num===null)
  {return;}
 
  else if(num!=null &&`${e.key}`!='.'&&pointTest===1 && e.key != "Backspace")
  {RN = `${e.key}`;}
  

console.log(e.key);
console.log(num);
console.log(RN);
  let X=0;
//while(X<1)
//{

   if(RN === "+")
   {
    whileTest=1;
    console.log(RN);
    pointTest=0;
   }

   else if(RN ==="."&& enterTest===0 && (cnum2==="0" || cnum2===""))
   {pointTest = 1;
    cnum=cnum+RN;
    updateDisplay(cnum.toLocaleString('fullwide', {minimumFractionDigits:0, maximumFractionDigits:10})); }

    else if(RN ==="."&& enterTest===0 && cnum!="")
   {pointTest = 1;
    cnum2=cnum2+RN;
    updateDisplay(cnum2.toLocaleString('fullwide', {minimumFractionDigits:0, maximumFractionDigits:10})); }

   else if(RN === "-")
   {
    whileTest=2;
    console.log(RN);
    pointTest=0;
   }

   else if(RN === "*")
   {
    whileTest=3;
    console.log(RN);
    pointTest=0;
    
   }

  else if(RN === "/")
   {
    whileTest=4;
    console.log(RN);
    pointTest=0;
   }
   else if(RN === "%" && enterTest===0 && (cnum2==="0" || cnum2===""))
   {cnum = cnum/100;
    whileTest=6;
    pointTest=1;}

    else if(RN === "%" && enterTest ===0 && cnum2!="0")
    {cnum2 = cnum2/100;
      pointTest=1;}
  
   else if(whileTest >= 1 && RN != '+' && RN!='Enter' && RN != '-' && RN != '*' && RN != '/' && RN != 'Neg' && cnum != "" && RN!="Del")
   { cnum2=cnum2 + RN;
    updateDisplay(cnum2.toLocaleString('fullwide', {minimumFractionDigits:0, maximumFractionDigits:10}));
   }

   else if(RN === 'Enter')
   {enterTest = 1;
    console.log(RN)
    X=2;}

    else if(RN === "Neg")
    {cnum = cnum * (-1);
        
        updateDisplay(cnum.toLocaleString('fullwide', {minimumFractionDigits:0, maximumFractionDigits:10})); }

   else if(cnum2 ==="" && RN != '+' && RN!='Enter' && RN != "-" && RN != "*" && RN != "/" && RN != "Neg"&&RN!="Del")
 
    {cnum = cnum + RN;
    console.log(cnum);
    updateDisplay(cnum.toLocaleString('fullwide', {minimumFractionDigits:0, maximumFractionDigits:10}));}

    else if(RN==="Del" && (cnum2 ==="" || cnum2 ==="0"))
    {cnum = cnum.substring(0, cnum.length - 1);
      updateDisplay(cnum.toLocaleString('fullwide', {minimumFractionDigits:0, maximumFractionDigits:10}))}


    else if(RN==="Del" && cnum2 !="")
    {cnum2 = cnum2.substring(0, cnum2.length - 1);
      updateDisplay(cnum2.toLocaleString('fullwide', {minimumFractionDigits:0, maximumFractionDigits:10}))
    }


    else{updateDisplay(finalO.toLocaleString('fullwide', {minimumFractionDigits:0, maximumFractionDigits:10}));}

  //  }
/*
These next if statements are to finalize the date. We'll set cnum to final0 so that we can immediately use another operator
*/
if(whileTest===1 && enterTest===1){
  console.log(+cnum + +cnum2)
  finalO = +cnum + +cnum2;
  updateDisplay(finalO.toLocaleString('fullwide', {minimumFractionDigits:0, maximumFractionDigits:12}));
  cnum = finalO;
  finalO = 0;
    cnum2 = "0";
    enterTest = 0;
    RN="";
    pointTest=0;
}


if(whileTest===2 && enterTest===1){ 
    console.log(cnum - cnum2)
    finalO = +cnum - +cnum2;
    updateDisplay(finalO.toLocaleString('fullwide', {minimumFractionDigits:0, maximumFractionDigits:12}));
    cnum = finalO;
    finalO = 0;
    cnum2 = "0";
    enterTest = 0;
    RN="";
    pointTest=0;
}

if(whileTest===3 && enterTest===1){ 
    console.log(cnum * cnum2)
    finalO = cnum * cnum2;
    updateDisplay(finalO.toLocaleString('fullwide', {minimumFractionDigits:0, maximumFractionDigits:12}));
    cnum = finalO;
    finalO = 0;
    cnum2 = "0";
    enterTest = 0;
    RN="";
    pointTest=0;
    }

if(whileTest===4 && enterTest===1){ 
    console.log(cnum / cnum2)
    
    finalO = cnum / cnum2;
   if (finalO != "Infinity"){
    updateDisplay(finalO.toLocaleString('fullwide', {minimumFractionDigits:0, maximumFractionDigits:12}));}
   else {updateDisplay("Error");}
    cnum = finalO;
    finalO = 0;
    cnum2 = "0";
    enterTest = 0;
    RN="";
    pointTest=0;
}

if(whileTest===6 && enterTest===1)
{
  finalO = cnum;
  updateDisplay(finalO.toLocaleString('fullwide', {minimumFractionDigits:0, maximumFractionDigits:12}));
  cnum = finalO;
  finalO = 0;
  cnum2 = "0";
  enterTest = 0;
  RN="";
  pointTest=0;
}

}

function reset()
{location.reload();}

function updateDisplay(displayValue) {
  
  const display = document.getElementById('calcScreen');
    display.innerText = displayValue;
    
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }

}
  


  window.addEventListener('keydown',calculate)
