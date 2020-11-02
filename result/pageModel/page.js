import { Selector } from 'testcafe'


class Page {
constructor() {
this.namebox = Selector('#developer-name')
this.sendButton = Selector('#submit-button')
this.resultWording = Selector('#article-header')
  }
}

export default Page
