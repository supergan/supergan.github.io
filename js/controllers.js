app.controller('SurveyControlSubmit', function ($scope, DataService) {
	
	console.log("--> SurveyControlSubmit controller called");
	
	angular.element(document).ready(function () {
		$("#myTab a").click(function(e){
	    	e.preventDefault();
	    	$(this).tab('show');
	    });
	});
	
	$scope.surveyDataSet = [];
	
	$scope.addRow = function() {
		var newData = {
				id: null,
		    	pID:'', 
		    	stationName:'',
		    	usage:'',
		    	stationType:'',
		    	agency:'',
		    	horizonalAccuracy:'',
		    	ellipsoidHeight:'',
		    	gpsOrthoHeight:'',
		    	levelingProcedure:'',
		    	stabilityCode:'',
		    	recoveredDate:'',
		    	recoveredCondition:'',
		    	landOwnership:''
		};
		newData.id=$scope.surveyDataSet.length;
	    $scope.surveyDataSet.push(newData);
	};
	
	//add the first new row when the app is initialized
	$scope.addRow();
	
	$scope.submitData = function(){
		DataService.insertData($scope.surveyDataSet);
	};
	
	$scope.setModelValue = function(event){
		//get clicked item, which is the selected one
		var selected = $('input',event.target).attr('value');
		$("#helper",$(event.target).parent().parent()).val(selected)
			.trigger('input');//trigger input to ngModel after setting value so the model value is updated
	};
	


});

app.controller('RSRecFileUpload', function () {
	
	console.log("--> RSRecFileUpload controller called");
});