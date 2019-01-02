import * as React from 'react';
import { specifyFormType } from '../Text';

export const FormFieldNumber = specifyFormType<number>('number', {
  fromString: s => Number(s),
  toString: v => v.toString()
});

export default FormFieldNumber;
