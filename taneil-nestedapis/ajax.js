$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    var name = data.results[0].name.first + " "+ data.results[0].name.last;
    var picture = data.results[0].picture.large;
    var nat = data.results[0].nat
        $('body').append("<h2>" + name + "</h2>")
        $('body').append("<h3>" + picture + "</h3>")
        $('body').append("<h3>" + nat + "</h3>")
  }
});
    