// function for landing page to listen to user submit
// function that listens for user to click
// function that determines the number the user inputs and 
// function that displays results based on number input


'use strict';

// function getDogImage() {
//     let urlAdd = $("#text").val();
//     let fetchPromise = fetch("https://dog.ceo/api/breeds/image/random/" + urlAdd);
//     console.log(fetchPromise)
//     const userInput = document.getElementById("text");
//     fetchPromise.then(response => {
//         return response.json();
//     }).then(url => {
//         displayResults(url);
//     })
//     // userInput.innerHTML = url;
//     // fetchPromise.then(results => {
//         // displayResults(responseJson);
//     // })

// }

function getDogImage() {
    let url = "https://dog.ceo/api/breeds/image/random/" + $('#text').val();
    $.getJSON(url)
    .then((res) => {
        let dogArr = res.message
        for (let i = 0; i < dogArr.length; i++) { 
            $('.results-img').append(`  
            <img src='${dogArr[i]}' width="300px" height="300px">`)
        } 
    })
    .catch((error) => console.log(error));
}





function watchForm() {
    $('#btn').click(event => {
        event.preventDefault();
        $('.results-img').empty();
        getDogImage();
    });
}


$(function () {
    console.log('loaded, waiting for submit');
    watchForm()
});