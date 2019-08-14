$(document).ready(function(){
  $("form.theform").submit(function(event){
    $("#theModal").modal();
    event.preventDefault();
  });
});
