var ca = document.getElementById( "can" );
var c = ca.getContext("2d");
var w = document.getElementById("mainwrapper").clientWidth;
var h = 0.5*document.getElementById("mainwrapper").clientHeight;
c.canvas.width = w;
c.canvas.height = h;

function background( co )
{
	c.fillStyle = co;
	c.fillRect( 0, 0, w, h );
}
var margin = 60;
var size = Math.min( w, h*2 ) - margin;
var height = size/2;
var width = size;
var defaultWidth = width;
var defaultHeight = height;
var col = "red";
var increment = defaultWidth/10;
var counting = false;
var m = 0;
var s = 30;
var totalS = 30;
function countdown()
{
	m = parseInt( document.getElementById( 'm').value );
	s = parseInt( document.getElementById( 's').value );
	totalS = ( m * 60 ) + s;
	increment = defaultWidth / totalS;
	width = size;
	counting = true;
}
function move()
{
	if( counting )
	{
		if( s + m > 0  )
		{
			width -=increment;
			if( s > 0 )
			{
				s--;
			}
			else
			{
				m--;
				s = 59;
			}
		}
		else
		{

		}
	}
	
}
function draw()
{
	background( "#fff");
	c.fillStyle = col;
	c.fillRect( w/2 - defaultWidth/2 , 20, width , height);
	c.strokeStyle = "#000";
	c.lineWidth = 10;
	c.strokeRect( w/2 - defaultWidth/2 , 20, defaultWidth , defaultHeight);
	document.getElementById( "time").innerHTML =  m + ":" + toString( s );
}

function toString( num )
{
	if( num < 10 )
	{
		return "0" + num;
	}
	return "" + num;
}
draw();
setInterval( move, 1000 );
setInterval( draw, 200 );