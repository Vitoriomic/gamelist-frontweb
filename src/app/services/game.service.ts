import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Game {
  id: number;
  title: string;
  year: number;
  imgUrl: string;
  shortDescription: string;
}

interface GameDetail extends Game {
  genre: string;
  platforms: string;
  score: number;
  longDescription: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/games`);
  }

  getGameById(id: number): Observable<GameDetail> {
    return this.http.get<GameDetail>(`${this.baseUrl}/games/${id}`);
  }

  getGamesByList(listId: number): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/lists/${listId}/games`);
  }

  updateGameOrder(listId: number, sourceIndex: number, destinationIndex: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/lists/${listId}/replacement`, { sourceIndex, destinationIndex });
  }
}
