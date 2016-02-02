/**
 * Validate Password
 */
window.safeLauncher.directive('mslValidatePassword', function() {
  var link = function(scope, element, attrs, controller) {
    element.bind('blur', function() {
      var value = element.val();
      var inpName = angular.element(element[0]).attr('name');
      var formName = element[0].form.name;
      var form = scope[formName][inpName];
      form.$setValidity('customValidation', false);
      if(!value) {
        scope.showErrorMsg(element, 'Password cannot be empty');
        return;
      }
      if (!(new RegExp(/^[a-z0-9]+$/i)).test(value)) {
        scope.showErrorMsg(element, 'Password should not contain special characters');
        return;
      }
      if (value.length < 6) {
        scope.showErrorMsg(element, 'Minimum password length should be six characters');
        return;
      }
      scope.hideErrorMsg(element);
      form.$setValidity('customValidation', true);
    });
  };
  return {
    restrict: 'A',
    link: link
  };
});