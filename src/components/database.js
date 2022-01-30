import firebase from '../../firebase/firebase'

function Database() {
    const readData = async () => {
        firebase.firestore().collection("locations").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        });
    }

    return (
        <div style={{ margin: '5px 0' }}>
            <button onClick={readData} style={{ width: '100%' }}>Send Data To Cloud Firestore</button>
        </div>
    )
}

export default Database;