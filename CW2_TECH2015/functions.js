// Toggles the visibility of element with "id" by alternating
// between "block" and "none" display properties in CSS
function toggleElement(id) {
	var elem = document.getElementById(id);
	if (elem.style.display === "none") {
		elem.style.display = "block";
	} else {
		elem.style.display = "none";
	}
}

// Following two functions call the function above
// with different IDs
function toggleCart() {
	toggleElement("basket");
}
function toggleMenu() {
	toggleElement("nav-list");
}

// Adds a product to the basket
function addItem(target) {
	// Acquire necessary elements as variables
	var basket = document.getElementById("basket-list");
	var emptytext = document.getElementById("empty-text");

	// The "target" passed to the function is the button
	// that called it when it was pressed
	//
	// parentElement gets the whole product box which contains
	// the button, including the image, price and the button itself
	var product = target.parentElement;

	// Append the product HTML to the contents of the basket
	// (CSS ensures it is displayed correctly)
	basket.innerHTML += product.outerHTML;

	// Hide the text that displays when basket is empty
	emptytext.style.display = "none";
}
