/* written by David Awad
My defined js is all in here, the rest are form the template.
*/
var showbutton = 0 ;

angular.module('careerPage', [])
  .controller('jobController', function($scope) {

    // we can grab this in the form of a JSON request from the server.
    $scope.positions = [  // This is where each of the individual jobs and their descriptions are defined.
      { title: 'Android Developer', desc:"Design, provide support <ul> <li>be on time</li> </ul>"},
      { title: 'Atlassian Admin', desc:"atlassiandesc" },
      { title: 'Front-End Developer', desc:"front end dev stuff" },
      { title: 'Linux System Admin', desc : "linux things" },
      { title: 'Site Reliability Engineer', desc: "We're looking for an experienced Site Reliability Engineer to play an integral role on our Dev Ops team. The ideal person is obsessed with uptime and site speed and has years of experience with server hardware and Linux systems. At the same time, you are passionate about working with development engineers to get more done faster with less trouble. You'll be working at our office in San Francisco which reaches over 1 billion unique visitors a month. You'll be working on large scale challenges immediately as well as make a huge, lasting impact on all technical decisions."}
    ];

    $scope.renderDesc = function(position) {

      $('#jobTitle').text(position.title);
      $('#jobDesc').text(position.desc);

      showbutton++; //keep track of how many job postings any given user went through. might be useful
      $('#applyNow').show();

    };

    /*
    $scope.applyFor = function(title) {
      //iterates though remaining jobs and finds how many there are
      console.log("applying for"+title);
      //render jira issue collector
      };
    */
})
