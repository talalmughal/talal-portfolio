import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6xFIrcBGupaTYyW7oil40V_3ENUgqKmM",
  authDomain: "portfolio-609fc.firebaseapp.com",
  projectId: "portfolio-609fc",
  storageBucket: "portfolio-609fc.appspot.com",
  messagingSenderId: "552194381601",
  appId: "1:552194381601:web:0ab0d3d13a0d190888d060",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

interface Props {
  name: string;
  email: string;
  company: string;
  budget: string;
  startDate: string;
  endDate: string;
  message: string;
  find: string;
}

export async function createMail({
  name,
  email,
  company,
  budget,
  startDate,
  endDate,
  message,
  find,
}: Props) {
  try {
    const mail = {
      name,
      email,
      company,
      budget,
      startDate,
      endDate,
      message,
      find,
    };
    await setDoc(doc(db, "emails", new Date().toString()), mail);
    return true;
  } catch (error) {
    console.log("Something went wrong in firebase/createMail funtion: ", error);
  }
}
