var btn=document.getElementById("goup");
window.onscroll= function(){
    if(window.pageYOffset>=400){
        btn.style.display='block';
    }
    else{
        btn.style.display='none';
    }
    console.log(window.pageYOffset);
}
btn.onclick=function(){
    window.scrollTo(0,0);
}

function cheecked(){
    var fname=document.getElementById("f-name").value;
    var email=document.getElementById("email").value;
    var Cickin=document.getElementById("sdate").value;
    var Chickout=document.getElementById("no-days").value;
    if(document.getElementById("single").checked)
    {
        var Troom="single";
    }
    else{
        var Troom="double";
    }
    confirm(" Name: "+fname 
             + "\nE-mail: "+email+ "\nType Of Room: "+Troom+"\nChick in: "+Cickin+
             "\nChick out: "+Chickout);
}
function rentCar(){
    // var car=document.getElementById("car").value;
    var name=document.getElementById("name").value;
    var Email=document.getElementById("Email").value;
    var ssn=document.getElementById("ssn").value;
    var Nroom=document.getElementById("nroom").value;
    var selected=document.getElementById("select");
    var car = document.forms[0].select.value;
    alert("Name: "+name+"\nE-mail: "+Email+"\nSSN: "+ssn+"\nNo.Room: "+Nroom+"\nCar: "+car);
}