(function () {
    'use strict';

    let form = document.getElementById('input');
    let dict = {};

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let formData = document.querySelectorAll('input[type=text]');
        processData(formData);
    });

    function populateDict(dict, wordArr) {
        dict['noun1'] = wordArr[0];
        dict['noun2'] = wordArr[1];
        dict['adj1'] = wordArr[2];
        dict['adj2'] = wordArr[3];
        dict['verb1'] = wordArr[4];
        dict['verb2'] = wordArr[5];
    }

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
            makeErrText();
        } else {
            populateDict(dict, words);
            makeMadLib(dict);
        }
    }

    function makeErrText() {
        let textDivs = document.getElementsByClassName('text');

        for (let textDiv of textDivs) {
            textDiv.innerHTML = "<p> Please fill out all the fields </p>";
        }
    }

    function makeMadLib(dict) {

        let textDivs = document.getElementsByClassName('text');

        for (let textDiv of textDivs) {
            let id = textDiv.id;

            switch(id) {
                case 'text1':
                    textDiv.innerHTML = `<p> Mario, on his way to save Princess Peach from the terrible Bowser, stumbled upon a ${dict['noun1']}. Upon closer glance, Mario couldn’t help but notice that the ${dict['noun1']} was both ${dict['adj1']} and ${dict['adj2']}. </p>`;
                    break;
                case 'text2':
                    textDiv.innerHTML = `<p> “Wahoo! This ${dict['noun1']} is just what I needed to beat Bowser.” said Mario emphatically. And with that, Mario began to ${dict['verb1']} towards Bowser’s dungeon. </p>`;
                    break;
                case 'text3':
                    textDiv.innerHTML = `<p> At the foot of the dungeon stood a great ${dict['noun2']}. With great caution, Mario ${dict['verb2']} the ${dict['noun2']}, but behold, it was a trap! Bowser sprang out from behind the dungeon doors and wrapped up the subdued Mario with chains. </p>`;
                    break;
                case 'text4':
                    textDiv.innerHTML = `<p> With both Mario and Princess Peach locked up, it was all now up to Luigi to save the day. Stay tuned for part 2! </p>`;
                default:
                    break;
            }
        }
    }

    let mario = document.getElementById('mario');
    let blocks = document.getElementsByClassName('block');
    let text = document.getElementsByClassName('text');

    function showText(text, textArr) {
        for (let box of textArr) {
            let num = box.id[box.id.length - 1];
            let triangle = 'triangle' + num;

            if (box.id == text.id) {
                document.getElementById(text.id).className = 'text showing';
                document.getElementById(triangle).className = 'triangle showing';

            } else {
                document.getElementById(box.id).className = 'text hidden';
                document.getElementById(triangle).className = 'triangle hidden';
            }
        }
    }

    function transformMario(mario, block) {
        switch(block) {
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
    }

    for (let block of blocks) {
        block.addEventListener('click', function(e) {
            e.preventDefault();

            let block_num = block.id;
            switch(block_num) {
                case 'block1':
                    transformMario(mario, block_num);
                    showText(text[0], text);
                    break;
                case 'block2':
                    transformMario(mario, block_num);
                    showText(text[1], text);
                    break;
                case 'block3':
                    transformMario(mario, block_num);
                    showText(text[2], text);
                    break;
                case 'block4':
                    transformMario(mario, block_num);
                    showText(text[3], text);
                    break;
                default:
                    break;
            }
        });
    }

}());