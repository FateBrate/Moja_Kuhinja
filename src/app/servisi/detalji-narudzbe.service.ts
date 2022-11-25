import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetaljiNarudzbeService {

  constructor() { }
  JelaPodaci = [
    {
      id:1,
      naziv:"Tost-sendvic",
      detalji:"Tostirani sendvic pileća šunka,namaz,salta",
      cijena:4,
      slika:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      naziv:"Pileća salata",
      detalji:"piletina,kupus,sos",
      cijena:6,
      slika:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      naziv:"Hamburger",
      detalji:"pljeskavica,namaz,salata",
      cijena:5,
      slika:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      naziv:"Cheesburger",
      detalji:"pljeskavica,namaz,salata,sir",
      cijena:6,
      slika:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      naziv:"Hot dog",
      detalji:"hrenovka,salata,namaz",
      cijena:4,
      slika:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      naziv:"Palačinci",
      detalji:"Palčinak,keks,krem",
      cijena:6,
      slika:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]

}
