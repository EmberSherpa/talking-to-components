# Talking to Components

This app shows you how you can use {{on-action}} helper to trigger events in Ember Components when an action is triggered on the controller. 

## Important Files

* [app/templates/payments.hbs](app/templates/payments.hbs) - main file where payments can be created using ```{{payment-form}}``` component
* [app/components/payment-form.js](app/components/payment-form.js) - component class where action handlers are defined
* [app/controllers/payments.js](app/controllers/payments.js) - controller where addPayment action is defined
* [app/controllers/payment-item](app/controllers/payment-item.js) - item controller where updatePayment action is defined

## Known issues

* [Events are fired on destroyed components](https://github.com/embersherpa/ember-helpers-on-action/issues/2)
* [Use Ember Validations library instead of custom validation function](https://github.com/embersherpa/talking-to-components/issues/1)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

