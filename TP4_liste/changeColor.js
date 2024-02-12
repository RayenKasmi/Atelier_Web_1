// Setting up selector
const olSelector = document.querySelector("ol");

// Added event listener
olSelector.addEventListener('click', function changeColor(event){
    // Setting up selector for the clicked li
    const clicked_li = event.target;
    // Setting up random color values
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var color = `rgb(${red}, ${green}, ${blue})`;
    // Updating color
    clicked_li.style.color = color;
});