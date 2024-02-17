// Setting up selector
const olSelector = document.querySelector("ol");

// Added event listener
olSelector.addEventListener('click', function changeColor(event){
    // Setting up selector for the clicked li
    const clicked_li = event.target;

    // Updating color
    clicked_li.style.color = generateColor();
});

function generateColor(){
    // Setting up random color values
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}