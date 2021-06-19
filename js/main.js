let randomNumber = Math.floor(Math.random() * 4) + 1,
    audio = document.querySelector('.audio'),
    video = document.querySelector('.video'),
    isMuted = true;

$(document).ready(function () {
    switch (randomNumber) {
        case 1:
            $('#loader').addClass('loaded1');
            break;
        case 2:
            $('#loader').addClass('loaded2');
            break;
        case 3:
            $('#loader').addClass('loaded3');
            break;
        case 4:
            $('#loader').addClass('loaded4');
            break;
        default:
            $('#loader').addClass('loaded1');
    }

    $('canvas').css('opacity', '1');
    $('.video').css('opacity', '1');
    $('.mute').css('opacity', '1');
    $('.intro').addClass('introLoaded');

    // text animation

    let elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    let css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
    document.body.appendChild(css);

    $('.follow').click(() => {
        $('.followMe').addClass('followMeActive');
        $('.followMe ul li a span').addClass('textAnimation');
        $('#particles-js').addClass('overlay');
        $('body').click(function (e) {
            if (
                e.target.className != 'followMe' &&
                e.target.className != 'follow'
            )
                close();
        });
    });

    $('.close').click(close);

    $('.mute').click(function (e) {
        e.preventDefault();
        $('.fa-volume-slash').toggleClass('fa-volume-up');
        isMuted = !isMuted;
        if (!isMuted) {
            audio.play();
            audio.currentTime = video.currentTime;
        } else audio.pause();
    });

    video.addEventListener('pause', () => audio.pause());
});

function close() {
    $('.followMe').removeClass('followMeActive');
    $('.followMe ul li a span').removeClass('textAnimation');
    $('#particles-js').removeClass('overlay');
}

function TxtType (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

console.log('___███████▀◢▆▅▃ 　　　   　　 　　　 ▀▀████ ___');
console.log('___██████▌◢▀█▓▓█◣   　　　　　　▂▃▃　 ████ ___');
console.log('__▐▐█████▍▌▐▓▓▉　　　　　　　◢▓▓█ ▼ ████ ___');
console.log('__ ▌██████▎　 ▀▀▀　　　　　　 　█▓▓▌ ▌ █████ ___');
console.log('_▐ ██████▊　 ℳ 　　　　　　　　▀◥◤▀    ▲████▉___');
console.log('_▊ ███████◣ 　　　　　　  ′　　　ℳ　 ▃◢██████▐___');
console.log('_ ▉ ████████◣ 　　　　 ▃、　　　　　◢███▊███ ___');
console.log('_▉　 █████████▆▃　　　　　　　 ◢████▌ ███  ___');
console.log('_ ▉　 ████▋████▉▀◥▅▃▃▅▇███▐██▋　▐██___');
