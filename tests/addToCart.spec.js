import userData from './test_data/users';

describe('Login', () => {
  it('fill in valid data and login', async () => {
    await browser.url(`/`);

    await $('#user-name').setValue(userData.username);
    await $('#password').setValue(userData.password);
    await $('#login-button').click();

    const addProductToCart = $('#add-to-cart-sauce-labs-backpack');
    const verifyCartBage = $('#shopping_cart_container').$('.shopping_cart_badge');
    const shoppingCart = $('#shopping_cart_container');
    await addProductToCart.click();
    await expect(verifyCartBage).toHaveText('1');
    await shoppingCart.click();

    const itemNameInCart = await $('#item_4_title_link');
    await expect(itemNameInCart).toBeExisting();
    await expect(itemNameInCart).toHaveText('Sauce Labs Backpack');
    await itemNameInCart.click();

    const itemNameOnPageDetails = await $('#inventory_item_container').$('.inventory_details_name');
    await expect(itemNameOnPageDetails).toHaveText('Sauce Labs Backpack');
  });
});
