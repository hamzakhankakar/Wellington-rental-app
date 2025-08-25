import firebase from "firebase/compat/app";


export const getPropertyInfo = async (id) => {
  if (!id) return null;
  try {
    const agentInfoDoc = await firebase.firestore()
      .collection('properties')
      .doc(id)
      .get();

    const agentInfo = agentInfoDoc.data();
    if (!agentInfo) return null;
    return {
      ...agentInfo,
      id: agentInfoDoc.id
    }
  } catch (e) {
    console.log(e)
  }

}