var Calculator = function() {

  var api = this;

  api.add = function(a, b) {
    if (isNaN(a) || isNaN(b)) throw 'Only numbers are valid';
    return a + b;
  }

  return api;
};
