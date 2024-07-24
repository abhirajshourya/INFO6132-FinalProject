import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { firebaseDB } from './config';

const Root = "Movie"

export async function getAll() {
    console.log('GetAll...');
    const data = [];

    (await getDocs(collection(firebaseDB, Root))).forEach((doc) => {
        data.push({
            ...doc.data(),
            id: doc.id,
        })
    })

    return data;
}

export async function save(data) {
    console.log('Save...');
    if (data != undefined) {
        try {
            await addDoc(collection(firebaseDB, Root), data);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

export async function update(id, data) {
    console.log('Update...');
    if (data != undefined) {
        try {
            await updateDoc(doc(firebaseDB, Root, id), data);
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    }
}

export async function remove(id) {
    console.log('Remove...');
    if (id != undefined) {
        try {
            await deleteDoc(doc(firebaseDB, Root, id));
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    }
}