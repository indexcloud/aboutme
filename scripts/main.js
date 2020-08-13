let myImage = document.querySelector('#imgMe');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/me.jpeg') {
        myImage.setAttribute('src','images/me2.jpeg');
    } else {
        myImage.setAttribute('src','images/me.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('#visitor');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Thank you for visiting this website, ' + myName + ', you are awesome!';
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Thank you for visiting this website, ' + storedName + ', you are awesome!';
}

myButton.onclick = function() {
    setUserName();
}

