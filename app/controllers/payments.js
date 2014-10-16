import Ember from 'ember';

var typeOf = Ember.typeOf;

export default Ember.ArrayController.extend({
  actions: {
    addPayment: function(payment) {
      /**
       * if payment information is valid
       *    add payment information to list of payments
       *    clear form
       * else
       *    send error information to the component
       */
      var errors = validate(payment);
      if (Ember.keys(errors).length === 0) {
        this.pushObject(payment);
        this.send('clear-payment-form');
      } else {
        this.send('show-payment-form-errors', errors);
      }
    }
  }
});

export function validate(payment) {
  var errors = {};

  var amountErrors = [];
  if (typeOf(payment.amount) !== "number") {
    amountErrors.push('Amount must be a number');
  }
  if (payment.amount < 0) {
    amountErrors.push('Amount can not be less than 0');
  }
  if (amountErrors.length > 0) {
    errors.amount = amountErrors;
  }

  return errors;
}
