// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 5, dy = 5, r = 30, color = "#5F8FB4" ;
let x1 =canvas.width, y1 =0, dx1 = 5, dy1 = 5, r1 = 30, color1 = "#f1d2e7" ;

// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}


// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x = x + dx;
    y = y + dy;

    x1 = x1 + dx1;
    y1 = y1 + dy1;
    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...
	if(x<0 || x > canvas.width) 
	{ dx = -dx; color = "#5F8FB4";}
	if(y<0 || y > canvas.height)
    { dy = -dy;color = "#cee5d5";}
    
	if(x1<0 || x1 > canvas.width) 
	{ dx1 = -dx1; color1 = "#f1d2e7";}
	if(y1<0 || y1 > canvas.height)
    { dy1 = -dy1;color1 = "#d9598c";}
    
	if((x-x1)*(x-x1)+(y-y1)*(y-y1)<=(r-r1)*(r-r1)) 
	[dx,dy,dx1,dy1]=[dx1,dy1,dx,dy];
	
    drawBall(x, y, r, color);
	drawBall(x1, y1, r1, color1);
	
	requestAnimationFrame(draw);
}
draw();