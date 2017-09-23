$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    var gender = data.results[0].gender;
    var location = data.results[0].location.street + location.city;

       $('body').append("<h2>" + gender + "</h2>")
        $('body').append("<h2>" + location + "</h2>")

  }
});
    