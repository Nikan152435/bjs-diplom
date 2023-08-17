// Класс для работы с формой авторизации и регистрации
class UserForm {
    constructor() {
        // Получаем элементы форм и сообщений об ошибках из DOM
        this.loginForm = document.querySelector('#loginForm');
        this.registerForm = document.querySelector('#registerForm');
        this.loginErrorMessageBox = document.querySelector('#loginErrorMessage');
        this.registerErrorMessageBox = document.querySelector('#registerErrorMessage');
        
        // Привязываем методы обработчиков к текущему контексту (this)
        this.loginFormCallback = this.loginFormAction.bind(this);
        this.registerFormCallback = this.registerFormAction.bind(this);
        
        // Добавляем обработчики событий на формы
        this.loginForm.addEventListener('submit', this.loginFormCallback);
        this.registerForm.addEventListener('submit', this.registerFormCallback);
    }

    // Метод для вывода сообщения об ошибке авторизации
    setLoginErrorMessage(message) {
        this.loginErrorMessageBox.textContent = message;
    }

    // Метод для вывода сообщения об ошибке регистрации
    setRegisterErrorMessage(message) {
        this.registerErrorMessageBox.textContent = message;
    }

    // Обработчик события сабмита формы авторизации
    loginFormAction(event) {
        event.preventDefault();
        // Получаем данные из формы
        const formData = this.getData(this.loginForm);
        
        // Выполняем запрос на сервер для авторизации
        ApiConnector.login(formData, (response) => {
            if (response.success) {
                // Если авторизация успешна, перезагружаем страницу
                location.reload();
            } else {
                // Выводим сообщение об ошибке авторизации
                this.setLoginErrorMessage(response.error);
            }
        });
    }

  // Обработчик события сабмита формы регистрации
    registerFormAction(event) {
        event.preventDefault();
        // Получаем данные из формы
        const formData = this.getData(this.registerForm);
        
        // Выполняем запрос на сервер для регистрации
        ApiConnector.register(formData, (response) => {
            if (response.success) {
                // Если регистрация успешна, перезагружаем страницу
                location.reload();
            } else {
                // Выводим сообщение об ошибке регистрации
                this.setRegisterErrorMessage(response.error);
            }
        });
    }

    // Метод для получения данных из формы
    getData(form) {
        const formData = new FormData(form);
        return {
            login: formData.get('login'),
            password: formData.get('password')
        };
    }
}








