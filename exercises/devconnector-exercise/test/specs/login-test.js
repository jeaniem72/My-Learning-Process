describe("Test login on devconnector website", () => {
    beforeEach(function() {
        browser.url('/');
    });

    it("Login to jeanie's account and jdoe's account, then go back to homepage", () => {
        const loginButton = $("//a[@href='/login']")
        loginButton.click();

        const emailAddress = $("//input[@name='email']");
        const password = $("//input[@name='password']");
        const submitButton = $("[value='Login']");

        emailAddress.setValue('jeanie@gmail.com');
        password.setValue('123456');
        submitButton.click();

        const logoutButton = $("//a[@href='#!']");
        logoutButton.click();

        emailAddress.setValue('jdoe@gmail.com');
        password.setValue('123456');
        submitButton.click();

        logoutButton.click();

        browser.url('/');
    });
})