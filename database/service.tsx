import { SearchContentType } from '@/constants/Types'
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    onSnapshot,
    setDoc,
    updateDoc,
} from 'firebase/firestore'
import { auth, firebaseDB } from './config'

export function getFavList() {
    console.log('GetList...')
    const docsRef = collection(
        firebaseDB,
        `users/${auth.currentUser?.uid}/favorites`
    )
    const docsSnap = onSnapshot(docsRef, {
        next: (snapshot) => {
            const data: SearchContentType[] = []
            snapshot.docs.forEach((doc) => {
                console.log(doc.data())
                data.push({
                    Poster: doc.data().Poster,
                    Title: doc.data().Title,
                    Type: doc.data().Type,
                    Year: doc.data().Year,
                    imdbID: doc.data().imdbID,
                })
            })
            console.log(data)
            return data
        },
    })
}

export async function getById(id: string | undefined) {
    console.log('Get...')
    if (id != undefined) {
        try {
            const docRef = await doc(
                firebaseDB,
                `users/${auth.currentUser?.uid}/favorites`,
                id
            )
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                return true
            }
        } catch (e) {
            console.error('Error adding document: ', e)
        }
    }

    return false
}

export async function save(data: {}) {
    console.log('Save...')
    if (data != undefined) {
        try {
            await addDoc(
                collection(
                    firebaseDB,
                    `users/${auth.currentUser?.uid}/favorites`
                ),
                data
            )
        } catch (e) {
            console.error('Error adding document: ', e)
        }
    }
}

export async function saveById(id: string | undefined, data: {}) {
    console.log('Save...')
    if (id != undefined && data != undefined) {
        try {
            await setDoc(
                doc(firebaseDB, `users/${auth.currentUser?.uid}/favorites`, id),
                data
            )
        } catch (e) {
            console.error('Error adding document: ', e)
        }
    }
}

export async function update(id: string, data: {}) {
    console.log('Update...')
    if (data != undefined) {
        try {
            await updateDoc(
                doc(firebaseDB, `users/${auth.currentUser?.uid}/favorites`, id),
                data
            )
        } catch (e) {
            console.error('Error deleting document: ', e)
        }
    }
}

export async function removeById(id: string | undefined) {
    console.log('Remove...')
    if (id != undefined) {
        try {
            await deleteDoc(
                doc(firebaseDB, `users/${auth.currentUser?.uid}/favorites`, id)
            )
        } catch (e) {
            console.error('Error deleting document: ', e)
        }
    }
}
