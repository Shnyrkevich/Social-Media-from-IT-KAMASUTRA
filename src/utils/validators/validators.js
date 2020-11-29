export const maxLengthValidate = (length) => (value) => {
  if (value && value.length > length) {
    return `Must be ${length} characters or less`;
  } 
  return undefined;
} 

export const minLengthValidate = (length) => (value) => {
  if (value && value.length < length) {
    return `Must be ${length} charecters or more`;
  }
  return undefined;
}

export const required = (value) => (value || typeof value === 'number' ? undefined : 'Required');

export const emailValidate = (value) => 
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined;

