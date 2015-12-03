var colors = ['green', 'red']

$('#get-dish').on('click', function(event) {
  event.preventDefault();

  var response;

  var request = $.ajax({
    method: 'GET',
    url: '/dishes/random.json',
    success: function(data) { response = data; }
  });

  request.done(function() {
    var dish = $.parseJSON(response).dish;
    $('#dish-list').append('<li>' + dish + '</li>');
    $('#dish-list').children().last().css('background-color', colors[0]);
    colors.reverse();
    alert("You're totally amazeballs random dish is " + dish + "!");
  });
});
