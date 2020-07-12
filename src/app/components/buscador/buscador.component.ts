import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: String;

  constructor(private _activatedroute:ActivatedRoute,
    private heroesservice:HeroesService,
    private router:Router) { }
  
  ngOnInit(): void {
    this._activatedroute.params.subscribe(params => {
      this.heroes = this.heroesservice.buscarHeroe(params['termino']);
      //console.log(this.heroes);
      this.termino = params['temino'];
    });
  }
  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }

}
