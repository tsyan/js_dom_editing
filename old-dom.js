window.onload = function() {
	var things_list = document.getElementById('fav-list');

	button = document.getElementById('new-thing-botton');
	button.onclick = MyApp.add_to_list(things_list);

};




window.onload = function() {
	var new_thing_1 = prompt("Enter another favorite thing: "),
			new_thing_2 = prompt("Enter another favorite thing: "),
			new_thing_3 = prompt("Enter another favorite thing: "),
			things_list = document.getElementById("fav-list");

	MyApp.add_to_list(things_list);
	MyApp.add_to_list(things_list);
	MyApp.add_to_list(things_list);

};


MyApp = {};

MyApp.add_to_list = function(list) {
	var new_li = document.createElement('li'),
			new_item_text = document.getElementById('new-thing');
	new_li.innerHTML = new_item_text.value;
	new_time_text.value = "";
	list.appendChild(new_li);
	return new_li; // you don't have to return anything here, but the confirmation is nice
}





// .onload means "do this only when the window has fully loaded"
window.onload = function() {
	var your_name = prompt("What is your name?");
	document.getElementById('name').innerHTML = your_name;
	my_method(); // Only runs when the page is loaded
};

// I can define methods and stuff out there, but they won't execute until the page is loaded
var my_method = function() {
	// stuff
};

.getElementById // returns a single element, searches by id
.getElementsByClassName // returns multiple elements, searches by class
.innerHTML // gets or sets the actual content inside the html tags
.children //
.parentNode //
.appendChild(); //

// so you could do...

var list = document.getElementById("fav-list");
list.innerHTML
list.children // direct children only, not further nested children

var things = document.getElementsByClassName("fav-thing");
things[0], things[1], etc.
things[0].innerHTML
things.parentNode // direct parent only

var new_thing = document.CreateElement('li');
new_thing.innerHTML = 'coffee';
list.appendChild(new_thing);

