import angular from 'angular';
import angularMeteor from 'angular-meteor';
import websiteHeader from '../imports/components/websiteHeader/websiteHeader';

angular.module('dannysWebsite', [
  angularMeteor,
  websiteHeader.name
]);
