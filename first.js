var tablinks=document.querySelectorAll(".tab-links");
var tabcontents=document.querySelectorAll(".tab-contents");
var  sidemenu1=document.querySelector("#sidemenu")


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

function openmenu(){
    sidemenu1.style.right='0';
}

function closemenu(){
    sidemenu1.style.right='-200px';
}
