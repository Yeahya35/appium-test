describe('AI Survey App Test', () => {
    it('should prompt to fill all fields if one is left empty and try to submit the survey', async () => {
        await driver.activateApp('com.example.survey_app');

        // Name Input
        const nameInput = await driver.$('//android.widget.ScrollView/android.widget.EditText[1]');
        await nameInput.click();
        await driver.keys('Kerem Doe');
        await driver.hideKeyboard();

        // Birthdate Input 
        const birthdateButton = await driver.$('//android.widget.ImageView[@content-desc="Select Date"]');
        await birthdateButton.click();
        const dayInDatePicker = await driver.$('//android.view.View[@content-desc="13 March 2024"]');
        await dayInDatePicker.click();
        const dayInDatePickerOkey = await driver.$('//android.widget.Button[@resource-id="android:id/button1"]');
        await dayInDatePickerOkey.click();

        // Skip City Input to trigger validation failure 

        // Education Level 
        const educationLevelButton = await driver.$('(//android.widget.ImageView[@content-desc="Dropdown"])[1]');
        await educationLevelButton.click();
        const firstItemInEducationDropdown = await driver.$('//android.widget.ScrollView/android.view.View[1]');
        await firstItemInEducationDropdown.click();

        // Gender 
        const genderButton = await driver.$('(//android.widget.ImageView[@content-desc="Dropdown"])[2]');
        await genderButton.click();
        const firstItemInGenderDropdown = await driver.$('//android.widget.ScrollView/android.view.View[1]');
        await firstItemInGenderDropdown.click();

        // Cons Input
        const consInput = await driver.$('//android.view.View[@content-desc="Cons Input"]');
        await consInput.click();
        await driver.keys('Requires significant data to train models.');
        await driver.hideKeyboard();

        const webViewElement = await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Submit"))');

        // Submit Button
        const submitButton = await driver.$('//android.widget.Button');
        await submitButton.click();

        // Expecting a popup dialog indicating a missing field
        const dialogMessage = await driver.$('//android.widget.TextView');
        const messageText = await dialogMessage.getText();
        expect(messageText).toContain('Please fill all the fields.');

        // Closing the dialog to clean up after the test
        const popUpOkey = await driver.$('//android.widget.Button');
        await popUpOkey.click();


    });
});
