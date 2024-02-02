let form = document.querySelector(".registerForm");
let result = document.querySelector(".result");

form.onsubmit = function(e){
    e.preventDefault();
    let elements = e.target.elements;
    if(elements['exchange'].value == 'dollar'){
        result.textContent = (elements['amount'].value * 3.5);
    }
    else if(elements['exchange'].value == 'dinar'){
        result.textContent = (elements['amount'].value * 5);
    }
    else if(elements['exchange'].value == 'nis'){
        result.textContent = (elements['amount'].value);
    }
}