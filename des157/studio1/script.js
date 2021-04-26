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

    let blocks = document.getElementsByClassName('block');
    let mario = document.getElementById('mario');

    for (let block of blocks) {
        block.addEventListener('click', function(e) {
            e.preventDefault();

            let block_num = block.id;
            switch(block_num) {
                case 'block1':
                    mario.style.transform = 'translateY(0vh)';
                    mario.style.transition = 'all 1s';
                    break;
                case 'block2':
                    mario.style.transform = 'translateY(20vh)';
                    mario.style.transition = 'all 1s';
                    break;
                case 'block3':
                    mario.style.transform = 'translateY(40vh)';
                    mario.style.transition = 'all 1s';
                    break;
                case 'block4':
                    mario.style.transform = 'translateY(60vh)';
                    mario.style.transition = 'all 1s';
                    break;
                default:
                    break;
            }
        });
    }

}());