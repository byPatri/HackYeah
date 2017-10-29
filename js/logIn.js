
$(function () {
    console.log("start");

    $('.send').click(function () {

        console.log($(this).text());
        validate($(this).text());
    });
    $("input").on('focus', function () {
        $(this).removeClass("error");
    });
});

function validate(action) {
    var valid = true;
    $("form :input.form-control:visible").each(function () {
        //var input = $(this); // This is the jquery object of the input, do what you will
        if (!$(this).val()) {
            $(this).addClass("error");
            valid = false;
            $('.warning').removeAttr("hidden");
        } else {
            $('.warning').attr("hidden", "hidden");
            $(this).removeClass("error");
            $(this).addClass("success");
        }
        //console.log($(this).val());
    });
    if (action == "Sign in") {
        if ($('#sRepeatPassword').val() == $('#sPassword').val()) {
            $('.warningPassword').attr("hidden", "hidden");
            send(action);
        } else {
            $('#sRepeatPassword').removeClass("success");
            $('#sPassword').removeClass("success");
            $('#sRepeatPassword').val();
            $('#sPassword').val();
            $('.warningPassword').removeAttr("hidden");
        }
    } else {
        if (valid == true) {
            send(action);
        } else {
            $('.warning').removeAttr("hidden");
        }
    }

}
function send(action) {
    console.log('send');

    if (action == "Log in") {
        var obj = {
            "login": $('#lLogin').val(),
            "password": $('#lPassword').val(),
        };
    }else if (action == "Sign in") {
        var obj = {
            "email": $('#sLogin').val(),
            "first_name": $('#sFirstName').val(),
            "last_name": $('#sLastName').val(),
            "password": $('#sPassword').val(),
            "phone_nr": $('#sPhone').val(),
        };
    }
    var myJSON = JSON.stringify(obj);
    console.log(myJSON);

    toServer(myJSON);
}

function toServer(myJSON) {
    console.log('serwer responce');

    $.ajax({
        url: "10.240.212.152:3000/users",
        type: "POST",
        data: myJSON,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data, textStatus, jqXHR) {

            console.log(data);
        }
    });

    $(location).attr('href',"Dashboard.html");

}