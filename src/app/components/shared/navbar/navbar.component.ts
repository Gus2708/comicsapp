import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from "@angular/router";
import { filter, pairwise } from 'rxjs/operators';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  previousUrl: any;
  constructor(private router: Router) {
    router.events
    .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
    .subscribe((events: RoutesRecognized[]) => {
    console.log('previous url', events[0].urlAfterRedirects);
    console.log('current url', events[1].urlAfterRedirects);
    this.previousUrl = events[0].urlAfterRedirects
});
  };

  ngOnInit(): void {
  };

 buscarHeroe(termino: any){
   event.preventDefault();
    this.router.navigate(['/buscar', termino]);
    if ( termino == 0 ){
      this.router.navigate(['/heroes']);
    };
 };

}
