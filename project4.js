$(document).ready(function () {
    $('.genrate-btn').click(function () {
        var randomcolor = '';
        var characters = '0123456789abcdef';
        for (let i = 0; i < 6; i++) {
            randomcolor = randomcolor + characters[Math.floor(Math.random() * 16)]
        }

        $('#inputField').val('#' + randomcolor)
        $('#inputField').css({
            'border-color': "#" + randomcolor,
            'color': '#' + randomcolor
        })

        $('.color-preview, .copy-btn').css('background-color', '#' + randomcolor)

    })

    function add() {
        $('.alert-msg').addClass('bounce-effect');
    }
    function remove() {
        $('.alert-msg').removeClass('bounce-effect')
    }

    $('.copy-btn').click(function () {
        $('#inputField').select();
        document.execCommand('copy');
        add();
        setTimeout(remove, 2000)
        $('.alert-msg span').text($('#inputField').val())
    })

})