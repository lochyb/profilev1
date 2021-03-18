$(document).ready(() => {
  $("#year").html(new Date().getFullYear());
});

$("a").click(() => {
  $(".behind").prop("checked", false);
});
