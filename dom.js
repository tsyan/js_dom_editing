// goal: be able to dynamically add to an existing list by entering text and clicking a button
// the page never reloads or refreshes! we are changing the underlying DOM directly

// this will run only when the page is finished loading
window.onload = function() {
  var button,
      thing_list;

  // get existing list of favorites and assign to a variable
  thing_list = document.getElementById('fav-list');

  // get existing submit button and assign to a variable
  button = document.getElementById('new-thing-button');

  // this is what happens when you click on the button
  button.onclick = function(event) {
    // prevent default behavior of the button (POST, etc.) so that the button action is handled entirely in JavaScript
    event.preventDefault();
    // call the "add_to_list" method, defined below, on the "thing_list" that we got
    MyApp.add_to_list(thing_list);
    // prevent default behavior from returning
    return false;
  };
};

// We can define things outside of the window.onload which are evaluated
// only when called.
MyApp = {}; // namespacing

// defines the method "add_to_list", which is namespaced as MyApp.add_to_list
// you call it inside of window.onload as MyApp.add_to_list(args)
// or if you wanted, you could create a new MyApp object, and then call .add_to_list on that object, but you don't have to
MyApp.add_to_list = function(list) {

  // create a new <li></li> element and assign to variable
  var new_li = document.createElement('li'),
      // find the element with id 'new-thing' in the html (i.e. the user input), and assign it to variable
      new_item_text = document.getElementById('new-thing');

  // take the user input and set it as the inner HTML of the new element
  new_li.innerHTML = new_item_text.value;

  // now that user input has been dealt with, the textbox will be blank
  new_item_text.value = "";

  // only if the user input is not blank, append the new item as a child of the list that was passed in to the function
  if (new_li.innerHTML !== "") {
    list.appendChild(new_li);
  };

  // it's not necessary to return anything here, but it's nice to have confirmation that the function executed
  return true;
};

