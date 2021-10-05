const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

// Unit
test('should output name and age', () => {
	const text = generateText('Jose', 31);
	const result = 'Jose (31 years old)';
	expect(text).toBe(result);
});

describe('generateText invalid inputs', () => {
	test('should output data-less text', () => {
		const text = generateText('', null);
		const result = ' (null years old)';
		expect(text).toBe(result);
	});
	test('should output undefined text', () => {
		const text = generateText();
		const result = 'undefined (undefined years old)';
		expect(text).toBe(result);
	});
});

// Integration
test('should generate valid text ouput', () => {
	const text = checkAndGenerate('Jose', 31);
	const result = 'Jose (31 years old)';
	expect(text).toBe(result);
});

// E2E
test('should create an element with text and correct class', async () => {
	// this returns promise
	const browser = await puppeteer.launch({
		headless: false, // run browser with ui
		slowMo: 80, // slowdown automated operation
		args: ['--window-size=1920,1080'], // launch browser with arguments
	});

	const page = await browser.newPage();
	await page.goto('http://127.0.0.1:5500/index.html');
	await page.click('input#name');
	await page.type('input#name', 'Anna');
	await page.click('input#age');
	await page.type('input#age', '28');
	await page.click('#btnAddUser');
	const finalText = await page.$eval('.user-item', (el) => el.textContent); //$eval gets access to an element
	expect(finalText).toBe('Anna (28 years old)');
}, 10000);
