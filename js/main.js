$(document).ready(function(){ 
    var template = $("#surveyControlEntryTemplate").html();
    var compileTemplate = _.template(template);
    $("#surveyControlTable").append(compileTemplate());
    $('.input-group.date').datepicker();
    $('#addSurvey').on(
    	'click', function(){
    		$("#surveyControlTable").append(compileTemplate());
    	}
    );
    
    $('#submitData').on(
        	'click', function(){
        		var finalResult = false;
        		var datasetNum = $('form').length;
        		var count=0;
        		var timer=1000;
        		_.each($('form'),function(data){
        			$(data).find('#waitingGIF').eq(0).attr("style","visibility:visible");
        			//make ajax call; use timer to mimic ajax callback
        			console.log($(data).serialize());
        			setTimeout(function(){
        				count=count+1;
        				console.log(count);
        				$(data).find('#waitingGIF').eq(0).attr("src","pics/Check-Free_Use.png");
        				if(count==datasetNum){
        					console.log("complete");
        				}}, timer);
        			timer=timer+2000;
        		});
        		
        	}
        );
	
    $("#myTab a").click(function(e){
    	e.preventDefault();
    	$(this).tab('show');
    });
	
});