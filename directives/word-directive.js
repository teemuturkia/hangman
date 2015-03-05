angular.module('hangman')
  .directive('word', ['WordService', function(WordService) {
    return {
      controller: function($scope) {
        WordService.getWord(function(data) {
          $scope.word = data.Word.trim().toLowerCase();
        });
      },
      controllerAs: 'ctrl',
      templateUrl: function(){
        return 'templates/word-template.html';
      }
    };
  }]);