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

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService
        .getPlayers()
        .subscribe( data => {
          this.players = data;
          console.log(this.players);
        });
  }

}
