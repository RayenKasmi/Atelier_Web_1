
//setting up selectors
const refresh_text_button = document.querySelector("#texteButton");
const refresh_style_button = document.querySelector("#textStyleButton");
const text_box = document.querySelector("#text_box");

//setting up input and style selectors
const new_text_input = document.querySelector("#textInput");
const color_select = document.querySelector("#colorSelect");
const font_select = document.querySelector("#fontSelect");
const size_select = document.querySelector("#fontSize");

//setting up event listeners for buttons
refresh_text_button.addEventListener('click',refreshTexte)
refresh_style_button.addEventListener('click',refreshStyle)

function refreshTexte(){
    //get input
    var input = new_text_input.value;
    //updates text
    text_box.textContent = input;
}

function refreshStyle(){
    // get color 
    var color = color_select.options[color_select.selectedIndex].value;
    // get font 
    var font = font_select.options[font_select.selectedIndex].value;
    //get size
    var size = size_select.value;
    //get bold and italics
    const bold_select = document.querySelector('#bold_box');
    const isBold = bold_select.checked;
    const italics_select = document.querySelector('#italic_box');
    const isItalics = italics_select.checked;

    //updates text style
    text_box.style.color = color;
    text_box.style.fontSize = size + "px";
    text_box.style.fontFamily = font;

    if(isBold){
        text_box.style.fontWeight = 'bold';
    }
    else{
        text_box.style.fontWeight = '';
    }
    
    if(isItalics){
        text_box.style.fontStyle = 'italic';
    }
    else{
        text_box.style.fontStyle = '';
    }

}

color_select.addEventListener("change",refrechColorSelectBackgroundColor);

function refrechColorSelectBackgroundColor(){
    // get color 
    var background_color = color_select.options[color_select.selectedIndex].value;
    //refrech background color
    color_select.style.backgroundColor = background_color;
}

// Initial call to set the background color of color select when the page loads
refrechColorSelectBackgroundColor();















