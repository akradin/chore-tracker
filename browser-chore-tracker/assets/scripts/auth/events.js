'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
};

  $('#sign-up-form').on('submit', onSignUp);
