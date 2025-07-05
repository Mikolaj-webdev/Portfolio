//landing page animations when loaded
window.onload=function(){
    setTimeout(function(){
        document.body.style.visibility="visible";
        document.body.style.opacity="1";
        
        document.getElementById("banner_container").classList.replace("banner_container_bfr", "banner_container_aft");
        document.getElementById("header_container").classList.replace("header_container_bfr", "header_container_aft");
        document.querySelectorAll(".bc_sc1_element").forEach(el =>
            el.classList.replace("bc_sc1_element_bfr", "bc_sc1_element_aft")
        );
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
showing_animations("features_container", "features_container_bfr", "features_container_aft");
showing_animations("about_container", "about_container_bfr", "about_container_aft");
showing_animations("pc_row1", "pc_row1_bfr", "pc_row1_aft");
showing_animations("pc_row2", "pc_row2_bfr", "pc_row2_aft");
showing_animations("dc_subcont1", "dc_subcont1_bfr", "dc_subcont1_aft");
showing_animations("benefits_container", "benefits_container_bfr", "benefits_container_aft");


window.addEventListener("scroll", function(){
    showing_animations("features_container", "features_container_bfr", "features_container_aft");
    showing_animations("about_container", "about_container_bfr", "about_container_aft");
    showing_animations("pc_row1", "pc_row1_bfr", "pc_row1_aft");
    showing_animations("pc_row2", "pc_row2_bfr", "pc_row2_aft");
    showing_animations("dc_subcont1", "dc_subcont1_bfr", "dc_subcont1_aft");
    showing_animations("benefits_container", "benefits_container_bfr", "benefits_container_aft");
})



//---------------Parallax scrolling effect-----------\\
window.addEventListener('scroll', function(){
    var scroll=window.scrollY;

    document.querySelectorAll('.prlx_element').forEach(element=>{
        var anm_multiplier=parseFloat(element.dataset.anm_multiplier);

        element.style.transform="translateY("+(-scroll*anm_multiplier)+"%)";
    });
});


//--------------------Navbar mobile animation---------------------\\
var nm_anim=false;
document.getElementById("hc_nav_bars").onclick=function(){
    if(nm_anim==false){
        document.getElementById("hc_text_cont").classList.remove("hc_text_cont_bfr");
        document.getElementById("hc_text_cont").classList.add("hc_text_cont_aft");
        nm_anim=true;
    }else if(nm_anim==true){
        document.getElementById("hc_text_cont").classList.remove("hc_text_cont_aft");
        document.getElementById("hc_text_cont").classList.add("hc_text_cont_bfr");
        nm_anim=false;
    }
}


//---------------------Features slider---------------------------------\\
const slider=document.getElementById('fc_slider');
let isDown=false;
let startX;
let scrollLeft;

//Pc version -----
slider.addEventListener('mousedown', (e) =>{
    isDown=true;
    startX=e.pageX-slider.offsetLeft;
    scrollLeft=slider.scrollLeft;
});

slider.addEventListener('mouseleave', () =>{
    isDown=false;
});

slider.addEventListener('mouseup', () =>{
    isDown=false;
});

slider.addEventListener('mousemove', (e) =>{
    if (!isDown) return;
    e.preventDefault();
    const x=e.pageX-slider.offsetLeft;
    const walk=x-startX;
    slider.scrollLeft=scrollLeft-walk;
});


//Mobile version --------
slider.addEventListener('touchstart', (e) =>{
    isDown=true;
    startX=e.touches[0].pageX-slider.offsetLeft;
    scrollLeft=slider.scrollLeft;
}, { passive: true });

slider.addEventListener('touchend', () =>{
    isDown=false;
});

slider.addEventListener('touchmove', (e) =>{
    if (!isDown) return;
    const x=e.touches[0].pageX-slider.offsetLeft;
    const walk=x-startX;
    slider.scrollLeft=scrollLeft-walk;
}, { passive: true });
