canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="race-track.jpg";
car_image="lykan-hyper-sport.jpg";
car_x=10;
car_y=10;
car_width=100;
car_height=50;
car2_image="bugatti-la-voiture-noire.jpg";
car2_x=10;
car2_y=100;
car2_width=100;
car2_height=50;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car_imgTag=new Image();
    car_imgTag.onload=uploadCar;
    car_imgTag.src=lykan-hyper-sport.jpg;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=bugatti-la-voiture-noire.jpg;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadCar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}

 function uploadCar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="37"){
        left();
        console.log("left");
    }
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
    }
}

window.addEventListener("keydown2",my_keydown2);
function my_keydown2(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="81"){
        left();
        console.log("left");
    }
    if(keyPressed=="87"){
        up();
        console.log("up");
    }
    if(keyPressed=="65"){
        right();
        console.log("right");
    }
    if(keyPressed=="83"){
        down();
        console.log("down");
    }
}