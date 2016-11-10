(function () {
    // Initialize Firebase
    const fireBaseConfig = {
        apiKey: "MYAPIKEY",
        authDomain: "MYAUTHDOMAIN",
        databaseURL: "MYDATABASEURL",
        storageBucket: "MYSTORAGEBUCKET",
        messagingSenderId: "MYMESSAGINGSENDERID"
    };
    firebase.initializeApp(fireBaseConfig);
})();

//Initialize debug styles
const debugStyle = 'background: #039be5; color: #ffffff; padding: 2px; border-radius: 4px;';
/**
 *
 * @type {firebase.auth.Auth|!firebase.auth.Auth|*}
 */
const authRef = firebase.auth();

/**
 * Reference that accesses Firebase Database functions
 * @type {!firebase.database.Reference|firebase.database.Reference}
 */
const dbRef = firebase.database();

/**
 *
 * @type {*|!firebase.storage.Storage|firebase.storage.Storage}
 */
const storageRef = firebase.storage();