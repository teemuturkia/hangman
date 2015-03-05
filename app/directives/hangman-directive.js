angular.module('hangman')
  .directive('hangman', ['WordService', function(WordService) {
    return {
      templateUrl: function(){
        return 'app/templates/hangman-template.html';
      }
    };
  }]);