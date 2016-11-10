(function () {
    // Initialize Firebase
    const fireBaseConfig = {
        apiKey: "AIzaSyAyuHzZXFi3X4oCLfPA4bx4BCQiR-D_tnU",
        authDomain: "fir-js-boilerplate.firebaseapp.com",
        databaseURL: "https://fir-js-boilerplate.firebaseio.com",
        storageBucket: "fir-js-boilerplate.appspot.com",
        messagingSenderId: "825487702609"
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