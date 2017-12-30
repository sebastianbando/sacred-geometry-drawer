var draw = SVG('drawing').size(800, 600);
//var rect = draw.rect(100, 100).attr({ fill: '#f06' });

var a = 20;
var h = (a*Math.pow(3, 1/2))/2;
var x = 0;
var y = 0;

for (i=0;i<20;i++) {
    for (j=0;j<40;j++) {
        var shape = draw.polygon(x+","+y+ " " +x+a/2+","+y+h+ " " +x+a+","+y)
            .fill('black')
            .move(j*a/2, i*h)
        if (i%2==1 && j%2==1) {
            shape.rotate(180) 
        } else if (i%2==0 && j%2==0) {
            shape.rotate(180) 
        }
    }
}
