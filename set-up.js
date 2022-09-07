import { Firestore } from '@google-cloud/firestore'

const db = new Firestore({
    projectId: "local",
})

const profiles = [
    {
        name: 'Standard_formats_60s_clip',
        suppliers: ['Kontor', 'Believe', 'Default']
    },
    {
        name: 'Standard_formats_30s_clip',
        suppliers: ['UMG', 'Warner', 'Sony']
    }
]

for (const profile of profiles) {
    await db.collection('profiles').doc().set(profile);
}

console.log('profiles created');