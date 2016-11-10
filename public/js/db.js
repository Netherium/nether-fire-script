(function () {
    /**
     * Reference that accesses Firebase Database functions
     * @type {!firebase.database.Reference|firebase.database.Reference}
     */
    var dbStreetsRef = dbRef.ref('streets');

    // Get Dom Elements
    const streetsPre = document.getElementById('streets-pre');
    const streetsList = document.getElementById('streets-list');

    const streetsOnValue = function (snap) {
        console.log('%c' + 'On \'value\'' + ' event fired. ID: ' + snap.key, debugStyle);
        streetsPre.innerText = JSON.stringify(snap.val(), null, 3);
    };
    const streetsOnChildAdded = function (snap) {
        console.log('%c' + 'On \'child_added\'' + ' event fired. ID: ' + snap.key, debugStyle);
        const street = snap.val();
        if (document.getElementById(snap.key) === null) {
            const li = document.createElement('li');
            li.id = snap.key;
            li.innerHTML = "<span><strong>" + street.city + "</strong><br><small>" + street.address + "</small><br><small>" + street.zip + "</small><br><small>" + street.coords + "</small></span>";
            streetsList.appendChild(li);
        }
    };
    const streetsOnChildChanged = function (snap) {
        console.log('%c' + 'On \'child_changed\'' + ' event fired. ID: ' + snap.key, debugStyle);
        const street = snap.val();
        const li = document.getElementById(snap.key);
        li.innerHTML = "<span><strong>" + street.city + "</strong><br><small>" + street.address + "</small><br><small>" + street.zip + "</small><br><small>" + street.coords + "</small></span>";
    };
    const streetsOnChildRemoved = function (snap) {
        console.log('%c' + 'On \'child_removed\'' + ' event fired ID: ' + snap.key, debugStyle);
        const liToRemove = document.getElementById(snap.key);
        liToRemove.remove();
    };

    const attachDBHandlers = function () {
        console.log('%c' + 'Attaching DB Handlers', debugStyle);
        /**
         * Database handlers
         * On 'value' handler
         * @type firebase.database.Reference
         * @param firebase.database.DataSnapshot
         */
        dbStreetsRef.on('value', streetsOnValue);

        /**
         * Database handlers
         * On 'child_added' handler
         * @type firebase.database.Reference
         * @param firebase.database.DataSnapshot
         */
        dbStreetsRef.on('child_added', streetsOnChildAdded);

        /**
         * Database handlers
         * On 'child_changed' handler
         * @type firebase.database.Reference
         * @param firebase.database.DataSnapshot
         */
        dbStreetsRef.on('child_changed', streetsOnChildChanged);

        /**
         * Database handlers
         * On 'child_removed' handler
         * @type firebase.database.Reference
         * @param firebase.database.DataSnapshot
         */
        dbStreetsRef.on('child_removed', streetsOnChildRemoved);
    };
    const detachDBHandlers = function () {
        console.log('%c' + 'Detaching DB Handlers', debugStyle);
        /**
         * Database handlers
         * On 'value' handler
         * @type firebase.database.Reference
         * @param firebase.database.DataSnapshot
         */
        dbStreetsRef.off('value', streetsOnValue);

        /**
         * Database handlers
         * On 'child_added' handler
         * @type firebase.database.Reference
         * @param firebase.database.DataSnapshot
         */
        dbStreetsRef.off('child_added', streetsOnChildAdded);

        /**
         * Database handlers
         * On 'child_changed' handler
         * @type firebase.database.Reference
         * @param firebase.database.DataSnapshot
         */
        dbStreetsRef.on('child_changed', streetsOnChildChanged);

        /**
         * Database handlers
         * On 'child_removed' handler
         * @type firebase.database.Reference
         * @param firebase.database.DataSnapshot
         */
        dbStreetsRef.on('child_removed', streetsOnChildRemoved);
    };

    authRef.onAuthStateChanged(function (a) {
        if (a) {
            attachDBHandlers();
        } else {
            detachDBHandlers();
        }
    });
})();