import {Component, OnInit} from '@angular/core';
import{DetaljiNarudzbeService} from "../../servisi/detalji-narudzbe.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service:DetaljiNarudzbeService) {}
hranaPodaci:any;

    ngOnInit():void {
      this.hranaPodaci=this.service.JelaPodaci;
    }



}
