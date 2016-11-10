#nether-fire-script
###A simple firebase project for web implemented in pure javascript, that showcases
* Firebase database sync
* Firebase authentication
* Firebase storage

## Quick start
1. Clone this repo: `git clone https://github.com/Netherium/nether-fire-script`
2. Install Bower dependencies: `bower install` (All dependencies will be install under public folder)
3. Set sample firebase database: `firebase database:set /streets streets.json`
4. Copy your config file for web app from [Firebase Console](https://console.firebase.google.com)
5. Replace credentials in `public/js/init.js`
6. Replace storage bucket in `storage.rules.txt`
7. Deploy remotely `firebase deploy`

## Important Notes
* Make sure you keep open the console on your web browser (Use Chrome preferably for proper styling and debugging)
* Take a look at `firebase.json`, serves as a good reference for deployment (notice the excludes and includes for bower dependencies)

## Authors
**Netherium**

## Copyright and license
Code released under [the MIT license](https://github.com/Netherium/nether-fire-script/blob/master/LICENSE)