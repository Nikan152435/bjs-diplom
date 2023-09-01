//  Авторизация пользователя
"use strict"

const userFormObject = new UserForm(); // создает объект класса UserForm

userFormObject.loginFormCallback = (data) => { // чтобы не потерять контекс (this) лучше (проще)
  // использовать стрелочную ф-ию
  ApiConnector.login(data, response => {// Метод для авторизации
    // console.log(response); // проверяет какой объект возвращает сервер. 

    if (response.success) {// проверяет успешность запроса. 
      location.reload(); // перезагрузка страницы (с переходом в личный кабинет),

    } else {
      userFormObject.setLoginErrorMessage(response.error);
      
    };
  });
};

// Регистрация пользователя


userFormObject.registerFormCallback = (data) => { // Функция, которая будет обрабатывать

  ApiConnector.register(data, response => { // Метод для регистрации
    // console.log(response); // проверяет какой объект возвращает сервер. 

    if (response.success === true) {// проверяет успешность запроса. Само значение свойства success является логическим (тип boolean), поэтому можно сократить данное условие до простого response.success (удалить === true)
      location.reload(); // перезагрузка страницы (с переходом в личный кабинет), 
      //потому что логин/пароль были верные. Тут перезагрузка нужна?

    } else {
      userFormObject.setregisterErrorMessage(response.error);  //Вывод сообщений при регистрации
      
    };
  });
};
































