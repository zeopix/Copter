$(function(){

//	startGame();
	animateFall("#copter");
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
		var time = Math.ceil(Math.sqrt((50*distance)/(32.2/3600)));
		return time;
	}
	function animateFall(element){
	
		$(element).stop().animate({
			marginTop: getFallDistance($(element)) + "px"
		}, {
			duration: getTime(getFallDistance($(element))),
			easing: "easeOutBounce"
		});
	}
