$(function() {
	$(".form-autosubmit").change(function(event) {
		$(this).closest("form").submit();
	});
});
