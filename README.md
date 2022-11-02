# React Native Project Setup

## Prerequisites

- [Node.js > 12](https://nodejs.org)
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-native-size-matters](https://github.com/nirsky/react-native-size-matters) to manage responsive design.
- [react-usestateref](https://github.com/Aminadav/react-useStateRef) for use useRef and useState together!.

## Usage

### Clone and run the project

You can start by cloning this repository.

After that you should proceed as with any javascript project:

- Go to your project's root folder and run `npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `npm run ios` or `npm run android` to start your application!

(Using yarn: `yarn ios` or `yarn android`)

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: This folder contains all resources for the app like fonts, images, etc...
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `Screen.tsx`
      - `Screen.style.ts`
  - `utils`: Folder to put all utility files like Color, Fonts, etc....
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.
