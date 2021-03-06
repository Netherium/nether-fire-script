# nether-fire-script
### A simple firebase project for web implemented in pure javascript, that showcases
* Firebase database sync
* Firebase authentication
* Firebase storage

## Quick start
1. Clone this repo: `git clone https://github.com/Netherium/nether-fire-script`
2. Install Bower dependencies: `bower install` (All dependencies will be installed under public folder)
3. Copy your config file for web app from [Firebase Console](https://console.firebase.google.com)
4. Replace **credentials** in `public/js/init.js` and **storage bucket** in `storage.rules.txt`
5. Initialize firebase with `firebase use -add` to connect this project with your desired firebase project
6. Set sample firebase database: `firebase database:set /streets streets.json`
7. Deploy remotely `firebase deploy`
8. Publish rules for database and storage i.e. https://console.firebase.google.com/project/MYPROJECTHERE/database/rules
9. Enable 'Email/Password' provider under 'Authentication/SIGN-IN-METHOD' in [Firebase Console](https://console.firebase.google.com)

## Important Notes
* Make sure you keep open the console on your web browser (Use Chrome preferably for proper styling and debugging)
* Take a look at `firebase.json`, serves as a good reference for deployment (notice the excludes and includes for bower dependencies)

## Authors
**Netherium**

## Copyright and license
Code released under [the MIT license](https://github.com/Netherium/nether-fire-script/blob/master/LICENSE)
