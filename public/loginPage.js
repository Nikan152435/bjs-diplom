//  Авторизация пользователя
"use strict"
const userFormObject = new UserForm();
userFormObject.loginFormCallback = (data) => {

  ApiConnector.login(data, response => {
    if (response.success) {
      location.reload();
    } else {
      userFormObject.setLoginErrorMessage(response.error);
    };
  });
};

// Регистрация пользователя


userFormObject.registerFormCallback = (data) => {

  ApiConnector.register(data, response => { .

    if (response.success === true) {
      location.reload();

    } else {
      userFormObject.setregisterErrorMessage(response.error);
    };
  });
};
































