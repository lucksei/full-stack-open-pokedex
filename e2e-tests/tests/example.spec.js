const { test, describe, expect, } = require('@playwright/test');



describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('ivysaur')).toBeVisible();
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible();
  });

  test('front page has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Pokemon');
  });

  test('Can navigate to a pokemon page', async ({ page }) => {
    await page.goto('/');
    await page.getByText('ivysaur').click();
    await expect(page).toHaveURL('/pokemon/ivysaur');
    await expect(page.getByText('overgrow')).toBeVisible();
    await expect(page.getByText('chlorophyll')).toBeVisible();
  });
});
