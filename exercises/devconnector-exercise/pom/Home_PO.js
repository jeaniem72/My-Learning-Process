import Login_PO from './Login_PO';

class Home_PO {
    get homepageHeader() {
        return $("//h1[@class='x-large']")
    }

    checkHeader() {
        expect(this.homepageHeader.getText()).to.equal('Developer Connector')
    }

    get loginButton() {
        return $("//a[@href='/login']")
    }

    login() {
        browser.waitAndClick(this.loginButton);
        Login_PO.checkUrl();
    }
}

export default new Home_PO() 