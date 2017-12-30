var ctx = document.getElementById("myCanvas").getContext("2d");

a = 20;
h = (a*Math.pow(3, 1/2))/2;

function drawIsoscelesTriangle1(ctx, x, y, a) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+a/2, y-(a*Math.pow(3, 1/2))/2);
    ctx.lineTo(x+a, y);
    //ctx.lineTo(x, y);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();
    clx.click(function() {
        this.fillStyle = "black";
    });
    //ctx.stroke();
}
function drawIsoscelesTriangle2(ctx, x, y, a) {
    ctx.beginPath();
    ctx.moveTo(x+a/2, y-(a*Math.pow(3, 1/2))/2);
    ctx.lineTo(x+a, y);
    ctx.lineTo(x+a/2+a, y-(a*Math.pow(3, 1/2))/2);
    //ctx.lineTo(x, y);
    ctx.closePath();
    ctx.fillStyle = "black";
    ctx.fill();
    //ctx.stroke();
}
  
for(i=0;i<40;i++){
    for(j=0;j<40;j++){
        drawIsoscelesTriangle1(ctx, j*a, i*h, a);
    }
}  
for(i=0;i<40;i++){
    for(j=0;j<40;j++){
        drawIsoscelesTriangle2(ctx, j*a, i*h, a);
    }
}



// ==========================
$(document).ready(function(){
    $(".output").text(h);
});