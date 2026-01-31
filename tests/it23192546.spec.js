const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 - Convert simple present tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type('mama vaedata yanavaa',{delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('මම වැඩට යනවා', { timeout: 20000 });
});

test('Pos_Fun_0002 - Convert interrogative greeting sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type('oyaa kohomadha inne dhaen?' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('ඔයා කොහොමද ඉන්නේ දැන්?', { timeout: 20000 });
});

test('Pos_Fun_0003 - Convert imperative command sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' ikmanin enna' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('ඉක්මනින් එන්න', { timeout: 20000 });
});
test('Pos_Fun_0004 - Convert negative present tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' mama ethanata giye naehae' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('මම එතනට ගියෙ නැහැ', { timeout: 20000 });
});
test('Pos_Fun_0005 - Convert compound sentence with conjunction', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Api naendhalage gedhara yanavaa saha havasa movie ekak balanna yanavaa eyalaa ekka' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('අපි නැන්දලගෙ ගෙදර යනවා සහ හවස movie එකක් බලන්න යනවා එයලා එක්ක', { timeout: 20000 });
});
test('Pos_Fun_0006 - Convert future tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Mama heta pansal yanavaa' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('මම හෙට පන්සල් යනවා', { timeout: 20000 });
});
test('Pos_Fun_0007 - Convert polite request sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' puluvannam heta enna' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('පුලුවන්නම් හෙට එන්න', { timeout: 20000 });
});
test('Pos_Fun_0008 - Convert informal spoken sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' meeka karapan' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('මේක කරපන්', { timeout: 20000 });
});
test('Pos_Fun_0009 - Convert sentence with English technical term', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Online Meeting ekak thiyenne' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('Online Meeting එකක් තියෙන්නෙ', { timeout: 20000 });
});
test('Pos_Fun_0010 - Convert sentence with place name and English word', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Holiday eke Galle Beach eka visit karanna oone' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('Holiday eke Galle Beach එක visit කරන්න ඕනෙ', { timeout: 20000 });
});

test('Pos_Fun_0011 - Convert plural pronoun usage sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type('Api oru padhimu' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('අපි ඔරු පදිමු', { timeout: 20000 });
});
test('Pos_Fun_0012 - Convert slang-based conversational sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Epaa kiyanna epaa machang, mama balanna yanavaa.' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('එපා කියන්න එපා මචන්ග්, මම බලන්න යනවා.', { timeout: 20000 });
});
test('Pos_Fun_0013 - Convert sentence with joined words missing spaces)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' mamapassekoolkarannam' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('මමපස්සෙකෝල්කරන්නම්', { timeout: 20000 });
});
test('Pos_Fun_0014 - Convert sentence with repeated words for emphasis', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Hitha hitha inna eka amaaruyi.' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('හිත හිත ඉන්න එක අමාරුයි.', { timeout: 20000 });
});
test('Pos_Fun_0015 - Convert sentence containing punctuation marks', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' ee thaena maara lassanayi ne! api kattiyama aaye dhavasaka yamudha' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('ඒ තැන මාර ලස්සනයි නේ! අපි කට්ටියම ආයෙ දවසක යමුද', { timeout: 20000 });
});
test('Pos_Fun_0016 - Convert sentence with currency format', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Total bill eka LKR 15000 unaa.' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('Total bill එක LKR 15000 උනා.', { timeout: 20000 });
});
test('Pos_Fun_0017 - Convert sentence with time format', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Mama 6:45 PM venakota  gedhara enavaa.' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('මම 6:45 PM වෙනකොට ගෙදර එනවා.', { timeout: 20000 });
});
test('Pos_Fun_0018 - Convert sentence with multiple spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Api kattiya trip ekak yamu.' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('අපි කට්ටිය trip එකක් යමු.', { timeout: 20000 });
});
test('Pos_Fun_0019 - Convert sentence with English abbreviations', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Mee file eka ASAP send karanna.' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('මේ file එක ASAP send කරන්න.', { timeout: 20000 });
});
test('Pos_Fun_0020 - Convert multi-line input text', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(
        `Api trip eka plan kalaa
         Kandy valata yanna
         oya enavadha?`,
{ delay: 100 }
);

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText(`අපි trip එක plan කලා
    Kandy වලට යන්න
    ඔය එනවද?`, { timeout: 20000 });
});
test('Pos_Fun_0021 - Convert medium-length mixed language paragraph', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Api last week Colombo giyaa,mage office eke vaedakata' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('අපි last week Colombo ගියා,mage office eke වැඩකට', { timeout: 20000 });
});
test('Pos_Fun_0022 - Convert long paragraph input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(`Mama last month new job ekak start kalaa, eeka nam tikak challenging unaa. Office eke team eka hari friendly 
 namuth work load eka godak thibbaa.` , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText(`මම last month new job එකක් start කලා, ඒක නම් ටිකක් challenging උනා. Office eke team එක හරි friendly 
නමුත් work load එක ගොඩක් තිබ්බා.`, { timeout: 20000 });
});
test('Pos_Fun_0023 - Convert sentence with measurement unit', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Adha Weather eka 32°C vagee thiyenavaa.' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('අද Weather එක 32°C වගේ තියෙනවා.', { timeout: 20000 });
});
test('Pos_Fun_24 - Convert sentence with pronoun variation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Oyalaa adha havasa meeting ekata join venna' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('ඔයාලා අද හවස meeting එකට join වෙන්න', { timeout: 20000 });
});

//Negative Functional Test Cases
test('Neg_Fun_001 - Empty Input Handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type('' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('...', { timeout: 20000 });
});
test('Neg_Fun_002 - Numbers Only Input Handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' 123456789' , {delay : 100});

  await page.waitForTimeout(1500);
  // Check if translation happened
  const outputText = await page.locator('body').innerText();

  // If numbers are not translated, fail the test with a clear message
  if (outputText.includes('123456789') || outputText.trim() === '') {
    throw new Error('Test Failed: Numbers only input is invalid and cannot be translated.');
  }
  await expect(page.locator('body'))
    .toContainText('Invalid Input', { timeout: 20000 });
});
test('Neg_Fun_003 - Incorrect handling of excessive punctuation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' oyaa heta enavadhaa???' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('ඔයා හෙට එනවද?', { timeout: 20000 });
});
test('Neg_Fun_004 - Incorrect date format interpretation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Seminar eka 25-02-2025 man hithanne.' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('Seminar eka 02-25-2025 man hithanne.', { timeout: 20000 });
});
test('Neg_Fun_005 - Incorrect conversion of long mixed paragraph', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type('api project report eka submit karanna oonee heta. Teams meeting eka 3.00 PM lu thiyennee.mama documents tika PDF vidhihata attach kara.' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText(`අපි project report එක submit කරන්න ඕනෙ හෙට. Teams meeting එක 3.00 PM ලු තියෙන්නේ.මම documents ටික PDF විදිහට attach කරා.
`, { timeout: 20000 });
});
test('Neg_Fun_006 - Sinhala Input Instead of Singlish', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' මම හෙට මාතර යනවා' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('mama heta mathara yanavaa', { timeout: 20000 });
});
test('Neg_Fun_007 - Multi-line input formatting failure', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type( `mata badagini
   monaahari kannonee
   api eliyata yandha?`, {delay : 100});

  await page.waitForTimeout(1500);

  const outputText = await page.locator('body').innerText();

  // Fail if line breaks are NOT present (merged incorrectly)
  if (!outputText.includes('\n')) {
    throw new Error(
      'Test Failed: Multi-line input was incorrectly merged into a single line.'
    );
  }
  await expect(page.locator('body'))
  .toContainText('මට බඩගිනි, මොනාහරි කන්නොනේ. අපි එලියට යන්ද?');

});
test('Neg_Fun_008 - Sentence with invalid numeric unit', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' meeka -20 kg vitharayi.' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('Invalid', { timeout: 20000 });
});
test('Neg_Fun_009 - Symbols Handling ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type('  *65#$3@' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('Invalid input', { timeout: 20000 });
});
test('Neg_Fun_010- Multi-line paragraph with punctuation confusion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(`mama palliyata yanavaa,
nangi class yanavaa!
boodhipuujava patan ganne kiyatadha ?` , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('මම පල්ලියට යනව,නන්ගි class යනවා!!!බෝදිපූජව පටන් ගන්නෙ කියටද ??', { timeout: 20000 });
});

test('Pos_UI_001- Translate Mixed Singlish Words to Sinhala', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Ane, ikmanata class yanna oni' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('අනෙ, ඉක්මනට class යන්න ඔනි', { timeout: 20000 });
});

test('Neg_UI_001- Real-Time Translation of Symbols / Numbers Only', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' 12345 !!!! $$$' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('Invalid input', { timeout: 20000 });
});
