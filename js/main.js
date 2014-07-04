$(document).ready(function(){ 
    var template = $("#surveyControlEntryTemplate").html();
    var compileTemplate = _.template(template);
    $("#surveyControlTable").append(compileTemplate());
    $('.form-control.input-xs.datePicker').datepicker();
    $('#addSurvey').on(
    	'click', function(){
    		$("#surveyControlTable").append(compileTemplate());
    	}
    );
    
    $('#submitData').on(
        	'click', function(){
        		$('#waitingGIF').eq(0).attr("style","visibility:visible");
        		var surveyData =[];
        		_.each($('form'),function(data){
        			surveyData.push($( data ).serializeArray());
        		});
    			//make ajax call; use timer to mimic ajax callback
    			setTimeout(function(){
    				$('#waitingGIF').eq(0).attr("src","pics/Check-Free_Use.png");
    				}, 3000);
        		console.log(surveyData);
        		
        	}
        );
	
    $("#myTab a").click(function(e){
    	e.preventDefault();
    	$(this).tab('show');
    });
	
});