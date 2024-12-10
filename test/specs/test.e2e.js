import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';
import userData from '../../tests/test_data/users.js';

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    // await LoginPage.open();
    await browser.url('/');

    await LoginPage.login(userData.user2.username, userData.user2.password);
    const title = await $('div').$('.title');
    const shoppingCart = await $('#shopping_cart_container');
    
    await expect(title).toBeDisplayed();
    await expect(shoppingCart).toBeDisplayed();
  });
});
