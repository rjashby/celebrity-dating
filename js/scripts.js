$(document).ready(function() {
  $('form#dating').submit(function(event) {
    event.preventDefault();
    $('#Harry').hide();
    $('#Ron').hide();
    $('#Neville').hide();
    const age = parseInt($("input#age").val());

    if (age < 12) {
      $('#Neville').show();
    } else if (age >= 12 && age <= 20) {
      $('#Ron').show();
    } else {
      $('#Harry').show();
    }
  });
});