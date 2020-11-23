# loadSmartCodeTest

Simple App with Login with Github feature (using react-native-app-auth) and Github Profile Page (currently working only in iOS)

Steps to reproduce:
- Clone the repository.
- Run 'yarn install' (or npm install) in the folder.
- Then 'cd ios && pod install && cd ..'
- In order to react-native-app-auth to work properly in iOS, you have to go to the file '/ios/Pods/AppAuth/Source/AppAuthCore/OIDTokenRequest.m' and add the lines according to this PR:
- https://github.com/openid/AppAuth-iOS/pull/206/commits/142b6bc1b8e15e04cdb37fec1d420a8401641b1a
- Then run npx react-native run-ios
