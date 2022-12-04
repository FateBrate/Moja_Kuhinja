import { Injectable } from '@angular/core';
import * as url from "url";

@Injectable({
  providedIn: 'root'
})
export class DetaljiNarudzbeService {

  constructor() { }
  JelaPodaci = [
    {
      id:1,
      naziv:"Tost-sendvic",
      detalji:"Tostirani sendvic pileća šunka,namaz,salata",
      cijena:"4",
      slika:"assets\\img\\tost.jpg"
    },
    {
      id:2,
      naziv:"Pileća salata",
      detalji:"piletina,kupus,sos",
      cijena:"6",
      slika:"assets\\img\\salata.jpg"

    },
    {
      id:3,
      naziv:"Hamburger",
      detalji:"pljeskavica,namaz,salata",
      cijena:"5",
      slika:"assets\\img\\hamburger.jpg"

    },
    {
      id:4,
      naziv:"Cheesburger",
      detalji:"pljeskavica,namaz,salata,sir",
      cijena:"6",
      slika:"assets\\img\\cheesburger.jpg"

    },
    {
      id:5,
      naziv:"Hot dog",
      detalji:"hrenovka,salata,namaz",
      cijena:"4",
      slika:"assets\\img\\hotdog.jpg"

    },
    {
      id:6,
      naziv:"Palačinci",
      detalji:"Palčinak,keks,krem",
      cijena:"6",
      slika:"assets\\img\\palacinci.jpg"

    }
  ]

}
