
import firebase from "firebase/compat/app";

export const createNewProperty = async (userId,data) => {
  if (!userId) {
    console.error('No current user found.');
    return { success: false, message: 'No current user found.' };
  }
  try {
    await firebase.firestore().collection('properties').add({
      userId: userId,
      ...data, // assuming 'write' contains the data you want to add
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { success: true, message: 'New property created successfully.' };
  } catch (error) {
    console.error('Error creating new property:', error);
    return { success: false, message: 'Error creating new property.', error };
  }
}