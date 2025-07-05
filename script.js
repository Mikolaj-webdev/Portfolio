//landing page animations when loaded
window.onload=function(){
    setTimeout(function(){
        document.body.style.visibility="visible";
        document.body.style.opacity="1";

        document.getElementById("ac_text1").classList.replace("ac_text1_bfr", "ac_text1_aft");
        document.getElementById("pc_bg_img").classList.replace("pc_bg_img_bfr", "pc_bg_img_aft");
    }, 1000)
}