import Home_PO from '../../pom/Home_PO'
import Login_PO from '../../pom/Login_PO';
import Dashboard_PO from '../../pom/Dashboard_PO'
var config = require('../../config/login-config')


describe("Test login on devconnector website", () => {
    beforeEach(function() {
        browser.url('/');
        Home_PO.checkHeader();
    });

    it("Login to 2 accounts: jeanie's and jdoe's, then go back to homepage", () => {
        Home_PO.login();

        Login_PO.successfulLogin(config.user1);
        
        Dashboard_PO.logout();

        Login_PO.successfulLogin(config.user2);

        Dashboard_PO.logout();

        Login_PO.goHomepage();
    });
})