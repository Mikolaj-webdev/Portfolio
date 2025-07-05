//Loading
window.onload=function(){
    document.body.style.visibility="visible";
}

//Replace class function
function replaceclass(name, classname, newclassname){
    document.getElementById(name).classList.remove(classname);
    document.getElementById(name).classList.add(newclassname);
}

function updatelayout(){
    var vh=window.innerHeight;
    if(window.scrollY>vh){
        replaceclass("company_name_navbar","company_name_navbar_bfr","company_name_navbar_aft");
        replaceclass("product_container","product_container_bfr","product_container_aft");
    }
    else if(window.scrollY<vh){
        replaceclass("company_name_navbar","company_name_navbar_aft","company_name_navbar_bfr");
        replaceclass("product_container","product_container_aft","product_container_bfr");

        //debug
        replaceclass("product_container","product_container_aft_ss","product_container_bfr");
        replaceclass("product_container","product_container_aft_ps","product_container_bfr");

        replaceclass("side_section","side_section_aft","side_section_bfr");
        replaceclass("side_section","side_section_aft_ps","side_section_bfr");

        replaceclass("purchased_container","purchased_container_aft","purchased_container_bfr");

        replaceclass("navbar_section","navbar_section_aft_ps","navbar_section_bfr");
        replaceclass("navbar_section","navbar_section_aft","navbar_section_bfr");
    }

    //Navbar
    if(window.scrollY>vh*2 && window.scrollY<vh*3.5){
        replaceclass("navbar_section","navbar_section_bfr","navbar_section_aft");
        replaceclass("navbar_section","navbar_section_aft_ps","navbar_section_aft");
    }else if(window.scrollY<vh*2){
        replaceclass("navbar_section","navbar_section_aft","navbar_section_bfr");
    }
    if(window.scrollY>vh*3.5){
        replaceclass("navbar_section","navbar_section_aft","navbar_section_aft_ps");
    }


    //Side section
    if(window.scrollY>vh*2 && window.scrollY<vh*3){
        replaceclass("side_section","side_section_bfr","side_section_aft");

        if(window.innerWidth>1020){
            replaceclass("product_container","product_container_aft","product_container_aft_ss");
        }
        if(window.innerWidth<=1020){
            document.getElementById("product_container").style.zIndex="9";
        }
    }
    else if(window.scrollY>vh && window.scrollY<vh*2){
        replaceclass("side_section","side_section_aft","side_section_bfr");

        replaceclass("product_container","product_container_aft_ss","product_container_aft");
    }

    
    //Purchased section
    if(window.scrollY>vh*3){
        replaceclass("side_section","side_section_aft","side_section_aft_ps");
        replaceclass("ss_container","ss_container_bfr","ss_container_aft");
        if(window.innerWidth>1020){
            replaceclass("product_container","product_container_aft_ss","product_container_aft_ps");
        }
        replaceclass("purchased_container","purchased_container_bfr","purchased_container_aft");
    }
    else if(window.scrollY<vh*3 && window.scrollY>vh*2){
        replaceclass("side_section","side_section_aft_ps","side_section_aft");
        replaceclass("ss_container","ss_container_aft","ss_container_bfr");
        if(window.innerWidth>1020){
            replaceclass("product_container","product_container_aft_ps","product_container_aft_ss");
        }
        if(window.innerWidth<=1020){
            document.getElementById("product_container").style.zIndex="9";
        }
        replaceclass("purchased_container","purchased_container_aft","purchased_container_bfr");
    }

    if(window.scrollY>vh*3.5){
        replaceclass("purchased_container","purchased_container_aft","purchased_container_aft_rl");
    }
    else if(window.scrollY<vh*3.5 && window.scrollY>vh*3){
        replaceclass("purchased_container","purchased_container_aft_rl","purchased_container_aft");
    }
}
updatelayout();
window.addEventListener("scroll", updatelayout);

//Main section switching product
var currentproduct=0;
var isanimating=false;
var toside=0;
function productswitch(productid){
    if(isanimating==true || currentproduct==productid){
        return;
    }

    isanimating=true;
    toside=33.5*productid;

    //Preventing animation when product is already active
    if(currentproduct!==productid){
        replaceclass("product_bg_image_1","product_bg_image_1_bfr","product_bg_image_1_aft");
        replaceclass("product_bg_image_2","product_bg_image_2_bfr","product_bg_image_2_aft");

        document.getElementById("product_bg_image_2_ss").src="resources/images/productbgimage"+productid+"2.png";

        document.getElementById("product").style.backgroundPosition=toside+"% 92%, 0";
        
        //Slider button animation
        //Previous to default position
        replaceclass("sb_"+(currentproduct+1),"slider_button_aft","slider_button_bfr");
        replaceclass("sb_"+(productid+1),"slider_button_bfr","slider_button_aft");

        //Changing text color and other of elements depending of which prod is active
        if(productid==0){ //almond
            iconcolor="#0f6d67";
            iconcolor_i="#b1c9af";

            iconclass1="fa-wheat-awn";
            iconclass2="fa-solid fa-spa";

            icontext1="Natural ingredients only";
            icontext2="Perfectly soft consistency";

            ssprice="$14.99";
            ssprodtext1="ALMONDS";
            ssprodtext2="Discover the nourishing power of Natural Almonds Cream, crafted with pure, plant-based ingredients for gentle and effective care. Its smooth, velvety texture glides effortlessly, hydrating your skin and leaving it irresistibly soft. Free from artificial additives, it’s the perfect choice for natural, everyday pampering!";
        }else if(productid==1){ //cashew
            iconcolor="#ddd588";
            iconcolor_i="#7a7549";

            iconclass1="fa-scale-balanced";
            iconclass2="fa-shield-halved";

            icontext1="Carefully balanced";
            icontext2="Long lasting protective effect";

            ssprice="$13.99";
            ssprodtext1="CASHEW";
            ssprodtext2="Treat your skin with Natural Cashew Cream, designed with thoughtfully chosen ingredients for optimal care. Its creamy, lightweight texture provides deep hydration while creating a lasting barrier to protect your skin. Perfect for all-day comfort, it’s a natural solution for radiant, healthy skin!";
        }else if(productid==2){ //walnut
            iconcolor="#8d6e4b";
            iconcolor_i="#bbae9f";

            iconclass1="fa-mortar-pestle";
            iconclass2="fa-snowflake";

            icontext1="Crushed in mortar";
            icontext2="Cold protective barrier";

            ssprice="$12.99";
            ssprodtext1="WALNUTS";
            ssprodtext2="Embrace the care of Natural Walnut Cream, made from walnuts gently crushed in a mortar for pure, natural goodness. Its rich, nourishing formula forms a protective barrier, shielding your skin from the cold while keeping it soft and hydrated. Perfect for smooth, winter-ready skin!";
        }else if(productid==3){ //pistachio
            iconcolor="#abe7a6";
            iconcolor_i="#657963";

            iconclass1="fa-moon";
            iconclass2="fa-award";

            icontext1="Ideal for night use";
            icontext2="Award winner 2024";

            ssprice="$15.99";
            ssprodtext1="PISTACHIO";
            ssprodtext2="Indulge in the luxury of Natural Pistachio Cream, the perfect choice for your nighttime skincare routine. Its rich, soothing formula restores and nourishes as you sleep, leaving your skin soft and rejuvenated. Proudly recognized as an award winner in 2024, it’s the ultimate treat for radiant beauty!";
        };
        //Animation of productabout either from left or right depending of which side product is scrolling to
        if(currentproduct<productid){
            replaceclass("product_about_1","product_about_1_bfr","product_about_1_aft1");
            replaceclass("product_about_2","product_about_2_bfr","product_about_2_aft1");
            setTimeout(function(){
                replaceclass("product_about_1","product_about_1_aft1","product_about_1_aft2");
                replaceclass("product_about_2","product_about_2_aft1","product_about_2_aft2");
            },200);
        }else{
            replaceclass("product_about_1","product_about_1_bfr","product_about_1_aft2");
            replaceclass("product_about_2","product_about_2_bfr","product_about_2_aft2");
            setTimeout(function(){
                replaceclass("product_about_1","product_about_1_aft2","product_about_1_aft1");
                replaceclass("product_about_2","product_about_2_aft2","product_about_2_aft1");
            },200);
        }
        setTimeout(function(){
            document.getElementById("pa_icon_1").style.backgroundColor=iconcolor;
            document.getElementById("pa_icon_2").style.backgroundColor=iconcolor;

            document.getElementById("pa_icon_i1").style.color=iconcolor_i;
            document.getElementById("pa_icon_i2").style.color=iconcolor_i;

            document.getElementById('pa_icon_i1').className="pa_icon_i fa-solid "+iconclass1;
            document.getElementById('pa_icon_i2').className="pa_icon_i fa-solid "+iconclass2;

            document.getElementById('pa_text_1').innerHTML=icontext1;
            document.getElementById('pa_text_2').innerHTML=icontext2;


            document.getElementById('ss_text_price').innerHTML=ssprice;
            document.getElementById('ss_text_2').innerHTML=ssprodtext1;
            document.getElementById('ss_text_3').innerHTML=ssprodtext2;
            
            replaceclass("product_about_1","product_about_1_aft2","product_about_1_bfr");
            replaceclass("product_about_2","product_about_2_aft2","product_about_2_bfr");

            replaceclass("product_about_1","product_about_1_aft1","product_about_1_bfr");
            replaceclass("product_about_2","product_about_2_aft1","product_about_2_bfr");
        },300);

        setTimeout(function(){
            document.getElementById("product_bg_image_1").src="resources/images/productbgimage"+productid+"1.png";
            document.getElementById("product_bg_image_2").src="resources/images/productbgimage"+productid+"2.png";

            replaceclass("product_bg_image_1","product_bg_image_1_aft","product_bg_image_1_bfr");

            replaceclass("product_bg_image_2","product_bg_image_2_aft","product_bg_image_2_bfr");
        },350);

        currentproduct=productid;
    }

    setTimeout(function(){
        isanimating=false;
    },400);
}


var cartamount_counter=1;
function cartamount(type){
    if(type=="more"&&cartamount_counter<100){
        cartamount_counter++;
    }
    else if(type=="less"&&cartamount_counter!==1){
        cartamount_counter--;
    }
    document.getElementById("ss_amount_btn_value").innerHTML=cartamount_counter
}

var cart_products=[0,0,0,0] //almond,cashew,walnut,pistachio
function cartadd(){
    cart_products[currentproduct]+=cartamount_counter;

    document.getElementById("shopping_cart_icon").classList.add("fa-shake")
    if(cart_products[currentproduct]>100){
        cart_products[currentproduct]=cart_products[currentproduct]-(cart_products[currentproduct]-100);
    }
    cartpreview_update();
}

var cartpreview_counter=2;
function cartpreview(){
    if(cartpreview_counter%2==0){
        document.getElementById("cart_preview").style.visibility="visible";
        document.getElementById("shopping_cart_icon").style.color="#d0f8cc";
        document.getElementById("cart_preview").style.opacity="1";
    }else{
        document.getElementById("shopping_cart_icon").style.color="";
        document.getElementById("cart_preview").style.opacity="0";
        document.getElementById("cart_preview").style.visibility="hidden";
    }
    cartpreview_counter++;
}

function cartpreview_update(){
    var productname="";
    var productprice=0;
    var totalprice=0;
    for(a=0; a<cart_products.length; a++){
        if(cart_products[a]!==0){
            document.getElementById("cp_cont_text").style.display="none";
            document.getElementById("cp_cont_li"+a).style.display="list-item";

            if(a==0){
                productname="Almond";
                productprice=14.99;
            }else if(a==1){
                productname="Cashew";
                productprice=13.99;
            }else if(a==2){
                productname="Walnut";
                productprice=12.99;
            }else if(a==3){
                productname="Pistachio";
                productprice=15.99;
            }

            totalprice+=productprice*cart_products[a];

            document.getElementById("cp_cont_li"+a).innerHTML=productname+" cream x"+cart_products[a]+" - "+(productprice*cart_products[a]).toFixed(2)+"$";
            
            if(totalprice.toFixed(2)<99){
                document.getElementById("cp_price_tag").style.left="-33.5%";
            }else if(totalprice.toFixed(2)>99 && totalprice.toFixed(2)<1000){
                document.getElementById("cp_price_tag").style.left="-32%";
            }else{
                document.getElementById("cp_price_tag").style.left="-30%";
            }

            document.getElementById("cp_price_tag").innerHTML="Price: "+totalprice.toFixed(2)+"$";
        }
    }
}