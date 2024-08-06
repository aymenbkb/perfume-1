import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private kb: AngularFireDatabase) { }
  getProductImageUrls(): Observable<any[]> {
    return this.kb.list('products').valueChanges();
  }
}

