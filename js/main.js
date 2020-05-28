function checkForm() {

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var pass = document.getElementById("pass");
    var confpass = document.getElementById("confpass");
    var genderSelector = document.getElementById("gender_");
    var email = document.getElementById("mail");
    var phoneNum = document.getElementById("phone");
    var postalCode = document.getElementById("p_code");

    ///////////////////////////////////////////////////////
    if (allLetter_fname(fname)) {
        if (allLetter_lname(lname)) {
            if (phonenumber(phoneNum)) {
                if (ValidateEmail(email)) {
                    if (pass_validation(pass)) {
                        if (matchpass(pass, confpass)) {
                            if (genderSelect(genderSelector)) {
                                if (allnumeric(postalCode, fname)) {}

                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
/////////////////////////////////////////////////////////////
function allLetter_fname(fname) {
    var letters = /^[A-Za-z]+$/;
    if (fname.value == null || fname.value == "") {
        swal("First Name can't be blank!", " ", "error");
        fname.focus();
        return false;
    }
    if (fname.value.match(letters)) {
        return true;
    } else {
        swal('Username must have alphabet characters only', " ", "error");
        fname.focus();
        return false;
    }

}

function allLetter_lname(lname) {
    var letters = /^[A-Za-z]+$/;
    if (lname.value == null || fname.value == "") {
        swal("Last Name can't be blan!", " ", "error");
        lname.focus();
        return false;
    }

    if (lname.value.match(letters)) {
        return true;
    } else {
        swal("last name must have alphabet characters only!", " ", "error");
        lname.focus();
        return false;
    }
}
//Dia000&&
//Diaa
function pass_validation(pass) {
    var pass_len = pass.value.length;
    if (pass_len == 0 || pass_len > 8 || pass_len < 8) {
        swal("Password should not be empty !", "length must be 8", "error");
        pass.focus();
        return false;
    } else {
        var checker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/;
        if (pass.value.match(checker)) {
            if (pass.value.charAt(0).toUpperCase()) {
                return true;
            }
            if (pass.value.indexOf(' ') >= 0) {
                swal("Password can't contain whitespace!", " ", "error");
                pass.focus();
                return false;
            }
        } else {
            swal("Password must contain one digit and one special character at least and starts with uppercase character!", " ", "error");
            pass.focus();
            return false;
        }
    }
}

function matchpass(pass, confpass) {
    if (pass.value == confpass.value) {
        return true;
    } else {
        swal("password must be same!", " ", "warning");
        confpass.focus();
        return false;
    }
}





function genderSelect(genderSelector) {
    if (genderSelector.value == "Default") {
        swal("Select your Gender from the list", " ", "warning");
        genderSelector.focus();
        return false;
    } else {
        return true;
    }
}

function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    } else {
        swal("You have entered an invalid email address!", " ", "error");
        email.focus();
        return false;
    }
}

function phonenumber(phoneNum) {
    var ph_lenght = phoneNum.value.length
    if (ph_lenght == 11) {
        return true;
    } else {
        swal("Enter Valid Phone Number!", " ", "warning");
        phoneNum.focus();
        return false;
    }
}

function allnumeric(postalCode, fname) {
    var numbers = /^[0-9]+$/;
    if (postalCode.value.match(numbers)) {
        swal('Hi '+ fname.value, "Welcome To ZOLA ", "success");
        return true;
    } else {
        swal("postal Code must have numeric digits only!", " ", "error");
        postalCode.focus();
        return false;
    }
}


/*==================================================================*/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


////////////////////////////////////////////////////////////////////////////////////////

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".rev_form").offset().top},
        1800);
});

$("input.button").click(function() {
    $('html,body').animate({
        scrollTop: $(".smotop").offset().top},
        1800);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
