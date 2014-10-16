import Ember from 'ember';
import {validate} from './payments';

export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    updatePayment: function(payment){
      /**
       * if payment is valid
       *    set values onto the object
       *    stop editing
       * else
       *    send errors to the component
       */
      var errors = validate(payment);
      if (Ember.keys(errors).length === 0) {
        this.setProperties(payment);
        this.set('isEditing', false);
      } else {
        this.send('show-payment-form-errors', errors);
      }
    }
  }
});
