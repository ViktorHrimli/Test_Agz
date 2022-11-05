import imgUser from 'Images/1556866724_3.jpg';
import { nanoid } from '@reduxjs/toolkit';
import pos from 'position_id.json';

const newUserCreate = data => {
  const { name, email, phone, checked } = data;
  const id = Number(checked.value);

  if (typeof id !== 'number') {
    console.log('not number');
    return;
  }

  const positionId = pos.find(item => {
    if (item.id !== id) return null;
    return item.name;
  });

  const item = {
    id: nanoid(),
    name: name.value,
    email: email.value,
    phone: phone.value,
    position: positionId.name,
    photo: imgUser,
  };
  return item;
};

export { newUserCreate };
