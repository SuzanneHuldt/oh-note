function HasContent(page, string) {
    var testWindow = window.open(page, "_self")
    var content = document.body.textContent;
    var matcher = new RegExp( '(' + string + ')' )
    return matcher.test(content)
}
