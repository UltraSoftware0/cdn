// START: Sleep
function sleep(milliseconds) // Reference: https://sitepoint.com/delay-sleep-pause-wait
{
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds); 
}
// END: Sleep


// START: Initial Uppercase
function ucfirst (string) {
    if (typeof(string) != 'string') return;

    return string[0].toUpperCase() + string.substring(1);
}
// END: Initial Uppercase
