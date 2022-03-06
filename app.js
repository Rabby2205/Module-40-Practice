// 1 . show output 3.5 second later when code is run .
const setTime = () => {
    console.log('this code is show the result after 3.5 second from exicution moment');
}
setTimeout(setTime, 3500);
// // 2 . if you want to see this web site or not then take dicision from below code .

const consfimButton = () => {
    const ok = confirm('do you want to see the href');
    if (ok === true) {
        location.assign('https://web.programming-hero.com/web-5/video/web-5-38-4-settimeout-simple-asynchronous-js-using')
    }
    else {
        alert('bye bye');
    }
}
// // 3 . take number from user and add with 5 and show the added result .
const mathButton = () => {
    const amountString = prompt('Enter the amount which you want to add with "5"');
    const amountValue = JSON.parse(amountString);

    const sum = 5 + amountValue;
    alert("your result is =" + ' ' + sum);
}

// 4 . what is cookies and purpose of cookies . 
/*
A cookies save your browsing data at browser when you visited a website it can recognize your device in future.

cookies are text file with small speices data like username and password that are identify your computer as you use a computer network . specific cookies known as HTTP cookies are use to identify specific user and improve browsig experience .
**/

// 5. local storage and session storages major differenciation is local storage saved data you can access until you do clear 
// but
// session storages saved data you can access until your browser colse . after close your browser you will loss your data . 

// 6 . How java-script run ?
/**
 * 
 * 
 * 
 */



