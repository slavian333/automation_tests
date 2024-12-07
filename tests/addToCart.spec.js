describe('Login', () => {
  it('fill in valid data and login', async () => {
    await browser.url(`https://www.saucedemo.com/`);

    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();

    const addProductToCart = $('#add-to-cart-sauce-labs-backpack');
    const verifyCartBage = $('//div[@id="shopping_cart_container"]//span[text()="1"]');
    const shoppingCart = $('#shopping_cart_container');
    await addProductToCart.click();
    await expect(verifyCartBage).toBeExisting();
    await shoppingCart.click();

    const itemNameInCart = await $('#item_4_title_link');
    await expect(itemNameInCart).toBeExisting();
    await expect(itemNameInCart).toHaveText('Sauce Labs Backpack');
    await itemNameInCart.click();

    const itemNameOnPageDetails = await $('#inventory_item_container').$('.inventory_details_name');
    await expect(itemNameOnPageDetails).toHaveText('Sauce Labs Backpack');
  });
});
