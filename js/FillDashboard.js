

    var data;


    $(function () {
        console.log("start");
        var arr = [];

        arr =  [ {
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

            Show(arr);

     });


    function Show(data) {

        var i;
        var pobrane;
        var lp;
        var action;
        var AppendToDiv;

        for (i = 0; i < data.length; ++i) {
            lp = i + 1;
            if (data[i].Status == "Planned") {
                action = '<span class="glyphicon glyphicon-pencil"></span>';
                AppendToDiv = "planned";
                $('.planned').removeAttr("hidden");
            } else if (data[i].Status == "Ongoing") {
                action = '<span class="glyphicon glyphicon-home"></span>';
                AppendToDiv = "ongoing";
                $('.ongoing').removeAttr("hidden");
            } else if (data[i].Status == "Finished") {
                action = '<span class="glyphicon glyphicon-refresh"></span>';
                AppendToDiv = "finished";
                $('.finished').removeAttr("hidden");
            }
            
            pobrane = '<tr><td>' + lp + '</td>' +
                '<td>' + action + '</td>'+
                '<td>' + data[i].RouteName + ' </td>' +
                '<td>' + data[i].Sport + ' </td > ' +
                '<td>' + data[i].DateStart + ' </td>' +
                '<td>' + data[i].DateEnd + ' </td>' +
                '<td>' + data[i].PlaceStart + ' </td>' +
                '<td>' + data[i].PlaceEnd + ' </td>' +
                '<td>' + data[i].Route + ' </td>' +
                '<td>' + data[i].Comment + ' </td>' +
                '<td>' + data[i].ContactPerson + ' </td>' +
                '<td>' + data[i].ContactDetails + ' </td>' +
                '<td>' + data[i].HealthConditions + ' </td></tr>'+
            
            console.log(pobrane);
            $("#"+AppendToDiv+"").append(pobrane);
        }

    }
    