
/* variables */
let outputDisplayPrimary = document.getElementById("output-display-primary")
let outputDisplaySecondary = document.getElementById("output-display-secondary")
let displayPrimaryText = document.getElementById("display-primary-text")
let displaySecondaryText = document.getElementById("display-secondary-text")
let buttonContainer = document.getElementById("button-container")
let buttonContainerB = document.getElementById("button-container-b")
let clearButton = document.getElementById("clear-button")
let clearButtonB = document.getElementById("clear-button-b")
let equalButton = document.getElementById("equal-button")
let equalButtonB = document.getElementById("equal-button-b")
let displaySwitch = document.getElementById("display-switch")
const buttonKeys = document.querySelector(".button-container .input-button-div").children
const buttonKeyss = document.querySelector(".button-container .input-button-div").children
const buttonKeysB = document.querySelector(".button-container-b").children


let displaySwitchToggle = 0
displaySwitch.addEventListener("click", event => {
  if (displaySwitchToggle == 0) {

    // toggle active display box shadow
    outputDisplayPrimary.style.boxShadow = "var(--acnt-f) 0 0 20px 1px"
    outputDisplaySecondary.style.boxShadow = "var(--acnt-b) 0 0 10px 1px"
    
    // toggle button container 'a' and 'b'
    buttonContainer.style.display = "none"
    buttonContainerB.style.display = "grid"

    // toggle display switch
    displaySwitchToggle = 1
  } else if (displaySwitchToggle == 1) {
    // toggle active display box shadow
    outputDisplayPrimary.style.boxShadow = "var(--acnt-b) 0 0 10px 1px"
    outputDisplaySecondary.style.boxShadow = "var(--acnt-f) 0 0 20px 1px"
    
    // toggle button container 'a' and 'b'
    buttonContainer.style.display = "flex"
    buttonContainerB.style.display = "none"

    // toggle display switch
    displaySwitchToggle = 0
  }
})

// clear output display
clearedToggle = 0
clearButton.addEventListener("click", event => {
  if (clearedToggle == 0) {
    displayPrimaryText.innerText = ""
    if (displaySecondaryText.innerText != "") {
      clearButton.value = "C/A"
    }
    clearedToggle = 1
  } else if (clearedToggle == 1) {
    displayPrimaryText.innerText = ""
    displaySecondaryText.innerText = ""
    clearButton.value = "C"
    clearedToggle = 0
  }
})

clearButtonB.addEventListener("click", event => {
  if (clearedToggle == 0) {
    displaySecondaryText.innerText = ""
    if (displayPrimaryText.innerText != "") {
      clearButtonB.value = "C/A"
    }
    clearedToggle = 1
  } else if (clearedToggle == 1) {
    displayPrimaryText.innerText = ""
    displaySecondaryText.innerText = ""
    clearButtonB.value = "C"
    clearedToggle = 0
  }
})

for (let button of (buttonKeys, buttonKeyss)) {
  button.addEventListener("click", event => {
    if (button.value != undefined) {
      const buttonValue = button.value
      if (displaySwitchToggle == 0) {
	if (displayPrimaryText.innerText.length < 16) {
	  displayPrimaryText.innerText += buttonValue
	}
      } else if (displaySwitchToggle == 1) {
	if (displaySecondaryText.innerText.length < 16) {
	  displaySecondaryText.innerText += buttonValue
	}
      }
    }
  })
}

for (let button of buttonKeysB) {
  button.addEventListener("click", event => {
    if (button.value != undefined) {
      const buttonValue = button.value
      if (displayPrimaryText.innerText.length < 16) {
	if (displaySwitchToggle == 0) {
	displayPrimaryText.innerText += buttonValue
	} else if (displaySwitchToggle == 1) {
	displaySecondaryText.innerText += buttonValue
	}
      }
    }

  })
}

function calculateToDecimal() {
  
  // variables
  let binaryValueArrayIndex = []
  let binaryValueArray = []
  let toDecimal = []

  // retrieve binary input value
  let binaryValue = displayPrimaryText.innerText

  // split input value to array
  binaryValue = binaryValue.split("")
  binaryValue.reverse()
  let count = 0
  for (x of binaryValue) {
    binaryValueArray.push(x)
    binaryValueArrayIndex.push(count)
    count += 1
  }

  for (x in binaryValueArray) {
    let number = binaryValueArray[x] * (2 ** binaryValueArrayIndex[x])
    toDecimal.push(number)
  }

  decimalValue = 0
  for (x in toDecimal) {
    decimalValue += toDecimal[x]
  }

  // display calculated value to output
  displaySecondaryText.innerText = decimalValue
}

function calculateToBinary() {
  
  // variables
  let toBinary = []

  // retrieve binary input value
  let decimalValue = displaySecondaryText.innerText
  
  // convert decimal value to Number object
  decimalValue = Number(decimalValue)
  
  // convert decimal value to binary value
  function retrieveDecimal(parameter) {
    while (parameter > 0) {
      currentParameter = Math.floor(parameter / 2)
      if (currentParameter % 2 == 1) {
	toBinary.push(0)
      } else if (currentParameter % 2 == 0) {
	toBinary.push(1)
      }
      parameter = currentParameter
    }
  }
  retrieveDecimal(decimalValue)
  toBinary.reverse()
  binaryValue = ""
  for (x of toBinary) {
    binaryValue += x
  }
  // display calculated value to output
  displayPrimaryText.innerText = binaryValue
}

equalButton.addEventListener("click", event => {
  calculateToDecimal()
})

equalButtonB.addEventListener("click", event => {
  calculateToBinary()
})

