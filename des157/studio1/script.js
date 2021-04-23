(function () {
    'use strict';

    let form = document.getElementById('input');
    let display = document.getElementById('display');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let formData = document.querySelectorAll('input[type=text]');
        processData(formData);
    });

    function processData(formData) {
        let emptyFields = 0;
        let words = [];

        for (let word of formData) {
            if (word.value) {
                words.push(word.value);
                word.value = '';
            } else {
                emptyFields++;
            }
        }

        if (emptyFields > 0) {
            display.innerHTML = 'Please fill out all the fields';
        } else {
            console.log(words);
            makeMadLib(words);
        }
    }

    function makeMadLib(wordArr) {
        let words = '';
        for (var word of wordArr) {
            words = words + word + ' '
        }
        let text = `Your words are: ${words}`;
        display.innerHTML = text;
    }
}());