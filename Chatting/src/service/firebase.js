import { initializeApp } from "firebase/app";
import {
    addDoc,
    collection,
    getFirestore,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
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
const chatroomQuery = query(chatRoomRef, orderBy("updatedAt", "desc"));

export const getAllChatrooms = async (user, callback) => {
    return onSnapshot(chatroomQuery, (querySnapShot) => {
        const chatrooms = querySnapShot.docs
            .filter((el) => el.id.includes(user.username))
            .map((el) => {
                return { id: el.id, ...el.data() };
            });
        callback(chatrooms);
    });
};

export const sendMessage = async (roomId, user, text) => {
    try {
        console.log(user.id, user.username, text, roomId);
        await addDoc(collection(db, "chatrooms", roomId, "messages"), {
            userId: user.id,
            displayName: user.username,
            text: text.trim(),
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error(error);
    }
};

export const getMessages = (roomId, callback) => {
    return onSnapshot(
        query(
            collection(db, "chatrooms", roomId, "messages"),
            orderBy("timestamp", "asc")
        ),
        (querySnapshot) => {
            console.log(querySnapshot.docs);
            const messages = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            callback(messages);
        }
    );
};
