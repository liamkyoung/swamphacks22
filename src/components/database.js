import firebase from '../../firebase/firebase'

function Database({ date }) {
    const getEvents = async () => {
        firebase.firestore().collection("events").get().then((querySnapshot) => {
            let matches = [];
            querySnapshot.forEach((doc) => {
                if(doc.data().date == date) {
                    matches.push(doc.data());
                }
            });
            console.log(matches);
            return matches;
        });
    }

    return null;
    // <div style={{ margin: '5px 0' }}>
    //         <button onClick={getEvents} style={{ width: '100%' }}>Get events</button>
    // </div>
}

export default Database;