describe('AI Survey App AI Components Test', () => {
    it('should ensure each checked AI component has its text field filled', async () => {
        await driver.activateApp('com.example.survey_app');

        // Navigate to the survey form
        await goToSurveyForm();

        const chatGptCheckbox = await driver.$('//android.widget.CheckBox[@content-desc="ChatGPT Checkbox"]');
        await chatGptCheckbox.click();
        const claudeCheckbox = await driver.$('//android.widget.CheckBox[@content-desc="Claude Checkbox"]');
        await claudeCheckbox.click();

        const chatGptConsInput = await driver.$('//android.widget.EditText[@content-desc="ChatGPT Cons Input"]');
        await chatGptConsInput.setValue('Needs large datasets for training.');
        const claudeConsInput = await driver.$('//android.widget.EditText[@content-desc="Claude Cons Input"]');
        await claudeConsInput.setValue('Can sometimes generate biased output.');

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
