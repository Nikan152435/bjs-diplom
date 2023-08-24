//  Класс для работы с формой авторизации 
"use strict"

const userFormObject = new UserForm(); // создает объект класса UserForm

userFormObject.loginFormCallback = (data) => { // чтобы не потерять контекс (this) лучше (проще)
  // использовать стрелочную ф-ию
  ApiConnector.login(data, response => {
  // console.log(response); // проверяет какой объект возвращает сервер. 

    if(response.success ) {// проверяет успешность запроса. 
      location.reload(); // перезагрузка страницы (с переходом в личный кабинет),
      
    } else {
      userFormObject.setLoginErrorMessage(response.error);
       //метод у объекта/экземпляра класса userForm
    };
  });
};

// Регистрация пользователя


userFormObject.registerFormCallback = (data) => { // Функция, которая будет обрабатывать

ApiConnector.login(data, response => { //Вот тут не поняла, что менять?
    // console.log(response); // проверяет какой объект возвращает сервер. 

    if(response.success === true) {// проверяет успешность запроса. Само значение свойства success является логическим (тип boolean), поэтому можно сократить данное условие до простого response.success (удалить === true)
      location.reload(); // перезагрузка страницы (с переходом в личный кабинет), 
      //потому что логин/пароль были верные. Тут перезагрузка нужна?

    } else {
userFormObject.setregisterErrorMessage(response.error);  //Вывод сообщений при регистрации
//метод у объекта/экземпляра класса registerForm, 
    };
  });
};
































