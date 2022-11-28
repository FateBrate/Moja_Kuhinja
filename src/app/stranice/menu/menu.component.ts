import { Component,OnInit } from '@angular/core';
import {DetaljiNarudzbeService} from "../../servisi/detalji-narudzbe.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements  OnInit{
  constructor(private service:DetaljiNarudzbeService) {}
  hranaPodaci:any;

ngOnInit():void{
this.hranaPodaci=this.service.JelaPodaci;
}
}
