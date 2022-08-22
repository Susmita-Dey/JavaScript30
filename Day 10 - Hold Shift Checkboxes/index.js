const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
  // console.log(e);
  // Check if they had the shift key down and check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahaed and do what we please
    // loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them inbetween!");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((box) => box.addEventListener("click", handleCheck));
