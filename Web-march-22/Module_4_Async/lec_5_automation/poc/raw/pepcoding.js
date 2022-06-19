// browser control
// controls a headless browser -> browser that is by default not visible 
// npm i puppeteer
const puppeteer = require("puppeteer");
// nearly every function of puppeteer returns a promise
async function fn() {
    const browserRepresentativeObj = await puppeteer.launch({
        headless: false,
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        defaultViewport: null,
        args: ["--start-maximized","--start-in-incognito"],
        slowMo:100
    });
    //new  tab open  
    const tab = await browserRepresentativeObj.newPage();
    // // to go google's home page 
    await tab.goto("https://www.google.com");
    // // text type 
    await tab.type("input[type='text']", "pepcoding", { delay: 200 });
    // // /to press a specific key
    await tab.keyboard.press("Enter");
    // // // page change error prevent  -> to wait for selector that is present on the second page  
    await tab.waitForSelector(".LC20lb.MBeuO.DKV0Md", { visible: true });
    // // click 
    await tab.click(".LC20lb.MBeuO.DKV0Md", { delay: 200 });
}
fn();
// keyboard ,mouse ,scroll


