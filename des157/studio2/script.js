 (function () {
    'use strict';

    const images = [
        'image1.jpeg',
        'image2.jpeg',
        'image3.jpeg',
        'image4.jpeg',
        'image5.jpeg'
    ];
    const slide = document.getElementById('slideshow-images');
    let currentImage = 0;

    document.getElementById('next').addEventListener('click', nextPhoto);
    document.getElementById('previous').addEventListener('click', previousPhoto);

    function nextPhoto() {
        currentImage++;

        if (currentImage > images.length - 1) {
            currentImage = 0;
        }
        slide.src = `images/${images[currentImage]}`;
    }

    function previousPhoto() {
        currentImage--;

        if (currentImage < 0) {
            currentImage = images.length - 1;
        }
        slide.src = `images/${images[currentImage]}`;
    }

    document.querySelector('img').addEventListener('click', function(e) {
        e.preventDefault();

        const src = e.target.getAttribute('src');
        const article = document.querySelector('article');
        article.innerHTML = '<button class="corner close">&otimes;</button>';
        let h2 = '';
        let p = '';

        switch(src) {
            case `images/${images[0]}`:
                h2 = '<h2> Mechanical Keyboards </h2>';
                p = "<p> Mechanical keyboards are clicky, clacky, loud, and what most would consider obnoxious. Think of an old-school IBM keyboard with the chonky keycaps. When you type on a mechanical keyboard, you'll know it. In fact, your neighbors and your neighbors' neighbors will know it. And thats exactly what forms the appeal for me along with the other millions of keyboard enthusiasts out there. They are fully customizable, from their looks and feel down to even their sound signature, and building one from scratch can be likened to building an adult set of Legos. For many, the process of building and typing is theraupetic and gives great joy. Others swear by their necessity and will even go so far as to deny the use of normal membrane keyboards after delving into the hobby. It is a rabbit hole, a deep one at that, but one full of marvel and excitement. </p>"
                article.innerHTML += h2;
                article.innerHTML += p;
                break;
            
            case `images/${images[1]}`:
                h2 = '<h2> Anatomy </h2>';
                p = "<p> Is the sum of its parts greater than the whole or is the whole simply just the sum of its parts? A mechanical keyboard is made up of the following parts; the case, pcb, plate, switches, stabilizers, and keycaps. All these are important and serve their own function. Without one, the keyboard would be incomplete at best and non-functional at worst. The anatomy of a keyboard is important to the keyboard enthusiast because every single component, and I mean every single component, is customizable to suit one's own preference. The only limiting is how much one is willing to spend for that experience. </p>"
                article.innerHTML += h2;
                article.innerHTML += p;
                break;

            case `images/${images[2]}`:
                h2 = '<h2> PCB </h2>';
                p = "<p> Perhaps the most critical component is the PCB, or printed circuit board. This piece of circuit transforms physical switch actuations to electric signals that are sent to the computer as keypresses. The switches are connected to the PCB via pins, and the PCB is connected to the computer via the USB cable. </p>"
                article.innerHTML += h2;
                article.innerHTML += p;
                break;

            case `images/${images[3]}`:
                h2 = '<h2> Switches </h2>';
                p = "<p> Switches act as the physical layer between the keycaps and PCB. By pressing, or actuating a switch, the physical action is converted to an electrical signal via the PCB. Switches can vary vastly in operation force, activation point, travel distance, tactile position, and reset point. They are the main component behind the 'feel' of a keyboard. They can be linear (smooth the entire way down while pressing the switch), tactile (provide a noticeable bump in the middle of travel to signal the switch has been actuated), clicky (similar to tacticle but with a more distinct audtiory feedback), and everything in between. Switches are fully customizable and investing in that customization can make or break a premium typing experience. </p>"
                article.innerHTML += h2;
                article.innerHTML += p;
                break;

            case `images/${images[4]}`:
                h2 = '<h2> Switches Anatomy </h2>';
                p = "<p> Switches are made up of several parts. The stem is responsible for the actuation and travel distance of the switch. They create the keystroke feel and determine the switch type. The upper housing protects and guides the stem. The resistance of the coil spring determines the amount of pressure needed to actuate the key. The base housing attaches and clips to the PCB. The crosspoint contact hits the PCB and closes the switch circuit, which renders a key press. It is common to lubricate the stem and spring with oil to improve the smoothness and feel of the switch. </p>"
                article.innerHTML += h2;
                article.innerHTML += p;
                break;
        };

        document.getElementById('overlay').className = 'showing';

        document.querySelector('.close').addEventListener('click', function(e) {
            e.preventDefault();
    
            document.getElementById('overlay').className = 'hidden';
            article.innerHTML = '';
        });
    });


    document.addEventListener('keydown', function(e) {
        e.preventDefault();
        const article = document.querySelector('article');

        if (e.key === 'Escape') {
            document.getElementById('overlay').className = 'hidden';
            article.innerHTML = '';
        } else if (e.key === 'ArrowLeft') {
            previousPhoto();
        } else if (e.key === 'ArrowRight') {
            nextPhoto();
        }
    });

 })();