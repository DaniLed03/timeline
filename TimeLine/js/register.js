$(document).ready(function() {
    $('.input').on('focus', function() {
        $(this).parent().parent().addClass('focus');
    }).on('blur', function() {
        if ($(this).val() === '') {
            $(this).parent().parent().removeClass('focus');
        }
    });

    $('#gender').change(function() {
        if ($(this).val() === 'Otro') {
            $('#otherGender').show();
        } else {
            $('#otherGender').hide();
        }
    });

    $('#registerForm').on('submit', function(e) {
        e.preventDefault();
        var isValid = true;
        var errorMessage = "Por favor, complete los siguientes campos:\n";
        
        // Validate required fields
        $('#registerForm').find('input, select').each(function() {
            if ($(this).val() === "" && $(this).prop('required')) {
                isValid = false;
                errorMessage += "- " + $(this).prev('label').text() + "\n";
            }
        });

        // Additional email validation
        var email = $('#email').val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            errorMessage += "- Email no válido\n";
        }

        // Password match validation
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
        if (password !== confirmPassword) {
            isValid = false;
            errorMessage += "- Las contraseñas no coinciden\n";
        }

        // Gender validation
        if ($('#gender').val() === "Seleccione") {
            isValid = false;
            errorMessage += "- Seleccione un género\n";
        }

        // Age validation
        var birthDate = new Date($('#birthDate').val());
        var today = new Date();
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            isValid = false;
            errorMessage += "- Debe ser mayor de 18 años\n";
        }

        if (isValid) {
            alert("Registro exitoso.");
        } else {
            alert(errorMessage);
        }
    });
});
