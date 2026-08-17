//Locators in Playwright

//Locator : Locators are nothing but the default methods provided by Playwright to identify the location of web elements. 
//WebElement : The element displayed in the UI 

//There are mainly 9 different types of locators available in Playwright. 

//1. getByRole()
//2. getByLabel()
//3. getByPlaceholder()
//4. getByText()
//5. getByAltText()
//6. getByTitle()
//7. getByTestId()
//8. cssSelector
//9. xpath

//1. getByRole() : getByRole Locator will locate the web element based on the role. 
//Syntax : page.getByRole('role', {name : 'value'})

//'role' : button, textbox, checkbox, link, radio etc..
//'value' : text-value, aria-label, value, label, title etc..

//Example : page.getByRole('link', {name : 'value'})

//HtmlCode :  <button>Submit</button>
//Locator : page.getByRole('button', {name : 'Submit'})

//HtmlCode : <button aria-label="Close"></button>
//Locator : page.getByRole('button', {name : 'Close'})

//HtmlCode : <a href="/gmail">Gmail</a>
//Locator : page.getByRole('link', {name : 'Gmail'})

//2.getByLabel() : getByLabel Locator will locate the web element based on the label.
//Syntax : page.getByLabel('label')

//Example:
//HtmlCode : <label for="username">Username</label>
//Locator : page.getByLabel('Username')


//3.getByPlaceholder() : getByPlaceholder Locator will locate the web element based on the `placeholder` attribute value
//Syntax : page.getByPlaceholder('placeholder')

//Html Code : <input required="" autocomplete="off" placeholder="First Name" id="firstName" class=" mr-sm-2 form-control" type="text">
//Locator : page.getByPlaceholder('First Name')

//4.getByText() : getByText Locator will locate the web element based on the text value.
//Syntax : page.getByText('text')

//HtmlCode: <h1 class="text-center">Practice Form</h1>
//Locator : page.getByText('Practice Form')

//5.getByAltText() : getByAltText Locator will locate the web element based on the `alt` attribute value.
//Syntax : page.getByAltText('alt')

//HtmlCode : <img src="images/logo.gif" alt="ParaBank" width="136" height="31" border="0" class="logo" title="ParaBank">
//Locator : page.getByAltText('ParaBank')

//6.getByTitle() : getByTitle Locator will locate the web element based on the `title` attribute value.
//Syntax : page.getByTitle('title')

//HtmlCode: <textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" aria-label="Search" placeholder="" aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwiakLDMnf2VAxWjZ2wGHUJpOkgQ39UDCB8"></textarea>
//Locator : page.getByTitle('Search')

//7.getByTestId() : getByTestId Locator will locate the web element based on the `data-testid` attribute value.
//Syntax : page.getByTestId('testid')

//HtmlCode (chatgpt.com) : <div class="wm-swipe-scrollContainer" data-testid="mobile-app-shell-scroll-container">
//Locator : page.getByTestId('mobile-app-shell-scroll-container')