// Класс для работы с серверными запросами
class ApiConnector {
    static login({ login, password }, callback) {
        // Здесь выполняется запрос на авторизацию
        // В колбеке обработайте ответ от сервера и вызовите переданный callback
    }

    static register({ login, password }, callback) {
        // Здесь выполняется запрос на регистрацию
        // В колбеке обработайте ответ от сервера и вызовите переданный callback
    }
}

// Создание объекта UserForm при загрузке страницы
window.onload = function() {
    const userForm = new UserForm();
};

