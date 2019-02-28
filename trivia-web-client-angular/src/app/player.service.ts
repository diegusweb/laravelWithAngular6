import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Player } from './model/player.model';

const API_URL = 'http://localhost:8000/api';

@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) { }


  getPlayers() {
    return this.http.get<Player[]>(API_URL+ '/players');
  } 

  getPlayerById(id: number){
    return this.http.get<Player>(API_URL+'/'+id);
  }

  addPlayer(name){
    return this.http.post(API_URL+'/players', name);
  }

  updatePlayer(player: Player){
    return this.http.put(API_URL+'/'+player.id, player);
  }

  deletePlayer(id: number){
    return this.http.delete(API_URL+'/players/'+id);
  }
}
