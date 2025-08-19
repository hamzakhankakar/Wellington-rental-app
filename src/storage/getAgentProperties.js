import firebase from "firebase/compat/app";

export const getPropertiesByAgentId = async (userId) => {
  if (!userId) {
    console.error('No agent ID provided.');
    return [];
  }

  try {
    const querySnapshot = await firebase.firestore()
      .collection('properties')
      .where('userId', '==', userId)
      .get();

    const properties = [];
    querySnapshot.forEach((doc) => {
      properties.push({
        ...doc.data(),
        id: doc.id
      });
    });
    return properties;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};



// import firebase from "firebase/compat/app";

// export const getPropertiesAndAgentById = async (userId) => {
//   if (!userId) {
//     console.error('No agent ID provided.');
//     return { properties: [], agent: null };
//   }

//   try {
//     // Fetch properties
//     const propertiesSnapshot = await firebase.firestore()
//       .collection('properties')
//       .where('userId', '==', userId)
//       .get();

//     const properties = [];
//     propertiesSnapshot.forEach((doc) => {
//       properties.push({
//         ...doc.data(),
//         id: doc.id
//       });
//     });

//     // Fetch agent data
//     const agentDoc = await firebase.firestore()
//       .collection('agents')
//       .doc(userId)
//       .get();

//     const agentData = agentDoc.exists ? { ...agentDoc.data(), id: agentDoc.id } : null;

//     return { properties, agent: agentData };

//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return { properties: [], agent: null };
//   }
// };