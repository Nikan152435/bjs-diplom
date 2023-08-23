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
       метод у объекта/экземпляра класса userForm
    };
  });
};

// Регистрация пользователя

"use strict"

const registerFormObject = new RegisterForm(); // создает объект класса RegisterForm


registerFormObject.registerFormCallback = (data) => { // Функция, которая будет обрабатывать


//getData(form) //Метод получения данных из переданной формы???

ApiConnector.login(data, response => { //Вот тут не поняла, что менять?
    // console.log(response); // проверяет какой объект возвращает сервер. 

    if(response.success === true) {// проверяет успешность запроса. Само значение свойства success является логическим (тип boolean), поэтому можно сократить данное условие до простого response.success (удалить === true)
      location.reload(); // перезагрузка страницы (с переходом в личный кабинет), 
      //потому что логин/пароль были верные. Тут перезагрузка нужна?

    } else {
registerFormObject.setregisterErrorMessage(response.error);  //Вывод сообщений при регистрации
//метод у объекта/экземпляра класса registerForm, 
    };
  });
};
















// создает объект класса UserForm
const userFormObject = new UserForm();

/** 
 * Вход 
 */
userFormObject.loginFormCallback = function(data) {
  ApiConnector.login(data, response => {
    console.log(response); // проверяет какой объект возвращает сервер
    // проверяет успешность запроса
    if(response.success === true) {
      location.reload();
      
    } else {
      setLoginErrorMessage(message);

    };

  });

};




// const userForm = new UserForm();
// UserForm.loginFormCallback = data =>console.log(data)
// if (          ?       ){         //запрос успешный 
//     location.reload();    //- вызываем 
//     } else {                        // запрос неуспешный
//     this.setLoginErrorMessage('Ошибка!')
    
    
//     ApiConnector ({login: oleg@demo.ru,  password: demo}, response =>console.log(response));  
//     //эмуляция отправки правильных данных (якобы полученных из формы) и в консоль вывoдим ответ 
//     //сервера












