describe('Login', () => {
  it('fill in valid data and login', async () => {
    await browser.url(`https://www.saucedemo.com/`);

    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();

    const title = await $('div').$('.title');
    const shoppingCart = await $('#shopping_cart_container');
    const itemsQuantity = await $('.inventory_item:nth-child(2)');
    await expect(title).toBeDisplayed();
    await expect(shoppingCart).toBeDisplayed();
    await expect(itemsQuantity).toBeDisplayed();
  });
});
