const LoginPage = require('./LoginPage');

function pages(name) {
    const items = {
        loginPage: new LoginPage()
    };

    return items[name];
}

module.exports = {
    LoginPage,
    pages
};