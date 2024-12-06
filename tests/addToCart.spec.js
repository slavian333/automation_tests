describe('Login', () => {
    it('fill in valid data and login', async () => {
        await browser.url(`https://www.saucedemo.com/`);

        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
        
        await $('#add-to-cart-sauce-labs-backpack').click();
        await $('//div[@id="shopping_cart_container"]//span[text()="1"]').toBeExisting();
        // await $('div .title').toBeExisting();
        await $('#shopping_cart_container').click();

        const cartItem = await $('#item_4_title_link');
        await cartItem.toBeExisting();
        await cartItem.click();

        // await $('.inventory_item:nth-child(2)').toBeExisting();
    })
})