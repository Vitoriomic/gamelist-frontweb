import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-platformlist',
  standalone: true, 
  imports: [CommonModule, DragDropModule],
  templateUrl: './platformlist.component.html',
  styleUrl: './platformlist.component.css'
})

export class PlatformlistComponent implements OnInit {
  games: any[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGamesByList(2).subscribe(data => {
      this.games = data;
    });
  }

  onDragDrop(event: CdkDragDrop<any[]>): void {
    console.log('Evento recebido:', event);

    if (event.previousIndex !== event.currentIndex) {
      moveItemInArray(this.games, event.previousIndex, event.currentIndex);
      this.gameService.updateGameOrder(2, event.previousIndex, event.currentIndex).subscribe();
    }
  }

  openGameDetails(gameId: number): void {
    console.log('Abrindo detalhes do jogo com ID:', gameId);
    // Aqui você pode chamar um modal para exibir os detalhes do jogo
  }

  trackByGameId(index: number, game: any): number {
    return game.id;
  }
  
}
