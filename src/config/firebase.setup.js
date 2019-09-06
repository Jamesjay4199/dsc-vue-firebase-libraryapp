import firebase from "firebase";
import { Config } from "./env";

const FIREBASE_CONFIG =  {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.FIREBASE_AUTH_DOMAIN,
  databaseURL: Config.FIREBASE_DATABASE_URL,
  projectId: Config.FIREBASE_PROJECT_ID,
  storageBucket: Config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Config.FIREBASE_MESSAGE_SENDER_ID,
  appId: Config.FIREBASE_APP_ID
};

let isInitialized = false;

export function init() {
  if (!isInitialized) {
    firebase.initializeApp(FIREBASE_CONFIG);
    isInitialized = true;
  }
  return firebase;
}
