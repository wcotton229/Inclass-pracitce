
var input = $(this).attr("#search");


$("#search").on('click', function () {

var q = $("#search-term").val();

var page = $("records").val();

var begin_date = $("startyear").val();

var end_date = $("endyear").val();

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': '5fb6387bda404dd993d8dadaa6c16ca7',
    'q': q,
    'page': page,
    'begin_date': begin_date,
    'end_date': end_date
});

$.ajax({
    url: url,
    method: 'GET',
}).done(function (result) {
    console.log(result);
}).fail(function (err) {
    throw err;
});

});