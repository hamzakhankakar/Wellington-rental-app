import firebase from "firebase/compat/app";


export const getMYAgentInfo = async (agentid) => {
  const agentInfoDoc = await firebase.firestore()
    .collection('agents')
    .doc(agentid)
    .get();

  const agentInfo = agentInfoDoc.data();
  if (!agentid) return null;
  return {
    ...agentInfo,
    id: agentInfoDoc.id
  }


}