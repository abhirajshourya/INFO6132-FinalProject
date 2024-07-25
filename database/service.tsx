import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc
} from 'firebase/firestore';
import { firebaseDB } from './config';

const Root = "Movie"

export async function getList() {
    console.log('GetList...');
    var data: any[] = []
    await getDocs(collection(firebaseDB, Root)).then((value) => {
        value.forEach((e) => {
            data.push({ ...e.data() })
        })
    })
    return data
}

export async function getById(id: string | undefined) {
    console.log('Get...');
    if (id != undefined) {
        try {
            const docRef = await doc(firebaseDB, Root, id)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                return true
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return false
}

export async function save(data: {}) {
    console.log('Save...');
    if (data != undefined) {
        try {
            await addDoc(collection(firebaseDB, Root), data);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

export async function saveById(id: string | undefined, data: {}) {
    console.log('Save...');
    if (id != undefined && data != undefined) {
        try {
            await setDoc(doc(firebaseDB, Root, id), data)
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

export async function update(id: string, data: {}) {
    console.log('Update...');
    if (data != undefined) {
        try {
            await updateDoc(doc(firebaseDB, Root, id), data);
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    }
}

export async function removeById(id: string | undefined) {
    console.log('Remove...');
    if (id != undefined) {
        try {
            await deleteDoc(doc(firebaseDB, Root, id));
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    }
}