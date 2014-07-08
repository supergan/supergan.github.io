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


app.controller('RSRecFileUpload', function ($scope, $fileUploader) {
	
	console.log("--> RSRecFileUpload controller called");
	
    // Creates a uploader
    var uploader = $scope.uploader = $fileUploader.create({
        scope: $scope,
        url: 'upload.php'
    });


    // ADDING FILTERS

    // Images only
    uploader.filters.push(function(item /*{File|HTMLInputElement}*/) {
        var type = uploader.isHTML5 ? item.type : '/' + item.value.slice(item.value.lastIndexOf('.') + 1);
        type = '|' + type.toLowerCase().slice(type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
    });


    // REGISTER HANDLERS

    uploader.bind('afteraddingfile', function (event, item) {
        console.info('After adding a file', item);
    });

    uploader.bind('whenaddingfilefailed', function (event, item) {
        console.info('When adding a file failed', item);
    });

    uploader.bind('afteraddingall', function (event, items) {
        console.info('After adding all files', items);
    });

    uploader.bind('beforeupload', function (event, item) {
        console.info('Before upload', item);
    });

    uploader.bind('progress', function (event, item, progress) {
        console.info('Progress: ' + progress, item);
    });

    uploader.bind('success', function (event, xhr, item, response) {
        console.info('Success', xhr, item, response);
    });

    uploader.bind('cancel', function (event, xhr, item) {
        console.info('Cancel', xhr, item);
    });

    uploader.bind('error', function (event, xhr, item, response) {
        console.info('Error', xhr, item, response);
    });

    uploader.bind('complete', function (event, xhr, item, response) {
        console.info('Complete', xhr, item, response);
    });

    uploader.bind('progressall', function (event, progress) {
        console.info('Total progress: ' + progress);
    });

    uploader.bind('completeall', function (event, items) {
        console.info('Complete all', items);
    });
});
