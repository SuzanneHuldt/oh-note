function HasContent(page, string) {
    var testWindow = window.open(page, "_self")
    var content = testWindow.document.body.textContent;
    var matcher = new RegExp( '(' + string + ')' )
    return content.test(matcher)
}
