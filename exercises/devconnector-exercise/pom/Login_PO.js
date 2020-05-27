import Home_PO from './Home_PO'
import Dashboard_PO from './Dashboard_PO'

class Login_PO {
    checkUrl() {
        expect(browser.getUrl()).to.contain('login');
    }

    get signInHeader() {
        return $("//p[@class='lead']");
    }

    get emailAddress() {
        return $("//input[@name='email']")
    }
    
    get password() {
        return $("//input[@name='password']")
    }

    get submitButton() {
        return $("[value='Login']")
    }

    submit() {
        browser.waitAndClick(this.submitButton);
        browser.pause(1000);
        Dashboard_PO.checkUrl();

    }

    successfulLogin(data) {
        this.checkUrl();
        browser.waitAndSendkeys(this.emailAddress, data[0]);
        browser.waitAndSendkeys(this.password, data[1]);
        this.submit();
    }

    get homepageButton() {
        return $("//a[@href='/']");
    }

    goHomepage() {
        browser.waitAndClick(this.homepageButton);
        Home_PO.checkHeader();
    }
}

export default new Login_PO()
