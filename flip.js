$(document).ready(function(){
	 $(document).scroll(function(){
	 	var docScroll = $(document).scrollTop()
		var	photoOffset = $("#photoWrapper").offset().top - 50
		if(docScroll > photoOffset)
		{
			$("#photoWrapper").addClass("change")
			$("#photo").addClass("change")
		}
		else
		{
			$("#photoWrapper").removeClass("change")
			$("#photo").removeClass("change")		
		}
	})
});