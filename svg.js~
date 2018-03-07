
var pic = document.getElementById("vimage");

var beep = document.getElementById("beep");


var create_dot_random = function(){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("fill", "red");
    var x = Math.floor(Math.random() * Math.floor(600));
    var y = Math.floor(Math.random() * Math.floor(600));
    c1.setAttribute("cx", x);
    c1.setAttribute("cy", y);
    c1.setAttribute("r", 10)
	pic.appendChild(c1);

    c1.addEventListener("click", change_color, true);
}




var create_dot = function(e){
    console.log(this.tagName);
    if (this === e.target){
    console.log(this.tagName);
    e.preventDefault();
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("fill", "red");
    c1.setAttribute("cx", e.offsetX);
    c1.setAttribute("cy", e.offsetY);
    c1.setAttribute("r", 10)
    pic.appendChild(c1);

    c1.addEventListener("click", change_color, true); 
    }
    else {
	console.log("else");
    }


    
}

    var change_color = function(e){
       
	console.log("LOGGING THIS...");
	console.log(this);
	this.setAttribute("fill","blue");
	this.addEventListener("click", function(){pic.removeChild(this); create_dot_random(); });
	

    }

pic.addEventListener("click", create_dot, true);


beep.addEventListener("click", function() {
	clear();
});

var clear = function(){
	var fc = pic.firstChild;
	while(fc){
	    pic.removeChild(fc);
	    fc = pic.firstChild;
	}

}


	
	
	
