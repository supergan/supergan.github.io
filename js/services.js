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
            url: "http://173.73.124.108:8080/rest/surveymanagerservice/insertsurveycontroldata/",
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
    
    this.docUpload = 'http://173.73.124.108:8080/rest/surveymanagerservice/insertsurveycontroldocument/';
    
    this.docSearch = function (docSearch) {
    	console.log("--> DataService called - AJAX to get document")
    	/*
        $.ajax({
            type: "GET",
            url: "http://173.73.124.108:8080/rest/surveymanagerservice/getsurveycontroldocument/",
            data: JSON.stringify(docSearch),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data){window.open(data, '_blank');},
            failure: function(errMsg) {
                console.log(errMsg);
            }
        });
        */
    };

});