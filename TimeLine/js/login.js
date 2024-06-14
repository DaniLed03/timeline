$(document).ready(function() {
    $('.input').on('focus', function() {
        $(this).parent().parent().addClass('focus');
    }).on('blur', function() {
        if ($(this).val() === '') {
            $(this).parent().parent().removeClass('focus');
        }
    });

    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();

        if (username === "" || password === "") {
            alert("Por favor, complete ambos campos.");
        } else if (username === "demo" && password === "demo123") {
            window.location.href = "timeline.html";
        } else {
            alert("Credenciales incorrectas. Inténtelo de nuevo.");
        }
    });
});
