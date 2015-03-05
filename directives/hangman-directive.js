angular.module('hangman')
  .directive('hangman', ['WordService', function(WordService) {
    return {
      templateUrl: function(){
        return 'templates/hangman-template.html';
      }
    };
  }]);