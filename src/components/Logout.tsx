import { signOut } from 'aws-amplify/auth';

async function handleSignOut() {
  try {
    await signOut({ global: true });
  } catch (error) {
    console.log('error signing out: ', error);
  }
}