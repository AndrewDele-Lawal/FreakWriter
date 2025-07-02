const output = document.getElementById("output");
const input = document.getElementById("userInput");

/* Fun filler text goes here :) */
output.textContent = "Yo Wassup Class?";

/* Javascript heavily utilizes await and async.
Await: Waits for a "Promise" to be resolved
async: returns a Promise */
/* Pauses function */
/* serves as helper function to freakwriter */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* Main purpose is to add text to the output */
/* serves as helper function to freakwriter */

async function typeText(text) {
    for (let char of text) {
    output.textContent += char;
    await delay(100);
    }
}

/* Main purpose is to remove text from the output*/
/* serves as helper function to freakwriter */
async function deleteText(count) {
    for (let i = 0; i < count; i++) {
    output.textContent = output.textContent.slice(0, -1);
    await delay(80);
    }
}

/* Take's a user's input and turns it freaky. */
async function freakwriter(text) {
    await delay(300)
    /* Initializes output */
    output.textContent = "";

    const Begin_Bit = Math.floor(text.length * 0.6); /* Hold's the amount of characters that make up 60% of the user's input */

    const JumpScares = [
        " I'm in your walls.",
        " NGL gang your code is cooked.",
        " twin you gotta let me go",
        " on who I just mistyped this bruh",
        " HELP PLEASE " 
    ];

    /* We insert this during the middle-ish of writing the beginning bit */
    const JumpScare = JumpScares[Math.floor(Math.random() * JumpScares.length)];

    const End_Bit = text.substring(Begin_Bit); /* The remainder of the text cut off in Begin_Bit */

    /* Type the beginning part of the user's input
    After typing the begging pause and run the Jumpscare */
    await typeText(text.substring(0, Begin_Bit));
    await delay(1000);
    await typeText(JumpScare);
    await delay(300);

    /* Quickly fix the jumpscare and finish writing the user's original input */
    await deleteText(JumpScare.length);
    await delay(500);
    await typeText(End_Bit);
}

/* Human terms for what this does. It takes a keydown (Key entered/pressed).
When this happens if the key is equal to "enter" and the input isn't empty
It stop's the user from typing and runs the function */
input.addEventListener("keydown", async (keystroke) => {
    if (keystroke.key === "Enter" && input.value.trim()) {
    input.disabled = true;
    await freakwriter(input.value.trim());
    input.disabled = false;
    input.value = "";
    }
});