// eslint-disable-next-line no-undef
const { test, describe, expect } = require("@playwright/test");

describe("Pokedex", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("http://localhost:8080");
    await expect(page.getByText("ivysaur")).toBeVisible();
    await expect(
      page.getByText(
        "Pokémon and Pokémon character names are trademarks of Nintendo.",
      ),
    ).toBeVisible();
  });

  test("navigation to pokemon page works", async ({ page }) => {
    await page.goto("http://localhost:8080");
    await expect(page.getByText("ivysaur")).toBeVisible();

    const pokemon_button = page.getByText("ivysaur");
    await pokemon_button.click();

    await expect(page.getByText("ivysaur")).toBeVisible();
    await expect(page.getByText("chlorophyll")).toBeVisible();
  });
});
