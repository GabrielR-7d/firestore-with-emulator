import { Firestore } from '@google-cloud/firestore'

const db = new Firestore({
    projectId: "local",
})

const profiles = await db.collection('profiles').get();

profiles.forEach( p => console.log(p.id, p.data()));

const defaultProfile = await db.collection('profiles').where('suppliers', 'array-contains', 'Default').limit(1).get();

defaultProfile.forEach( p => console.log(p.id, p.data()));