
var pic = document.getElementById("vimage");

var beep = document.getElementById("beep");


//var foo = new Object()l
// foo.name= "bar"
// etc

//or

// var foo{ name: "bar";
//          jump: function(){
//          blah blah }'

//foo.jump()


pic.addEventListener("click", function(e){add_dot(e);}, true);

// creates an object dot, with necessary accessor and mutator methods
var construct_dot = function(x, y, r, c){
    console.log(c);
    var dot = { xcor:x , ycor : y, radius : r, col: c};
    dot.displayer = create_dot(dot),
    dot.display = function(){
	console.log("DOTS COLOR IS: ");
	console.log(dot.col);
	dot.displayer = create_dot(dot);
  console.log(dot.displayer);
	pic.appendChild(dot.displayer);

	}
    dot.remove = function() {pic.removeChild(dot.displayer);};
    dot.changex= function(new_x) { xcor = dot.new_x;};
    dot.changex= function(new_y) { ycor = dot.new_y;};
    dot.change_color= function(new_col) { console.log("changing color..."); dot.col = new_col;};
    dot.getx= function() {return dot.xcor;};
    dot.gety= function() {return dot.ycor;};
    dot.get_radius= function() {return dot.radius;};
    dot.get_color= function() {return dot.col;};

    return dot;
}


    var add_dot = function(e){
	if (e.target.tagName === "svg"){
	    dot = construct_dot(e.offsetX, e.offsetY, 20, "red");
	    dot.display();
	    dot.displayer.addEventListener("click", function() {dot.change_color("blue"); dot.remove(); dot.display(); dot.displayer.addEventListener("click", function() {dot.remove(); add_dot_random();}, true);}, true);
	    // uncomment this: why isnt it working?

	}
	else {
	    console.log(e.target);
  }
    }



    var remove = function(item){
	pic.removeChild(item);
    }


    var add_dot_random = function() {
    dot = construct_dot(Math.random() * 600, Math.random() * 600, 20, "red");
    console.log("dot is to change color when clicked");
    dot.displayer.addEventListener("click", function() {dot.change_color("blue"); dot.display();}, true);
    }

var create_dot = function(dot){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("fill", dot.col);
    c1.setAttribute("cx", dot.xcor);
    c1.setAttribute("cy", dot.ycor);
    c1.setAttribute("r", dot.radius);
    return c1;
}






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
