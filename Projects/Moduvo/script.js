var mobileVersion_width=1030; //start point of mobile version (device width)
var smallerdeviceVersion_width=1440; //start point of smaller device version (device width)



window.onload=function(){
    setTimeout(function(){
        document.body.style.visibility='visible';
        document.body.style.opacity='1';

        //landing page animations when loaded
        document.getElementById('banner').classList.replace('banner_container_bfr', 'banner_container_aft');
        setTimeout(function(){
            document.getElementById('bc_slogan').classList.replace('bc_slogan_bfr', 'bc_slogan_aft');
            document.getElementById('navbar').classList.replace('navbar_bfr', 'navbar_aft');
            document.getElementById('bct').classList.replace('bct_bfr', 'bct_aft');
        },500)
    },1000);
}


//---------------Parallax scrolling effect-----------\\
window.addEventListener('scroll', function(){
    var scroll=window.scrollY;

    var anm_multiplier_slogan=document.getElementById("bc_slogan").dataset.anm_multiplier;
    document.getElementById('bc_slogan').style.transform="translateY("+(-100-scroll*anm_multiplier_slogan)+"%)";

    document.querySelectorAll('.prlx_element').forEach(element=>{
        var anm_multiplier=parseFloat(element.dataset.anm_multiplier);


        element.style.transform="translateY("+(-scroll*anm_multiplier)+"%)";
    });
});


//-----------------other animations---------------------\\
function other_animations(el_id, class_bfr, class_aft){
    var element=document.getElementById(el_id);
    var rect=element.getBoundingClientRect();

    if(rect.top<(window.innerHeight-(window.innerHeight/10))){ //checking if element is visible in 10% of the view
        element.classList.replace(class_bfr, class_aft);
    }
    if(rect.top>window.innerHeight){
        element.classList.replace(class_aft, class_bfr);
    }
}

//calling functions when page loads to prevent animation glitches when refreshing
other_animations("services", "services_container_bfr", "services_container_aft");
other_animations("stc_text", "stc_text_bfr", "stc_text_aft");
other_animations("stc_scont", "stc_scont_bfr", "stc_scont_aft");
other_animations("cc_scont1", "cc_scont1_bfr", "cc_scont1_aft");
other_animations("cc_scont2", "cc_scont2_bfr", "cc_scont2_aft");

window.addEventListener('scroll', function(){
    other_animations("services", "services_container_bfr", "services_container_aft");
    other_animations("stc_text", "stc_text_bfr", "stc_text_aft");
    other_animations("stc_scont", "stc_scont_bfr", "stc_scont_aft");
    other_animations("cc_scont1", "cc_scont1_bfr", "cc_scont1_aft");
    other_animations("cc_scont2", "cc_scont2_bfr", "cc_scont2_aft");
});


//--------------text changing + animation for about text-----------------------\\
var counter=1;
var actext="";
var isanimating=false;
function actext_change_anm(){
    //preventing from spamming animation
    if(isanimating==true){
        return;
    }
    isanimating=true;

    if(counter>3){
        counter=0;
    }
    switch(counter){
        case 0:
            actext="Shaping The<br>Future of Architecture";
            break;
        case 1:
            actext="Redefining the<br> Art of House Designs";
            break;

        case 2:
            actext="Innovating the<br> Essence of Architecture";
            break;

        case 3:
            actext="Crafting Tomorrow's<br> Living Environments";
            break;   
    }
    counter++;
    element=document.getElementById("ac_text");

    element.style.transform="translateY(20%)";
    element.style.opacity="0";

    setTimeout(function(){
        element.style.transition="none";
        element.style.transform="translateY(-20%)";
        element.innerHTML=actext;

        void element.offsetWidth;

        element.style.transition="transform 0.6s ease-out, opacity 0.6s ease-out";
        element.style.transform="translateY(0%)";
        element.style.opacity="1";
    }, 650);

    setTimeout(function(){
        isanimating=false;
    }, 1300);
}


//------------navbar menu for mobile---------------\\
var nb_counter=2;
function navbar_menu(){
    document.getElementById("navbar").classList.toggle("navbar_mobile");

    if(nb_counter%2==0){
        document.getElementById("nav_cont2").style.display="flex";
    }else{
        document.getElementById("nav_cont2").style.display="none";
    }
    nb_counter++;
}