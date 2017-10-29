   var data;


    $(function () {
        console.log("start");
    var arr = [];

        arr = [{
        "login": "John1975",
            "Person": "Steven Kowalski",
            "RouteName": "anniversary",
            "Status": "Planned",
            "Sport": "climbing",
            "DateStart": "11.10.2017",
            "DateEnd": "11.10.2017",
            "PlaceStart": "Zakopane",
            "PlaceEnd": "Zakopane",
            "Route": "Czarny szlak na Rysy",
            "Comment": "Grupa Tatras4eva",
            "ContactPerson": "Anna Kowalski",
            "ContactDetails": "111 222 333",
            "HealthConditions": "Rozrusznik serca"
        },

        {
        "login": "John1975",
            "Person": "Steven Kowalski",
            "RouteName": "anniversary",
            "Status": "Planned",
            "Sport": "climbing",
            "DateStart": "11.10.2017",
            "DateEnd": "11.10.2017",
            "PlaceStart": "Zakopane",
            "PlaceEnd": "Zakopane",
            "Route": "Czarny szlak na Rysy",
            "Comment": "Grupa Tatras4eva",
            "ContactPerson": "Anna Kowalski",
            "ContactDetails": "111 222 333",
            "HealthConditions": "Rozrusznik serca"
        },

        {
        "login": "John1975",
            "Person": "Steven Kowalski",
            "RouteName": "anniversary",
            "Status": "Planned",
            "Sport": "climbing",
            "DateStart": "11.10.2017",
            "DateEnd": "11.10.2017",
            "PlaceStart": "Zakopane",
            "PlaceEnd": "Zakopane",
            "Route": "Czarny szlak na Rysy",
            "Comment": "Grupa Tatras4eva",
            "ContactPerson": "Anna Kowalski",
            "ContactDetails": "111 222 333",
            "HealthConditions": "Rozrusznik serca"
        },

        {
        "login": "John1975",
            "Person": "Steven Kowalski",
            "RouteName": "anniversary",
            "Status": "Planned",
            "Sport": "climbing",
            "DateStart": "11.10.2017",
            "DateEnd": "11.10.2017",
            "PlaceStart": "Zakopane",
            "PlaceEnd": "Zakopane",
            "Route": "Czarny szlak na Rysy",
            "Comment": "Grupa Tatras4eva",
            "ContactPerson": "Anna Kowalski",
            "ContactDetails": "111 222 333",
            "HealthConditions": "Rozrusznik serca"
        },

        {
        "login": "John1975",
            "Person": "Steven Kowalski",
            "RouteName": "anniversary",
            "Status": "Planned",
            "Sport": "climbing",
            "DateStart": "11.10.2017",
            "DateEnd": "11.10.2017",
            "PlaceStart": "Zakopane",
            "PlaceEnd": "Zakopane",
            "Route": "Czarny szlak na Rysy",
            "Comment": "Grupa Tatras4eva",
            "ContactPerson": "Anna Kowalski",
            "ContactDetails": "111 222 333",
            "HealthConditions": "Rozrusznik serca"
        },
        {
        "login": "John1975",
            "Person": "Steven Kowalski",
            "RouteName": "valentines day",
            "Status": "Finished",
            "Sport": "climbing",
            "DateStart": "11.10.2017",
            "DateEnd": "11.10.2017",
            "PlaceStart": "Zakopane",
            "PlaceEnd": "Zakopane",
            "Route": "Czarny szlak na Rysy",
            "Comment": "Grupa Tatras4eva",
            "ContactPerson": "Anna Kowalski",
            "ContactDetails": "111 222 333",
            "HealthConditions": "Rozrusznik serca"
        },
        {
        "login": "John1975",
            "Person": "Steven Kowalski",
            "RouteName": "valentines day",
            "Status": "Ongoing",
            "Sport": "walking",
            "DateStart": "11.10.2017",
            "DateEnd": "11.10.2017",
            "PlaceStart": "Zakopane",
            "PlaceEnd": "Zakopane",
            "Route": "Czarny szlak na Rysy",
            "Comment": "Grupa wind",
            "ContactPerson": "Anna Kowalski",
            "ContactDetails": "111 222 333",
            "HealthConditions": "Rozrusznik serca"
        }];
        // console.log(arr);
        //$("#check").click(function () {
        //    console.log("create");
        Show(arr);

    //});


    });


    function Show(data) {

        var i;
        var pobrane;
        var lp;
        var action;
        var AppendToDiv;
        var modalWindow;
        var allDetails;
        var modalId = 0;

        for (i = 0; i < data.length; ++i) {
        lp = i + 1;

    if (data[i].Status == "Planned") {
        action = '<i class="fa fa-pencil"></i>';
    AppendToDiv = "planned";
                $('.planned').removeAttr("hidden");
            } else if (data[i].Status == "Ongoing") {
        action = '<i class="fa fa-home"></i>';
    AppendToDiv = "ongoing";
                $('.ongoing').removeAttr("hidden");
            } else if (data[i].Status == "Finished") {
        action = '<i class="fa fa-refresh"></i>';
    AppendToDiv = "finished";
                $('.finished').removeAttr("hidden");
            }

            pobrane = '<tr><td>' + lp + '</td>' +
                '<td>' + action + '</td>' +
                '<td>' + data[i].RouteName + ' </td>' +
                '<td>' + data[i].Sport + ' </td > ' +
                '<td>' + data[i].DateStart + ' - ' + data[i].DateEnd + '</td>' +
                '<td>' + data[i].PlaceStart + ' - ' + data[i].PlaceEnd + '</td>' +
                '<td><a href="#" class="btn btn-xs btn-primary" data-toggle="modal" data-target="#modal-' + modalId + '">More details</a>';

            allDetails = '<tr><th scope="row">Trip name</th><td>' + data[i].RouteName + '</td></tr>' +
                '<tr><th scope="row">Type of sport</th><td>' + data[i].Sport + '</td></tr>' +
                '<tr><th scope="row">Date</th><td>' + data[i].DateStart + ' - ' + data[i].DateEnd + '</td></tr>' +
                '<tr><th scope="row">Start place</th><td>' + data[i].PlaceStart + '</td></tr>' +
                '<tr><th scope="row">End place</th><td>' + data[i].PlaceEnd + '</td></tr>' +
                '<tr><th scope="row">Route details</th><td>' + data[i].Route + '</td></tr>' +
                '<tr><th scope="row">Additional comment</th><td>' + data[i].Comment + '</td></tr>' +
                '<tr><th scope="row">Contact person</th><td>' + data[i].ContactPerson + ', phone: ' + data[i].ContactDetails + '</td></tr>' +
                '<tr><th scope="row">Health condition</th><td>' + data[i].HealthConditions + '</td></tr>';

            modalWindow = '<div class="modal fade" id="modal-' + modalId + '" tabindex="-1" role="dialog" aria-labelledby="largeModal" aria-hidden="true"> <div class="modal-dialog modal-md"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <h4 class="modal-title" id="myModalLabel">Trip details</h4> </div><div class="modal-body"><table class="table">' + allDetails + '</table></div><div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> </div></div></div></div>';

            modalId++;

            //console.log(pobrane);
            $("#" + AppendToDiv + "").append(pobrane);
            $("#modals").append(modalWindow);
        }

    }
