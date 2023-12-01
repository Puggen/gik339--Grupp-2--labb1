
const myCheckbox = document.getElementById('divStyle');

const myTextfield = document.getElementsByClassName('textfield');

const myButton = document.querySelector('#btn');

const myDiv = document.getElementById('div');

myButton.addEventListener('click', function() {
    console.log(myButton);
    myDiv.remove();

});

myCheckbox.addEventListener('click', function() { 
    console.log(myCheckbox);
    getvalue();
    
});


for (let i = 0; i < myTextfield.length; i++) {
    myTextfield[i].addEventListener('input', function() {
    var input = myTextfield[1].value;
    myDiv.innerHTML=input;
    console.log(myTextfield[i]);
    });
    
}


function getvalue(){
    var inputValue = myTextfield[0].value;
    myDiv.style.backgroundColor = inputValue;
}  
 