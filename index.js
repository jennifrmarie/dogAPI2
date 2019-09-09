'use strict';

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