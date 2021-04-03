$("button").click(function () {
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/name/france',
        success: function (data, statuts, response) {
            console.log(`Country: ${data[0].name}`);
            console.log(`Capital: ${data[0].capital}`);
        }
    });
});