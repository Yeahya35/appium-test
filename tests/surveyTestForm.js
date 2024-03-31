describe('AI Survey App Test', () => {
    it('should fill all fields and submit the survey', async () => {
        await driver.activateApp('com.example.survey_app');

        // Name Input
        const nameInput = await driver.$('//android.widget.ScrollView/android.widget.EditText[1]');
        await nameInput.click();
        await driver.keys('Kerem Doe');
        await driver.hideKeyboard();

        // Birthdate Input - Click to open date picker and select a day
        const birthdateButton = await driver.$('//android.widget.ImageView[@content-desc="Select Date"]');
        await birthdateButton.click();
        // Assuming '15' is the day in the date picker and is uniquely identifiable
        const dayInDatePicker = await driver.$('//android.view.View[@content-desc="13 March 2024"]');
        await dayInDatePicker.click();

        const dayInDatePickerOkey = await driver.$('//android.widget.Button[@resource-id="android:id/button1"]');
        await dayInDatePickerOkey.click();


        // City Input
        const cityInput = await driver.$('//android.widget.ScrollView/android.widget.EditText[3]');
        await cityInput.click();
        await driver.keys('New York');

        // Education Level - Click to open dropdown and select the first item
        const educationLevelButton = await driver.$('(//android.widget.ImageView[@content-desc="Dropdown"])[1]');
        await educationLevelButton.click();
        const firstItemInEducationDropdown = await driver.$('//android.widget.ScrollView/android.view.View[1]'); // Assuming it's the first TextView in the dropdown
        await firstItemInEducationDropdown.click();

        // Gender - Click to open dropdown and select the first item
        const genderButton = await driver.$('(//android.widget.ImageView[@content-desc="Dropdown"])[2]');
        await genderButton.click();
        const firstItemInGenderDropdown = await driver.$('//android.widget.ScrollView/android.view.View[1]'); // Assuming it's the first TextView in the dropdown
        await firstItemInGenderDropdown.click();

        // Cons Input
        const consInput = await driver.$('//android.view.View[@content-desc="Cons Input"]');
        await consInput.click();
        await driver.keys('Requires significant data to train models.');

        // AI Technologies - Assuming each option and corresponding input can be uniquely identified
        // Example for selecting and filling a cons for "ChatGPT"
        // const chatGptCheckbox = await driver.$('//android.widget.CheckBox[@content-desc="ChatGPT Checkbox"]');
        // await chatGptCheckbox.click();
        // const chatGptConsInput = await driver.$('//android.widget.EditText[@content-desc="ChatGPT Cons Input"]');
        // await chatGptConsInput.click();
        // await driver.keys('Can generate misleading information.');

        await driver.hideKeyboard();
        
        const webViewElement = await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Submit"))');

        // Submit Button
        const submitButton = await driver.$('//android.widget.Button');
        await submitButton.click();

        const popUpOkey = await driver.$('//android.widget.Button');
        await popUpOkey.click();

    });
});
