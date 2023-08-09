//keyup event
//-Is triggered when the user releases a key after typing
//event.code - returns a string representing the pysical key location of the string that was pressed.
//event.key- returns a descriptive string (e.g., "Enter", "Shift", "ArrowUp", etc.).
//event.shiftKey, event.ctrlKey, event.altKey, event.metaKey: These properties return a Boolean value indicating whether the Shift, Ctrl, Alt, or Meta (Command key on macOS) key was pressed during the keyup event/

document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("#userInput");

inputElement.addEventListener("keyup", (event)=>{
    const key = event.key;

    const code = event.code;

    //check if modifier keys were pressed
    const shiftPressed = event.shiftKey;
    const ctrlPressed = event.ctrlKey;
    const altPressed = event.altKey;
    const metaPressed = event.metaKey;

    console.log("Key: ", key);
    console.log("Code: ", code);
    console.log("Shift Pressed: ", shiftPressed);
    console.log("Ctrl Pressed: ", ctrlPressed);
    console.log("Alt Pressed: ", altPressed);
    console.log("Meta Pressed: ", metaPressed);

}
)
