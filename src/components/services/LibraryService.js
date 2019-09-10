import { init as firebaseInit } from "../../config/firebase.setup";
import 'firebase/firestore';

const db = firebaseInit().firestore();
const Library = db.collection('libraries');

export class LibraryService {
  static createLibrary(data) {
    return new Promise((resolve, reject) => {
      Library.add(data)
        .then(res => {resolve(res)})
        .catch(err => {reject(err)})
      ;
    });
  }

  static getAllLibraries() {
    return db.collection('libraries');
  }

}
