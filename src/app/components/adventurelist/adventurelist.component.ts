import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-adventurelist',
  standalone: true, // Define como um componente standalone
  imports: [CommonModule, DragDropModule], // Importa módulos diretamente
  templateUrl: './adventurelist.component.html',
  styleUrl: './adventurelist.component.css'
})
export class AdventurelistComponent implements OnInit {
  games: any[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGamesByList(1).subscribe(data => {
      this.games = data;
    });
  }

  onDragDrop(event: CdkDragDrop<any[]>): void {
    console.log('Evento recebido:', event);

    if (event.previousIndex !== event.currentIndex) {
      moveItemInArray(this.games, event.previousIndex, event.currentIndex);
      this.gameService.updateGameOrder(1, event.previousIndex, event.currentIndex).subscribe();
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
