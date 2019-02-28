import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../model/player.model';

@Component({
  selector: 'app-trivia-game',
  templateUrl: './trivia-game.component.html',
  styleUrls: ['./trivia-game.component.css']
})
export class TriviaGameComponent implements OnInit {

  players: Player[];
  errorMessage: string;
  isLoading: boolean = true;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService
        .getPlayers()
        .subscribe(
          players => {
            this.players = players
            this.isLoading = false
          },
          error => {
            this.errorMessage = <any>error
            this.isLoading = false
          }
        );
  }

  findPlayer(id): Player {
    return this.players.find(player => player.id === id);
  }

  appendPlayer(player: Player){
    this.players.push(player);
  }

  deletePlayer(id) {
    let player = this.findPlayer(id);
    this.playerService
    .deletePlayer(id)
    .subscribe(
      response => {
        let index = this.players.findIndex(player => player.id === id)
        this.players.splice(index, 1);
      }
    )
  }

}
