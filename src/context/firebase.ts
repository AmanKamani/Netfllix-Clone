import firebase from "firebase/compat/app";
import { createContext, useContext } from "react";

export const FirebaseContext = createContext<firebase.app.App | null>(null);


export const useFirebaseContext = () => {
    const firebase = useContext(FirebaseContext);

    if (!firebase) {
        throw new Error(`Hook can only be used under FirebaseContext Provider`);
    }

    return firebase;
}