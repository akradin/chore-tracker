'use strict';

const store = require('../store.js');

const success = (data) => {
  console.log(data);
    $('#sign-in-form').modal('hide');
};

const failure = (error) => {
  console.log(error);
  $('#sign-in-error').html('Oops, something went wrong, make sure all of your info is correct');
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
};


module.exports = {
  failure,
  success,
  signInSuccess,
};
