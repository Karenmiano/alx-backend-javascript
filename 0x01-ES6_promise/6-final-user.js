import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  return Promise.allSettled([promise1, promise2])
    .then((result) => result.map(({ status, value, reason }) => ({
      status,
      value: status === 'fulfilled' ? value : reason.message,
    })));
}
