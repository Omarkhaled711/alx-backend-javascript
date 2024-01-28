import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};

  try {
    const userPhoto = await uploadPhoto();
    const user = await createUser();
    result = { userPhoto, user };
  } catch (err) {
    result = { userPhoto: null, user: null };
  }
  return result;
}
