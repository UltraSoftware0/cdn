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
