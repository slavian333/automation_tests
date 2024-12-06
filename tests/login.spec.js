import { describe, it } from 'mocha';
 
describe('Login', () => {
    it('fill in valid data and login', async () => {
        await browser.url(`https://www.saucedemo.com/`);

        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
        
        await $('div .title').toBeExisting();
        await $('#shopping_cart_container').toBeExisting();
        await $('.inventory_item:nth-child(2)').toBeExisting();
    })
})