describe('AI Survey App Test - Birthdate Picker Validation', () => {
    it('should not allow future dates to be selected as birthdate', async () => {
        await driver.activateApp('com.example.survey_app');

        // Open the date picker
        const birthdatePickerButton = await driver.$('//android.widget.ImageView[@content-desc="Open Date Picker"]');
        await birthdatePickerButton.click();

        const futureYear = await driver.$('//android.widget.TextView[@content-desc="2025"]');
        await futureYear.click();

        const futureMonth = await driver.$('//android.widget.TextView[@content-desc="January"]');
        await futureMonth.click();

        const futureDay = await driver.$('//android.widget.TextView[@content-desc="1"]');
        await futureDay.click();

        const okButton = await driver.$('//android.widget.Button[@content-desc="OK"]');
        await okButton.click();

        const birthdateInput = await driver.$('//android.widget.EditText[@content-desc="Birthdate Input"]');
        const birthdateValue = await birthdateInput.getText();
        
        expect(birthdateValue).not.toEqual('01/01/2025');
    });
});
