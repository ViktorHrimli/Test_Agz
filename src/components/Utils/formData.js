const createFormData = data => {
  const { name, email, phone, checked, file } = data;
  const formData = new FormData();

  const id = Number(checked.value);
  formData.append('position_id', id);
  formData.append('name', name.value);
  formData.append('email', email.value);
  formData.append('phone', phone.value);
  formData.append('photo', file.files[0]);

  return formData;
};

export { createFormData };
