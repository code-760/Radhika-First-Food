export const validateLogin = (formData) => {
  const newErrors = {};

  if (!formData.email.trim()) {
    newErrors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
    newErrors.email = 'Please enter a valid email address';
  }

  if (!formData.password) {
    newErrors.password = 'Password is required';
  }

  return newErrors;
};