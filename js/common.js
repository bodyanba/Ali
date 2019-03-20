$(document).ready(function () {

  $('[data-toggle="tooltip"]').tooltip().click(function(e) {
    e.stopPropagation();
    $('[data-toggle="tooltip"]').not(this).tooltip('hide');
    $(this).tooltip('toggle');
	});

	$(document).click(function(e) {
    var id = $(e.target).closest(".tooltip").attr("id");
    var attr = "[aria-describedby=" + "'" + id + "'" + "]";
    if (!$(e.target).is('.tooltip *'))
      $('[data-toggle="tooltip"]').tooltip('hide');
    else
      $('#link-clock' + attr).tooltip('hide');
    if ($(e.target).is('.tooltip .button-no'))
      $(attr).tooltip('hide');
	});

});