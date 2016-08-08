import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './websiteHeader.html';

class TodosListCtrl {
  constructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
}

export default angular.module('dannysWebsite', [
  angularMeteor
])
  .component('websiteHeader', {
    templateUrl: 'imports/components/websiteHeader/websiteHeader.html',
    controller: TodosListCtrl
  });
