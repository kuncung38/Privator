import { initializeApp } from "firebase/app";
import {
    collection,
    getDocs,
    getFirestore,
    onSnapshot,
} from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCHK6x4PASiDRKAgewvi5j_xLZ4RiiEl9g",
    authDomain: "chatting-app-a28f0.firebaseapp.com",
    projectId: "chatting-app-a28f0",
    storageBucket: "chatting-app-a28f0.appspot.com",
    messagingSenderId: "97161106046",
    appId: "1:97161106046:web:98a28aacb115996711be2f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const chatRoomRef = collection(db, "chatrooms");

export const getAllChatrooms = async (user, callback) => {
    return onSnapshot(chatRoomRef, (querySnapShot) => {
        const chatrooms = querySnapShot.docs
            .filter((el) => el.id.includes(user.username))
            .map((el) => {
                return { id: el.id, ...el.data() };
            });
        console.log(chatrooms);
        callback(chatrooms);
    });
    // const chatRoomDocs = await getDocs(chatRoomRef);
    // let chatRooms = chatRoomDocs.docs
    //     .filter((el) => el.id.includes(user.username))
    //     .map((el) => {
    //         const data = el.data();
    //         return { id: el.id, ...data };
    //     });
    // return chatRooms;
};
