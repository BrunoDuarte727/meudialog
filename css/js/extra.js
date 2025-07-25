"use strict";
async function alertDialog(text, title, okButtonText = "OK") {
    const dialog = new Dialog(title, text);
    dialog.addElement(new DialogButton(okButtonText, "positive", true, true));
    await dialog.prompt();
}
async function confirmDialog(text, title, okButtonText = "OK", cancelButtonText = "Cancel") {
    const dialog = new Dialog(title, text);
    dialog.addElement(
        new DialogButton(okButtonText, "positive", true, true),
        new DialogButton(cancelButtonText, "negative")
    );
    const answer = await dialog.prompt();
    return answer==0;
}
async function promptDialog(text, defaultValue, title, placeholder, okButtonText = "OK", cancelButtonText = "Cancel") {
    const input = new DialogInput(placeholder, defaultValue);
    const dialog = new Dialog(title, text);
    dialog.addElement(
        input,
        new DialogButton(okButtonText, "positive", true, true),
        new DialogButton(cancelButtonText, "negative")
    );
    const answer = await dialog.prompt();
    if(answer==1) return input.text;
    return null;
}
