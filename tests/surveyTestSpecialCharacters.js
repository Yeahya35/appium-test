describe('AI Survey App Special Characters Input Test', () => {
    it('should accept and correctly handle special characters in text fields', async () => {
        await driver.activateApp('com.example.survey_app');

        // Navigate to the survey form
        await goToSurveyForm();

        // Define a set of special characters to test
        const specialCharacters = '😊 © ® ™ ❄️ 🎉 👍 🏳️‍🌈';

        const nameInput = await driver.$('//android.widget.EditText[@content-desc="Name Input"]');
        const consInput = await driver.$('//android.widget.EditText[@content-desc="Cons Input"]');

        // Enter special characters in the Name field
        await nameInput.click();
        await nameInput.clearValue(); // Ensure the field is empty before entering new value
        await driver.keys(specialCharacters);
        await driver.hideKeyboard();

        // Enter special characters in the Cons/Defects field
        await consInput.click();
        await consInput.clearValue(); // Ensure the field is empty before entering new value
        await driver.keys(specialCharacters);
        await driver.hideKeyboard();

        // Submit the survey
        const submitButton = await driver.$('//android.widget.Button[@content-desc="Submit Button"]');
        await submitButton.click();

  
        const successMessage = await driver.$('//android.widget.TextView[@content-desc="Success Message"]');
        expect(await successMessage.isDisplayed()).toBeTruthy();


        async function goToSurveyForm() {
            const mainMenuIndicator = await driver.$('//android.widget.TextView[@content-desc="Main Menu"]');
            await mainMenuIndicator.waitForDisplayed({ timeout: 5000 });

            const surveyFormMenuItem = await driver.$('//android.widget.TextView[@content-desc="Survey Form Menu Item"]');
            await surveyFormMenuItem.click();
        
            const surveyFormLoadedIndicator = await driver.$('//android.widget.TextView[@content-desc="Survey Form Loaded"]');
            await surveyFormLoadedIndicator.waitForDisplayed({ timeout: 5000 });

            try {
                const introDialogDismissButton = await driver.$('//android.widget.Button[@content-desc="Dismiss Intro Dialog"]');
                if (await introDialogDismissButton.isDisplayed()) {
                    await introDialogDismissButton.click();
                }
            } catch (error) {

                console.log("No introductory dialog appeared, continuing to the survey form.");
            }
        }
    });
});
