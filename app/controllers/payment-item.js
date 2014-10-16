import Ember from 'ember';
import {validate} from './payments';

export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    updatePayment: function(payment){
      // check if properties are set
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
