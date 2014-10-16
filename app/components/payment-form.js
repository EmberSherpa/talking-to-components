import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * Amount of money
   * @type {int}
   */
  amount: null,
  /**
   * Payment type
   */
  type: null,
  /**
   * Date of the payment
   */
  date: null,
  /**
   * Notes for the payment
   */
  notes: null,
  errors: null,
  actions: {
    submit: function() {
      this.sendAction('on-submit', {
        amount: Number(this.get('amountInput')),
        type: this.get('typeInput'),
        date: this.get('dateInput'),
        notes: this.get('notesInput')
      });
    }
  },
  amountInput: Ember.computed.oneWay('amount'),
  typeInput: Ember.computed.oneWay('type'),
  dateInput: Ember.computed.oneWay('date'),
  notesInput: Ember.computed.oneWay('notes'),
  'clear-payment-form': function() {
    this.setProperties({
      amountInput: this.get('amount'),
      typeInput: this.get('type'),
      dateInput: this.get('date'),
      notesInput: this.get('notes')
    });
    this.set('errors', null);
  },
  'show-payment-form-errors': function(errors) {
    this.set('errors', errors);
  }
});
