import { init as firebaseInit} from "../../config/firebase.setup";

const firebase = firebaseInit();

let initializationComplete = false;
// eslint-disable-next-line no-unused-vars
firebase.auth().onAuthStateChanged(function(user) {
  initializationComplete = true;
});

export class UserService {
  static register({email, password, name}) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        return response.user.updateProfile({
          displayName: name
        });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      })
    ;
  }

  static updateUserName({name, profileImage}) {
    return this.getLoggedInUser().updateProfile({
      displayName: name,
      photoURL: profileImage
    });
  }

  static login({email, password}) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  static getLoggedInUser() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      let initializationInterval = setInterval(() => {
        if (initializationComplete) {
          clearInterval(initializationInterval);
          resolve(firebase.auth().currentUser)
        }
      },10);
    });
  }

  static getUserDetails() {
    return this.getLoggedInUser().then(
      (response) => {
        if (response) {
          const {displayName, phoneNumber, photoURL, email, uid} = response;
          return {
            displayName,
            email,
            phoneNumber,
            photoURL,
            uid
          }
        }
        return {};
      }
      // eslint-disable-next-line no-console
    ).catch(error=> {console.error(error)});
  }

  static logOut() {
    return firebase.auth().signOut().then(response => {
      return response;
    });
  }
}
