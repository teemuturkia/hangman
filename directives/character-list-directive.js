angular.module('hangman')
  .directive('characterList', [function() {
    return {
      templateUrl: function(){
        return 'templates/character-list-template.html';
      }
    };
  }]);