import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};

  try {
    const user_photo = await uploadPhoto();
    const user = await createUser();
    result = { user_photo, user };
  } catch (err) {
    result = { user_photo: null, user: null };
  }
  return result;
}