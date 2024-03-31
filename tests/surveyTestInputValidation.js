describe('AI Survey App Test - Name Input Validation', () => {
    it('should validate name input for invalid characters', async () => {
        await driver.activateApp('com.example.survey_app');

        // Navigate to the name input
        const nameInput = await driver.$('//android.widget.EditText[@content-desc="Name Input"]');
        await nameInput.click();

        await driver.keys('John123!@#');
        await driver.hideKeyboard();

        const submitButton = await driver.$('//android.widget.Button[@content-desc="Submit Button"]');
        await submitButton.click();

        // Check for an error message
        const errorMessage = await driver.$('//android.widget.TextView[@content-desc="Name Error Message"]');
        const errorDisplayed = await errorMessage.isDisplayed();
        expect(errorDisplayed).toBeTruthy();

        await nameInput.clear();
    });
});
