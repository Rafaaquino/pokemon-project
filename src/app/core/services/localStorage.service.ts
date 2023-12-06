import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  hasItem(key: string): boolean {
    const item = localStorage.getItem(key);
    return item !== null && item !== undefined;
  }
}
