$(function () {
    console.log("start add");

});

function validate() {
    var valid = true;
    $(".form-control:visible").each(function () {
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

    if (valid == true) {
        send();
    } else {
        $('.warning').removeAttr("hidden");
    }


}
function send() {
    console.log('send');
var Login;
var LoggerUser;


    var Sport = $('#trip-type').val();
    var DateStart = $('#trip-start-place').val();
    var DateEnd = $('#trip-start-place').val();
    var HourStart = $('#trip-start-time').val();
    var HourEnd = $('#trip-end-time').val();
    var Status = "Planned";
    var PlaceStart = $('#trip-start-place').val();
    var PlaceEnd = $('#trip-end-place').val();
    var Route = $('#trip-route').val();
    var Comment = $('#comment').val();
    var ContactPerson = $('#contact-name').val();
    var ContactDetails = $('#contact-phone').val();
    var HealthConditions = "nut allergy";

    var obj = {
        "email": Login,
        "Person": LoggerUser,
        "Status": Status,
        "Sport": Sport,
        "DateStart": DateStart,
        "DateEnd": DateEnd,
        "PlaceStart": PlaceStart,
        "PlaceEnd": PlaceEnd,
        "Route": Route,
        "Comment": Comment,
        "ContactPerson": ContactPerson,
        "ContactDetails": ContactDetails,
        "HealthConditions": HealthConditions
    };

    var myJSON = JSON.stringify(obj);
    console.log(myJSON);

    toServer(myJSON);
}

function toServer(myJSON) {
    console.log('serwer responce');

    $.ajax({
        url: "#",
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