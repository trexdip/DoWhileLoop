var i=0;
var counter=true;
var x=5;
var y=10;
var array=new Array()

function conditional()
	{
		if(x+y>57)
			{
				counter=false;
			}
	}
function conditional1()
	{
		if ((x+y)==19)
		{
			console.log("Number of Iterations completed:"+i)
		}
	}


while(counter)
{
	i=i+1;
	console.log("Simple example of While Loop");
	x=x+1;
	y=y+1;
	conditional1();
	conditional();
}
