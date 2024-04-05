// import { Injectable } from '@angular/core';
// import { AngularFireAuth, } from '@angular/fire/compat/auth';
// import { GoogleAuthProvider, getAuth, signInWithPopup, } from "firebase/auth";




// @Injectable({
//   providedIn: 'root'
// })
// export class AuthServiceService {
//   signInWithPhoneNumber(contact: string) {
//     throw new Error('Method not implemented.');
//   }
//   GoogleAuth() {
//     throw new Error('Method not implemented.');
//   }


//   constructor(public ngFireAuth: AngularFireAuth) {

//   }

//   async registerUser(email: string, password: string, name: string) {
//     return await this.ngFireAuth.createUserWithEmailAndPassword(email, password)

//   }

//   async loginUser(email: string, password: string) {
//     return await this.ngFireAuth.signInWithEmailAndPassword(email, password);

//   }

//   async resetPassword(email: string) {
//     return await this.ngFireAuth.sendPasswordResetEmail(email);

//   }
//   async getProfile() {
//     return await this.ngFireAuth.currentUser
//   }

//   async signOut() {
//     return await this.ngFireAuth.signOut();
//   }

// }
