export const validateRegister = (formData) => {
  const newErrors = {};

  // Full Name
  if (!formData.fullname.trim()) {
    newErrors.fullname = 'Full name is required';
  } else if (formData.fullname.trim().length < 2) {
    newErrors.fullname = 'Full name must be at least 2 characters';
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.email.trim()) {
    newErrors.email = 'Email address is required';
  } else if (!emailRegex.test(formData.email.trim())) {
    newErrors.email = 'Please enter a valid email address';
  }

  // Contact
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,14}$/;

  if (!formData.contact.trim()) {
    newErrors.contact = 'Contact number is required';
  } else if (
    !phoneRegex.test(formData.contact.trim().replace(/\s/g, ''))
  ) {
    newErrors.contact = 'Please enter a valid contact number';
  }

  // Password
  if (!formData.password) {
    newErrors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters long';
  }



  // Terms
  if (!formData.agreeTerms) {
    newErrors.agreeTerms =
      'You must agree to the Terms & Conditions';
  }

  return newErrors;
};