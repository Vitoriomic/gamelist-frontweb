import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adventurelist',
  standalone: true, 
  imports: [CommonModule, DragDropModule, RouterModule],
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

  selectedGame: any = null; // Armazena o jogo selecionado para o modal

  openGameDetails(gameId: number): void {
    this.gameService.getGameById(gameId).subscribe(data => {
      this.selectedGame = data; // Guarda o jogo selecionado
    });
  }
  
  closeGameDetails(): void {
    this.selectedGame = null; // Fecha o modal
  }
  

  trackByGameId(index: number, game: any): number {
    return game.id;
  }
 
  getStarRating(score: number): string {
    const maxStars = 5;
    const filledStars = Math.round((score / 5) * maxStars);
    return '★'.repeat(filledStars) + '☆'.repeat(maxStars - filledStars);
  }
  
}