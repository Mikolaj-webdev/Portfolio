//landing page animations when loaded
window.onload=function(){
    setTimeout(function(){
        document.body.style.visibility="visible";
        document.body.style.opacity="1";

        document.getElementById("banner_container").classList.replace("banner_container_bfr", "banner_container_aft");
        
        setTimeout(function(){
            document.getElementById("bc_slogan").classList.replace("bc_slogan_bfr", "bc_slogan_aft");
        },500)
    }, 1000)
}


//-----------------element showing animations---------------------\\
function showing_animations(el_id, class_bfr, class_aft){
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
showing_animations("about_container", "about_container_bfr", "about_container_aft");
showing_animations("projects_container", "projects_container_bfr", "projects_container_aft");
showing_animations("prices_container", "prices_container_bfr", "prices_container_aft");
showing_animations("about2_container", "about2_container_bfr", "about2_container_aft");
showing_animations("fieldsofwork_container", "fieldsofwork_container_bfr", "fieldsofwork_container_aft");
showing_animations("contact_details_container", "contact_details_container_bfr", "contact_details_container_aft");
showing_animations("contact_container", "contact_container_bfr", "contact_container_aft");
showing_animations("credits_container", "credits_container_bfr", "credits_container_aft");


window.addEventListener("scroll", function(){
    showing_animations("about_container", "about_container_bfr", "about_container_aft");
    showing_animations("projects_container", "projects_container_bfr", "projects_container_aft");
    showing_animations("prices_container", "prices_container_bfr", "prices_container_aft");
    showing_animations("about2_container", "about2_container_bfr", "about2_container_aft");
    showing_animations("fieldsofwork_container", "fieldsofwork_container_bfr", "fieldsofwork_container_aft");
    showing_animations("contact_details_container", "contact_details_container_bfr", "contact_details_container_aft");
    showing_animations("contact_container", "contact_container_bfr", "contact_container_aft");
    showing_animations("credits_container", "credits_container_bfr", "credits_container_aft");
})


//---------------Parallax scrolling effect-----------\\
window.addEventListener('scroll', function(){
    var scroll=window.scrollY;

    document.querySelectorAll('.prlx_element').forEach(element=>{
        var anm_multiplier=parseFloat(element.dataset.anm_multiplier);

        element.style.transform="translateY("+(-scroll*anm_multiplier)+"%)";
    });
});