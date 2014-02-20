// goal: be able to dynamically add to an existing list by entering text and clicking a button

window.onload = function() {
  var button,
      thing_list;

  // assign the list of favorites to a variable
  thing_list = document.getElementById('fav-list');

  // assign the submit button to a variable
  button = document.getElementById('new-thing-button');

  // this is what happens when you click on the button
  button.onclick = function(event) {
    event.preventDefault(); // prevent default behavior of the button (POST)
    MyApp.add_to_list(thing_list); // call the "add_to_list" method, defined below
    return false; // prevents default behavior from returning
  };
};

// We can define things outside of the window.onload which are evaluated
// only when called.
MyApp = {}; // namespacing

// defines the method "add_to_list", which is namespaced as MyApp.add_to_list
// you call it inside of window.onload as MyApp.add_to_list(args)
MyApp.add_to_list = function(list) {
  var new_li = document.createElement('li'),
      new_item_text = document.getElementById('new-thing');
  new_li.innerHTML = new_item_text.value;
  new_item_text.value = "";
  if (new_li.innerHTML !== "") {
    list.appendChild(new_li);
  }
  return true;
}

