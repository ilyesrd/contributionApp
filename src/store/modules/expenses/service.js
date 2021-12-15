import firestore from '@react-native-firebase/firestore';

/**
 * Fetch expenses data
 * @returns {*}
 */
export const getExpenses = () => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection('Users')
      .get()
      .then(querySnapshot => {
        let data = [];
        querySnapshot.forEach(documentSnapshot => {
          data.push(documentSnapshot.id);
        });
        resolve(data);
      });
  });
};
