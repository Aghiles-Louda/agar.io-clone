const init = () => {
    draw()
}

const draw = () => {
    let randomX = Math.floor(500 * Math.random() + 10);
    let randomY = Math.floor(500 * Math.random() + 10);
    context.beginPath();
    context.fillStyle = 'rgba(255, 0, 0)';
    context.arc(randomX, randomY, 10, 0, 2 * Math.PI); 
    context.fill()
    context.lineWidth = 3; // how wide to draw a line in  pixels
    context.strokeStyle = 'rgba(0, 255, 0)'; //draw a green line
    context.stroke() // draw the line border
}


canvas.addEventListener('mousemove',(event)=>{
    // console.log(event)
    const mousePosition = {
        x: event.clientX,
        y: event.clientY
    };
    const angleDeg = Math.atan2(mousePosition.y - (canvas.height/2), mousePosition.x - (canvas.width/2)) * 180 / Math.PI;
    if(angleDeg >= 0 && angleDeg < 90){
        xVector = 1 - (angleDeg/90);
        yVector = -(angleDeg/90);
        console.log("Mouse is in the lower right quardrant")
    }else if(angleDeg >= 90 && angleDeg <= 180){
        xVector = -(angleDeg-90)/90;
        yVector = -(1 - ((angleDeg-90)/90));
        console.log("Mouse is in the lower left quardrant")
    }else if(angleDeg >= -180 && angleDeg < -90){
        xVector = (angleDeg+90)/90;
        yVector = (1 + ((angleDeg+90)/90));
        console.log("Mouse is in the top left quardrant")
    }else if(angleDeg < 0 && angleDeg >= -90){
        xVector = (angleDeg+90)/90;
        yVector = (1 - ((angleDeg+90)/90));
        console.log("Mouse is in the top right quardrant")
    }

    player.xVector = xVector ? xVector : .1;
    player.yVector = yVector ? yVector : .1;

})