$("button").click(function () {
    var userCountry = document.querySelector("input", 'value');
    var country = userCountry.value;
    var countryUrl = `https://restcountries.eu/rest/v2/name/${country}/`;
    $.ajax({
        url: countryUrl,
        success: function (data, statuts, response) {
            // console.log('capital', data[0].capital );
            $("#country").html(data[0].name);
            $("#capital").html(data[0].capital);
        }
    });
});