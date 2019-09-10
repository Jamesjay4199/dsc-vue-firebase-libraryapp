import { init as firebaseInit } from "../../config/firebase.setup";
import 'firebase/firestore';

export const db = firebaseInit().firestore();
