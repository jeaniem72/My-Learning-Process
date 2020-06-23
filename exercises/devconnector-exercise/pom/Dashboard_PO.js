import Login_PO from './Login_PO';

class Dashboard_PO {
    checkUrl() {
        expect(browser.getUrl()).to.contain('dashboard');
    }

    // get dashboardHeader() {
    //     return $("//h1[@class='large text-primary']")
    // }

    get logoutButton() {
        return $("//a[@href='#!']")
    }

    logout() {
        browser.waitAndClick(this.logoutButton)
        Login_PO.checkUrl();
    }
}

export default new Dashboard_PO()