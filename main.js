canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_width = 75;
car_height = 100;
car_x = 5;
car_y = 225;
background_Image = "parkingLot.jpg";
car_image = "car2.png";



function add() {
	background_ImgTag = new Image();
    background_ImgTag.onload = uploadBackground;
    background_ImgTag.src = background_Image;

    car_ImgTag = new Image();
    car_ImgTag.onload = uploadgreencar;
    car_ImgTag.src = car_image;
}

function uploadBackground() {
	ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_ImgTag, car_x, car_y, car_width, car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y > 0){
        car_y = car_y -10;
        console.log("When up key is pressed" + car_x + "," + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if(car_y < 300){
		car_y = car_y + 10;
		console.log("When down key is pressed" + car_x + "," + car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(car_x > 0){
		car_x = car_x - 10;
		console.log("When left key is pressed" + car_x + "," + car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(car_x < 700){
		car_x = car_x + 10;
		console.log("When right key is pressed" + car_x + "," + car_y);
		uploadBackground();
		uploadgreencar();
	}
}
