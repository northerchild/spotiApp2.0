import { Component } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service"
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas:any[] = [];
  loading:boolean;

  constructor(private spotify:SpotifyService) {}
  buscar(termino:string){
      console.log(termino);
      this.loading  = true;
  		this.spotify.getArtistas(termino)
  			.subscribe((resp:any)=>{
  				console.log(resp)
  				this.artistas = resp;
          this.loading  = false;
  			})
  }

}
