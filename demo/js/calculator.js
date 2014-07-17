var Calculator = function() {

    var api = this;

    api.add = function(a, b) {
        if (isNaN(a) || isNaN(b)) throw 'Only numbers are valid';
        return a + b;
    }

    api.div = function(a, b) {
        if (isNaN(a) || isNaN(b)) throw 'Only numbers are valid';
        if ( b === 0) throw 'Can not divide by zero';
        return ( a / b ) * 1.00;
    }

    return api;
};