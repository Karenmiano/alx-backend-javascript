import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const result = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo: { ...result[0] },
      user: { ...result[1] },
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
