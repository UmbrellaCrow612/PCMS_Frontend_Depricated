import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ninoValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const nino = control.value?.trim();

    // Check format
    const ninoRegex = /^[A-CEGHJ-NPR-TW-Z]{2}\d{6}[A-D]$/;
    if (!ninoRegex.test(nino)) {
      return { invalidNINO: true };
    }

    // Check prefix
    const prefix = nino.substr(0, 2);
    const invalidPrefixes = ['BG', 'GB', 'KN', 'NK', 'NT', 'TN', 'ZZ'];
    const invalidFirstOrSecondLetters = ['D', 'F', 'I', 'O', 'Q', 'U', 'V'];
    if (
      invalidPrefixes.includes(prefix) ||
      invalidFirstOrSecondLetters.includes(prefix.charAt(0)) ||
      invalidFirstOrSecondLetters.includes(prefix.charAt(1))
    ) {
      return { invalidNINO: true };
    }

    // Check suffix
    const suffix = nino.charAt(nino.length - 1);
    if (!['A', 'B', 'C', 'D'].includes(suffix)) {
      return { invalidNINO: true };
    }

    return null;
  };
}

export function noLettersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const hasLetters = /[a-zA-Z]/.test(control.value);
    return hasLetters ? { hasLetters: { value: control.value } } : null;
  };
}
