import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((utilsValues) => {
      console.log(`${utilsValues[0].body} ${utilsValues[1].firstName} ${utilsValues[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
