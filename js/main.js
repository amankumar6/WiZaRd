let randomNumber = Math.floor(Math.random() * 4) + 1,
    audio = document.querySelector(".audio"),
    video = document.querySelector(".video"),
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

    $('canvas').css('opacity','1');
    $('.video').css('opacity','1');
    $('.mute').css('opacity','1');
    $('.intro').addClass('introLoaded');

    // text animation
    const text = baffle('.reveal');
    text.set({
        characters: '▓░▒ ▒/░▒░ ▓██<░ /▓░ /▒█░> ▓░▓▒ ░<▓ █░█▒ /░██',
        speed: 100,
    });
    text.start();
    text.reveal(2000, 1000);

    $('.follow').click(() => {
        $(".followMe").addClass("followMeActive")
        $(".followMe ul li a span").addClass("textAnimation")
        $("#particles-js").addClass("overlay")
        $("body").click(function (e) {
            if(e.target.className != "followMe" && e.target.className != "follow" ) close()
        });
    });

    $('.close').click(close);

    $('.mute').click(function (e) {
        e.preventDefault();
        $(".fa-volume-slash").toggleClass("fa-volume-up");
        isMuted = !isMuted;
        if (!isMuted) {
            audio.play()
            audio.currentTime = video.currentTime;
        } else audio.pause()
    });

    video.addEventListener('pause', () => audio.pause())
});

function close() {
    $(".followMe").removeClass("followMeActive")
    $(".followMe ul li a span").removeClass("textAnimation")
    $("#particles-js").removeClass("overlay")
}


console.log('___███████▀◢▆▅▃ 　　　   　　 　　　 ▀▀████ ___')
console.log('___██████▌◢▀█▓▓█◣   　　　　　　▂▃▃　 ████ ___')
console.log('__▐▐█████▍▌▐▓▓▉　　　　　　　◢▓▓█ ▼ ████ ___')
console.log('__ ▌██████▎　 ▀▀▀　　　　　　 　█▓▓▌ ▌ █████ ___')
console.log('_▐ ██████▊　 ℳ 　　　　　　　　▀◥◤▀    ▲████▉___')
console.log('_▊ ███████◣ 　　　　　　  ′　　　ℳ　 ▃◢██████▐___')
console.log('_ ▉ ████████◣ 　　　　 ▃、　　　　　◢███▊███ ___')
console.log('_▉　 █████████▆▃　　　　　　　 ◢████▌ ███  ___')
console.log('_ ▉　 ████▋████▉▀◥▅▃▃▅▇███▐██▋　▐██___')