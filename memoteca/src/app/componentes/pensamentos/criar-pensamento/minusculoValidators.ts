import { AbstractControl, ValidationErrors } from "@angular/forms";

export function minusculoValidator(control: AbstractControl): ValidationErrors | null {
  const autoria = control.value as string;
  if (autoria && autoria !== autoria.toUpperCase()) {
    return { minusculo: true };
  }
  return null;
}
