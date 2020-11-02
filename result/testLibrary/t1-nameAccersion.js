import { Selector } from 'testcafe'
import Page from '../pageModel/page.js'
fixture `Getting Started`
.page `http://devexpress.github.io/testcafe/example`;
const page = new Page()

test('My first test', async t => {
    await t
    .typeText(page.namebox, 'John Smith')
    .click(page.sendButton)
    .expect(page.resultWording.innerText).eql('Thank you, John Smith!');
});