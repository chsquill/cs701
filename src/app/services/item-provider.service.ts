import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-data';


@Injectable({
  providedIn: 'root'
})
export class ItemProviderService {

  constructor() { }

  getItems(): Item[] {
  	return ITEMS;
  }

  // // adds a friend
  // addFriend(friend: Contact) {
  // 	let friends:Contact[] = this.getFriends();
  // 	let maxId: number;
  //
  // 	if (friends && friends.length > 0) {
  // 		maxId = friends[friends.length - 1].id;
  // 	} else {
  // 		maxId = 0;
  // 	}
  //
  // 	friend.id = maxId + 1;
  // 	friends.push(friend);
  // }
  
}
