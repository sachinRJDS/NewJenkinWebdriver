describe('jenkins', () => {
    it('testJenkins', async() => {
        await browser.url("https://demo.actitime.com")
        await browser.maximizeWindow()
        const title=await browser.getTitle()
        await browser.pause(2000)
        console.log(title);
    });
});