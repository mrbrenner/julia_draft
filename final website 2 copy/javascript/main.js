	console.log("ready");

	var statePhoto = false;
	var stateVideo = false;
	var stateZines = false;
	var hovPhoto = false;
	var hovVideo = false;
	var hovZines = false;

// dropdown menu on click

// photo menu click
	$(".buttonPhoto").click( function(){
		
		statePhoto = !statePhoto;
		console.log("statePhoto");


	if (statePhoto==true) {
		console.log("showPhoto");
		stateVideo=false;
		stateZines=false;
		$("#photo").show();
		$("#video").hide();
		$("#zines").hide();
		$(".buttonPhoto").css("color", "red");
		} else {
		console.log("hidePhoto");
		stateVideo=false;
		stateZines=false;
		$("#video").hide();
		$("#photo").hide();
		$("#zines").hide();
		}

		
	});

// vid menu click

	$(".buttonVideo").click( function(){
		
		stateVideo = !stateVideo;
		console.log("stateVideo");


	if (stateVideo==true) {
		console.log("showVideo");
		statePhoto=false;
		stateZines=false;
		$("#video").show();
		$("#photo").hide();
		$("#zines").hide();
		$(".buttonVideo").css("color", "red");
		} else {
		console.log("hideVideo");
		statePhoto=false;
		stateZines=false;
		$("#video").hide();
		$("#photo").hide();
		$("#zines").hide();
		}
		
	});

// zines menu click
	
	$(".buttonZines").click( function(){
		
		stateZines = !stateZines;
		console.log("stateZines");


	if (stateZines==true) {
		console.log("showZines");
		statePhoto=false;
		stateVideo=false;
		$("#zines").show();
		$("#photo").hide();
		$("#video").hide();
		$(".buttonZines").css("color", "red");
		} else {
		console.log("hideZines");
		statePhoto=false;
		stateVideo=false;
		$("#video").hide();
		$("#photo").hide();
		$("#zines").hide();
		}
		
	});

// photo hover button

	$(".buttonPhoto").hover(function(){

		hovPhoto = !hovPhoto
		console.log("hovPhoto");

	if (hovPhoto==true) {
		$(".buttonPhoto").css("color", "red");
	} else {
		$(".buttonPhoto").css("color", "white");
	}

	})

// video hover button

	$(".buttonVideo").hover(function(){

		hovVideo = !hovVideo
		console.log("hovVideo");

	if (hovVideo==true) {
		$(".buttonVideo").css("color", "red");
	} else {
		$(".buttonVideo").css("color", "white");
	}

	})

// zines hover button
	
	$(".buttonZines").hover(function(){

		hovZines = !hovZines
		console.log("hovVideo");

	if (hovZines==true) {
		$(".buttonZines").css("color", "red")
	} else {
		$(".buttonZines").css("color", "white")
	}
	
	})






