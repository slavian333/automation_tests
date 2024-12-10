import userData from './test_data/users';

describe('Login', () => {
  it('fill in valid data and login', async () => {
    await browser.url(`/`);

    await $('#user-name').setValue(userData.user1.username);
    await $('#password').setValue(userData.user1.password);
    await $('#login-button').click();

    const title = await $('div').$('.title');
    const shoppingCart = await $('#shopping_cart_container');
    const itemsQuantity = await $('.inventory_item:nth-child(2)');
    await expect(title).toBeDisplayed();
    await expect(shoppingCart).toBeDisplayed();
    await expect(itemsQuantity).toBeDisplayed();
  });
});
