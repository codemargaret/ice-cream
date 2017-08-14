$(document).ready(function(){
  $("#flavorForm").submit(function(event) {
    var iceCreams = [];
    var iceCreamInput = $("input#userInput").val();
    iceCreams.push(iceCreamInput);
    iceCreams.forEach(function(iceCream) {

      $("#flavor").append("<li>" + iceCream + "</li>");
    });
    event.preventDefault();
  });
});
