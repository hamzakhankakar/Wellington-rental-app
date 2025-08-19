import firebase from "firebase/compat/app";


export const updateCurrentAgent = async (userId,updates) => {
  if (!userId) {
    console.error('No current user found.');
    return { success: false, message: 'No current user found.' };
  }
  try {
    await firebase.firestore().collection('users').doc(userId).update(updates);
    return { success: true, message: 'User updated successfully.' };
  } catch (error) {
    console.error('Error updating user:', error);
    return { success: false, message: 'Error updating user.', error };
  }
}