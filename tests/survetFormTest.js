describe('AI Survey App Test', () => {
    it('should fill the name and check submit button', async () => {
        // Assuming testTag translates to accessibilityId in this setup

        // Activate the app instead of launching it. Ensure 'com.example.survey_app' is your app's package name.
        await driver.activateApp('com.example.survey_app');

        // Wait for the Name input to be visible
        // const nameInput = await driver.findElement('xpath', '//android.widget.TextView[@text="Name and Surname"]');
        const nameInput = await driver.$('//android.widget.TextView[@text="Name and Surname"]');
        // await nameInput.waitFor({ timeout: 8000 })
        console.log("HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
        console.log(nameInput)
        // await nameInput.click(); // Focus on the input
        // await driver.sendKeys('John Doe'); // Send keys directly
        // Input a name
        // await nameInput.setValue('John Doe');
        await nameInput.click(); // Focus on the input
        await driver.keys('John Doe'); // Send keys directlyz
        
        // Check if the Submit button is visible using its test tag
        const submitButton = await driver.$('//android.widget.TextView[@text="Name and Surname"]');
        await submitButton.click();
        // const isSubmitDisplayed = await submitButton;
        
        // Assert that the Submit button is visible
        // expect(isSubmitDisplayed).toBe(true);

        // Optionally, take a screenshot
        await driver.takeScreenshot().then(
            function(image, err) {
                require('fs').writeFileSync('snapshot.png', image, 'base64');
            }
        );
    });
});
