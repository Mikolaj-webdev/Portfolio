//landing page animations when loaded
window.onload=function(){
    setTimeout(function(){
        document.body.style.visibility="visible";

        //main image animation
        document.getElementById("mic_image_animation_cont").classList.replace("mic_image_animation_cont_bfr", "mic_image_animation_cont_aft");
        document.getElementById("mic_iac_image2").classList.replace("mic_iac_image2_bfr", "mic_iac_image2_aft");
        document.getElementById("mic_iac_image3").classList.replace("mic_iac_image3_bfr", "mic_iac_image3_aft");
        setTimeout(function(){
            document.getElementById("mic_image_animation_cont").classList.replace("mic_image_animation_cont_visible", "mic_image_animation_cont_hidden");
            document.getElementById("mic_ic_image").classList.replace("mic_ic_image_hidden", "mic_ic_image_visible");
        },5000) //duration of transition



        setTimeout(function(){
            document.getElementById("lpc_header_cont").classList.replace("lpc_header_cont_bfr", "lpc_header_cont_aft");
            document.getElementById("lpc_mc_sc1_subcont1").classList.replace("lpc_mc_sc1_subcont1_bfr", "lpc_mc_sc1_subcont1_aft");
            document.getElementById("lpc_mc_sc1_subcont2").classList.replace("lpc_mc_sc1_subcont2_bfr", "lpc_mc_sc1_subcont2_aft");
            document.getElementById("lpc_mc_subcont2").classList.replace("lpc_mc_subcont2_bfr", "lpc_mc_subcont2_aft");
            document.getElementById("pc_subcont1_1").classList.replace("pc_subcont1_1_bfr", "pc_subcont1_1_aft");
            document.getElementById("pc_subcont2").classList.replace("pc_subcont2_bfr", "pc_subcont2_aft");
            document.getElementById("pc_subcont1_2").classList.replace("pc_subcont1_2_bfr", "pc_subcont1_2_aft");
        },1000)
    }, 1000)
}



//-----------------element showing animations---------------------\\
function showing_animations(el_id, class_bfr, class_aft, multiplier){
    var element=document.getElementById(el_id);
    var rect=element.getBoundingClientRect();

    if(rect.top<(window.innerHeight-(window.innerHeight/multiplier))){ //checking if element is visible in 10% of the view
        element.classList.replace(class_bfr, class_aft);
    }
    if(rect.top>window.innerHeight){
        element.classList.replace(class_aft, class_bfr);
    }
}

//calling functions when page loads to prevent animation glitches when refreshing
showing_animations("ccc_image", "ccc_image_bfr", "ccc_image_aft", 3);
showing_animations("ccc_panel1", "ccc_panel1_bfr", "ccc_panel1_aft", 4);
showing_animations("ccc_panel2", "ccc_panel2_bfr", "ccc_panel2_aft", 4);
showing_animations("ccc_panel3", "ccc_panel3_bfr", "ccc_panel3_aft", 4);
showing_animations("ac_panel1", "ac_panel1_bfr", "ac_panel1_aft", 10);
showing_animations("ac_panel2", "ac_panel2_bfr", "ac_panel2_aft", 10);


window.addEventListener("scroll", function(){
    showing_animations("ccc_image", "ccc_image_bfr", "ccc_image_aft", 3);
    showing_animations("ccc_panel1", "ccc_panel1_bfr", "ccc_panel1_aft", 4);
    showing_animations("ccc_panel2", "ccc_panel2_bfr", "ccc_panel2_aft", 4);
    showing_animations("ccc_panel3", "ccc_panel3_bfr", "ccc_panel3_aft", 4);
    showing_animations("ac_panel1", "ac_panel1_bfr", "ac_panel1_aft", 10);
    showing_animations("ac_panel2", "ac_panel2_bfr", "ac_panel2_aft", 10);
})




//Main image changing
const image_cont=document.getElementById("mic_image_cont");
const image=document.getElementById("mic_ic_image");


var currentIndex=27;
var cont_width=image_cont.offsetWidth;
var maxImages=36;
var changeReq=cont_width/maxImages;

var isDragging=false;
var startX=0;

image_cont.addEventListener("mousedown", (e)=>{
    isDragging=true;
    main_image_dragging(true);
    startX=e.clientX;
});

image_cont.addEventListener("mouseup", ()=>{
    isDragging=false;
    main_image_dragging(false);
});

image_cont.addEventListener("mouseleave", ()=>{
    isDragging=false;
    main_image_dragging(false);
});

image_cont.addEventListener("mousemove", (e)=>{
    if(isDragging==true){
        var currentX=e.clientX;
        var movedX=currentX-startX;

        var change=Math.round(movedX/changeReq);
     
        if(Math.abs(change)>=1){
            currentIndex=currentIndex+change;
            if(currentIndex<0){
                currentIndex=35;
            }
            if(currentIndex>35){
                currentIndex=0;
            }
            image.src="resources/maybach_360/"+((currentIndex*10).toString().padStart(3, "0"))+".webp";
            startX=currentX;
        }
    }
});
function main_image_dragging(status){
    if(status==true){
        document.querySelectorAll('.main_image_animation_element').forEach(el =>{
            el.style.transition="opacity 0.5s ease-out";
            el.style.opacity=0;
        });

        document.getElementById("landing_page_container").classList.add("l_pc_main_image_animation_active");

    }else if(status==false){
        document.querySelectorAll('.main_image_animation_element').forEach(el =>{
            el.style.opacity=1;
        });

        document.getElementById("landing_page_container").classList.remove("l_pc_main_image_animation_active");
    }
}

//Panel date changing
function panel_date_change(id_of_text ,type){
    var text_change_value=document.getElementById(id_of_text).innerHTML;
    text_change_value=parseInt(text_change_value);

    if(type=="plus" && text_change_value<30){
        text_change_value+=1;
    }else if(type=="minus" && text_change_value>1){
        text_change_value-=1;
    }
    document.getElementById(id_of_text).innerHTML=text_change_value;
}

//Panel consultant changing
function panel_consultant_changing(id_of_tile){
    var id_of_text=id_of_tile+"_t";
    var consultant_name=document.getElementById(id_of_text).innerHTML;

    document.getElementById("pc_sc_p1_cc2_bc_tc_text1").innerHTML=consultant_name;

    document.querySelectorAll('.pc_sc_p1_cc2_tile').forEach(el =>{
        el.classList.remove('panel_c_selected');
    });
    document.getElementById(id_of_tile).classList.add("panel_c_selected");
}