import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-tarjetas',
    templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent{
  
    @Input() items: any[] = [];

    constructor( private router: Router) { }
  
    verArtista( item:any ){
        let artistaId = item.type === 'artist' ? item.id : item.artists[0].id;
        this.router.navigate([ 'artist', artistaId ]);
        
    }
}
