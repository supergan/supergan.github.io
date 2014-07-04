app.service('DataService', function () {

    this.insertData = function (insertData) {
        console.log("--> DataService called - AJAX to insert data");
		
		$('#waitingGIF').eq(0).attr("style","visibility:visible");
		console.log(insertData);
		//make ajax call; use timer to mimic ajax callback
		setTimeout(function(){
			$('#waitingGIF').eq(0).attr("src","pics/Check-Free_Use.png");
			}, 3000);

        /*
        $.ajax({
            type: "POST",
            url: "api/surveymanagerservice/insertsurveycontroldata/",
            data: JSON.stringify(insertData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data){console.log(data);},
            failure: function(errMsg) {
                console.log(errMsg);
            }
        });
        */
    };

});