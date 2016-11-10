(function () {
    // Get Dom Elements
    const loginContainerTitle = document.getElementById('login-container-title');
    const dataContainer = document.getElementById('data-container');
    const emailElem = document.getElementById('email');
    const passwordElem = document.getElementById('password');
    const inputProfile = document.getElementById('input-profile');
    const btnLogin = document.getElementById('button-login');
    const btnSignUp = document.getElementById('button-signup');
    const btnLogout = document.getElementById('button-logout');
    const avatarElem = document.getElementById('avatar');
    const profImageContainer = document.getElementById('profile-image-container');
    const linkSignUp = document.getElementById('link-signup');
    const linkLogin = document.getElementById('link-login');
    var profileImage = null;

    // Handler for Log In event
    btnLogin.addEventListener('click', function () {
        const email = emailElem.value;
        const password = passwordElem.value;

        /**
         * Sign in with the given credentials
         * @type {firebase.Promise<any>|!firebase.Promise.<!firebase.User>}
         */
        authRef.signInWithEmailAndPassword(email, password).then(function (e) {
            console.log('%c' + 'signInWithEmailAndPassword' + ' event fired.', debugStyle);
            console.log(e);
        }, function (e) {
            console.log('%c' + 'signInWithEmailAndPassword' + ' event fired.', debugStyle);
            console.log(e);
        });
    });

    // Handler for Sign Up event
    btnSignUp.addEventListener('click', function () {
        const email = emailElem.value;
        const password = passwordElem.value;

        /**
         * Sign up with the given credentials
         * @type {firebase.Promise<any>|!firebase.Promise.<!firebase.User>}
         */
        authRef.createUserWithEmailAndPassword(email, password).then(function (e) {
            authRef.currentUser.sendEmailVerification();
        }, function (e) {
            console.log('%c' + 'createUserWithEmailAndPassword' + ' event fired.', debugStyle);
            console.log(e);
        });
    });

    // Handler for Log Out event
    btnLogout.addEventListener('click', function (e) {
        /**
         * Sign up with the given credentials
         * @type {firebase.Promise<any>|!firebase.Promise.<!firebase.User>}
         */
        authRef.signOut().then(function (e) {
            console.log(e);
        }, function (e) {
            console.log(e);
        });
    });

    // Handler for Sign up Link
    linkSignUp.addEventListener('click', function (e) {
        e.preventDefault();
        setUIStateSignUp();
    });

    // Handler for Log in Link
    linkLogin.addEventListener('click', function (e) {
        e.preventDefault();
        setUIStateLoggedOut();
    });

    // Handler for Image Upload
    inputProfile.addEventListener('change', function (e) {
        var file = e.target.files[0];
        profileImage = {
            "name": file.name,
            "blob": new Blob([file],
                {type: file.type})
        };
        storageRef.ref().child(authRef.currentUser.uid).child('profile.png').put(profileImage.blob).then(function (snapshot) {
            console.log('Uploaded', snapshot.totalBytes, 'bytes.');
            console.log(snapshot.metadata);
            avatarElem.src = snapshot.metadata.downloadURLs[0];
        });
    });

    // Handler for Authorization State Change
    authRef.onAuthStateChanged(function (a, b, c) {
        console.log('%c' + 'onAuthStateChanged' + ' event fired', debugStyle);
        if (a) {
            console.log('Logged in');
            setUIStateLoggedIn(a.email);
            if (profileImage !== null)
                console.log();
            storageRef.ref().child(authRef.currentUser.uid).child('profile.png').getDownloadURL().then(function (url) {
                avatarElem.src = url;
            }).catch(function (error) {
                console.log(error.code);
            });
        }
        else {
            setUIStateLoggedOut();
            console.log('Not logged in');
        }
    });

    // States that change UI
    const setUIStateLoggedOut = function () {
        loginContainerTitle.innerHTML = 'Log in';
        btnLogin.classList.remove('hidden');
        btnSignUp.classList.add('hidden');
        btnLogout.classList.add('hidden');
        avatarElem.classList.add('hidden');
        profImageContainer.classList.add('hidden');
        linkSignUp.classList.remove('hidden');
        linkLogin.classList.add('hidden');
        dataContainer.classList.add('hidden');
    };

    const setUIStateLoggedIn = function (email) {
        loginContainerTitle.innerHTML = 'Logged in as ' + email;
        btnLogin.classList.add('hidden');
        btnSignUp.classList.add('hidden');
        btnLogout.classList.remove('hidden');
        avatarElem.classList.remove('hidden');
        profImageContainer.classList.remove('hidden');
        linkSignUp.classList.add('hidden');
        linkLogin.classList.add('hidden');
        dataContainer.classList.remove('hidden');
    };

    const setUIStateSignUp = function () {
        loginContainerTitle.innerHTML = 'Sign up';
        btnLogin.classList.add('hidden');
        btnSignUp.classList.remove('hidden');
        btnLogout.classList.add('hidden');
        avatarElem.classList.add('hidden');
        profImageContainer.classList.add('hidden');
        linkSignUp.classList.add('hidden');
        linkLogin.classList.remove('hidden');
        dataContainer.classList.add('hidden');
    };
})();
