$(function(){
	var easing = "easeOutBounce";
//	startGame();
	animateFall("#copter");

	$("#container").click(function(){
	});
	
	$("#control").focus();
	$("#control").focusout(function(){
		$(this).trigger('focus');
	});
	
	$("#control").keydown(function(event) {
  		if(event.keyCode == 38){
  			$("#copter").stop().animate({
				marginTop: "-200px"
			}, {
				duration: getTime(getFallDistance($("#copter"))),
				easing: easing
			});
  		}
   	});
	
	$("#control").keyup(function(event) {
		animateFall("#copter");
   	});

});


function startGame(){
	
}

	function getYPosition(element) {
		return $(element).position()['top'] - $(element).parent().position()['top'];
	}
	function getFallDistance(element) {
		return parseInt($(element).parent().outerHeight()) - parseInt(getYPosition(element)) - parseInt($(element).outerHeight());
	}
	function getTime(distance){
		var time = Math.ceil(Math.sqrt((80*distance)/(32.2/3600)));
		return time;
	}
	function animateFall(element){
		var easing = "easeOutBounce";

		$(element).stop().animate({
			marginTop: getFallDistance($(element)) + "px"
		}, {
			duration: getTime(getFallDistance($(element))),
			easing: easing
		});


	}
