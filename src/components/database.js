import firebase from '../../firebase/firebase'
import React from 'react'

function Database ({ date, callback }) {
    const getEvents = async () => {
        if (date) {
            firebase.firestore().collection("events").get().then((querySnapshot) => {
                let matches = [];
                querySnapshot.forEach((doc) => {
                    if (doc.data().date == date) {
                        matches.push(doc.data());
                    }
                });
                // console.log(matches);
                callback(matches)
            })
            .catch((e) => console.log("Database Date Pull Failed", e));
        }
    }

    getEvents()

    return null;
}

export default Database;