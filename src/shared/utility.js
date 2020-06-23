export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  return isValid;
};

export const createInput = (elementType, type, placeholder, validation) => {
  return {
    elementType,
    elementConfig: {
      type,
      placeholder,
    },
    value: '',
    validation: {
      required: true,
      ...validation,
    },
    valid: false,
    touched: false,
  };
};
