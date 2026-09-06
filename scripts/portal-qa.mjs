export default async function run(page) {
    const results = [];
    for (const viewport of [{ name: 'desktop', width: 1440, height: 900 }, { name: 'mobile', width: 390, height: 844 }]) {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto('http://127.0.0.1:4173/');
        await page.getByRole('heading', { name: 'Command Centre' }).waitFor();
        results.push({
            viewport: viewport.name,
            rootHeading: await page.getByRole('heading', { name: 'Command Centre' }).isVisible(),
            moduleLinks: await page.locator('.ci-nav-link').count(),
            horizontalOverflow: await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth),
        });
        await page.screenshot({ path: `qa-screenshots/portal-${viewport.name}.png`, fullPage: true });

        await page.goto('http://127.0.0.1:4173/incidents');
        await page.getByRole('heading', { name: 'Incidents' }).waitFor();
        results.push({ viewport: viewport.name, placeholder: await page.getByText('Not yet enabled').isVisible() });

        await page.goto('http://127.0.0.1:4173/godseye');
        await page.getByRole('link', { name: /CI Command Centre/ }).waitFor();
        results.push({
            viewport: viewport.name,
            returnLink: await page.getByRole('link', { name: /CI Command Centre/ }).isVisible(),
            appMounted: await page.locator('.godseye-app').count() === 1,
        });
        await page.screenshot({ path: `qa-screenshots/godseye-${viewport.name}.png`, fullPage: true });
    }
    return results;
}
