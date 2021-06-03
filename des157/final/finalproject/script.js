(function () {
    'use strict';

    let form = document.getElementById('input');
    let dict = {};

    const mario = document.getElementById('mario');
    const blocks = document.getElementsByClassName('block');
    const text = document.getElementsByClassName('text');

    const wahooSound = new Audio('media/wahoo.mp3');
    const miniJumpSound = new Audio('media/minijump.wav');
    miniJumpSound.volume = 0.5;

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
            wahooSound.play();

            populateDict(dict, words);
            makeMadLib(dict);

            mario.style.transform = 'translateX(11vw) translateY(-5vh)';
            mario.style.transition = 'all 1s';
            showText(text[0], text);
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
                    textDiv.innerHTML = `<p> Mario, on his way to save Princess Peach from the terrible Bowser, stumbled upon a <span class="emphasize">${dict['noun1']}</span>. Upon closer glance, Mario couldn’t help but notice that the <span class="emphasize">${dict['noun1']}</span> was both <span class="emphasize">${dict['adj1']}</span> and <span class="emphasize">${dict['adj2']}</span>. </p>`;
                    break;
                case 'text2':
                    textDiv.innerHTML = `<p> “Wahoo! This <span class="emphasize">${dict['noun1']}</span> is just what I needed to beat Bowser.” said Mario emphatically. And with that, Mario began to <span class="emphasize">${dict['verb1']}</span> towards Bowser’s castle. </p>`;
                    break;
                case 'text3':
                    textDiv.innerHTML = `<p> At the foot of the castle stood a great <span class="emphasize">${dict['noun2']}</span>. With great caution, Mario <span class="emphasize">${dict['verb2']}</span> the <span class="emphasize">${dict['noun2']}</span>, but behold, it was a trap! Bowser sprang out from behind the castle doors, but alas, Mario was ready! </p>`;
                    break;
                case 'text4':
                    textDiv.innerHTML = `<p> In the blink of an eye, Mario pulled out the <span class="emphasize">${dict['noun1']}</span> and <span class="emphasize">${dict['verb1']}</span> Bowser in his <span class="emphasize">${dict['adj1']}</span> foot, knocking him unconscious. Behind <span class="emphasize">${dict['noun2']}</span> lay Princess Peach, <span class="emphasize">${dict['adj2']}</span> but unharmed. Mario <span class="emphasize">${dict['verb2']}</span> Princess Peach, scooping her into his arms and saving the day. </p>`;
                default:
                    break;
            }
        }
    }

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
                    mario.style.transform = 'translateX(11vw) translateY(-5vh)';
                    mario.style.transition = 'all 1s';
                    break;
                case 'block2':
                    mario.style.transform = 'translateX(26vw) translateY(-5vh)';
                    mario.style.transition = 'all 1s';
                    break;
                case 'block3':
                    mario.style.transform = 'translateX(41vw) translateY(-5vh)';
                    mario.style.transition = 'all 1s';
                    break;
                case 'block4':
                    mario.style.transform = 'translateX(56vw) translateY(-5vh)';
                    mario.style.transition = 'all 1s';
                    break;
                default:
                    break;
        }
    }

    for (let block of blocks) {
        block.addEventListener('click', function(e) {
            e.preventDefault();
            miniJumpSound.play();

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