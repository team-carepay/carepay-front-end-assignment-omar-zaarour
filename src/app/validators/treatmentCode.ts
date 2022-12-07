import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// validator used to ensure that there are atleast 3 repeated characters in the form control
export function treatmentCodeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let value = control.value;
    if (!value) return null;
    // create a map to save number of characters
    let countCharactersMap = new Map();
    // loop the string and initialize the map with 0
    for (let currentCharacter of value) {
      countCharactersMap.set(currentCharacter, 0);
    }
    // loop the string and add 1 to the count
    for (let currentCharacter of value) {
      let oldCount = countCharactersMap.get(currentCharacter);
      // if the count is greater than 2 => break and return null
      if (oldCount + 1 > 2) {
        return null;
      }
      countCharactersMap.set(currentCharacter, oldCount + 1);
    }
    return {
      codeNotValid: true,
    };
  };
}
