import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetaljiNarudzbeService } from '../../servisi/detalji-narudzbe.service';
@Component({
  selector: 'app-narudzba',
  templateUrl: './narudzba.component.html',
  styleUrls: ['./narudzba.component.css'],
})
export class NarudzbaComponent implements OnInit {
  constructor(
    private param: ActivatedRoute,
    private service: DetaljiNarudzbeService
  ) {}
  getId: any;
  menupodaci: any;
  kolicina: number = 1;
  cijenaUkupno: number = 0;
  public povecaj() {
    this.kolicina++;
    this.izracunajCijenu();
  }
  public smanji() {
    if (this.kolicina >= 1) this.kolicina--;
    this.izracunajCijenu();
  }
  public izracunajCijenu() {
    this.cijenaUkupno = this.kolicina * this.menupodaci[0].cijena;
    return this.cijenaUkupno;
  }
  ngOnInit(): void {
    this.getId = this.param.snapshot.paramMap.get('id');
    console.log(this.getId, 'getmenu');
    if (this.getId) {
      this.menupodaci = this.service.JelaPodaci.filter((value) => {
        return value.id == this.getId;
      });
    }
  }
}
