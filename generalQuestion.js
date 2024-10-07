 const main=document.getElementById("main");
 let anwer1=document.getElementById("first");
 let anwer2=document.getElementById("second")
 let anwer3=document.getElementById("third")
 main.addEventListener("click",function(event){
    if(event.target.id=== 'firstquesionButton'){
        anwer1.style.display="block";
    }
    else if(event.target.id=== 'secondQuestionButton'){
        anwer2.style.display="block";
    }
     else{
        anwer3.style.display="block";
    }
    console.log(event.target.id);
 });