import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { getDatabase, onValue, ref } from "firebase/database";
import { object } from '@angular/fire/database';
import { Location } from '@angular/common';
register();


@Component({
  selector: 'app-chaque-produi',
  templateUrl: './chaque-produi.page.html',
  styleUrls: ['./chaque-produi.page.scss'],
})
export class ChaqueProduiPage implements OnInit {

 

id!: string | null;
note: any;
products:any = [];
notes:any = [];
productNote :any=[];
tete:any = [];




  constructor(private router : Router ,private route : ActivatedRoute, private location: Location) { }
  
  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.route.paramMap.subscribe(r => {
      this.id = r.get('id')
    })
    const database = getDatabase();
  const starCountRef = ref(database, 'products',);

  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    this.products = Object.values(data).map((p:any) => ({
      ...p,
      tete : p.tete?Object.values(p.tete):[],
      fond : p.fond?Object.values(p.fond):[],
      coeur :p.coeur?Object.values(p.coeur):[],

    }) 
    )
    console.log(this.notes);
  
  });

 
  }
  ClickCard(id:string){
    this.router.navigate(['/tabs/tab1/chaque-produi',id])
  }
//   products: any[] =[
//     {"id": 1,
//     "name" : "Bleu De Chanel",
//     "image": "/assets/pr/3.png",
//     "imageback":"/assets/background/Chanel sign on store in Paris, France (1) (1).jpg",

//     "notes": [
//       {
//     "one":"Pamplemousse",
//     "t1":"17%",
      
//     },
//     {
         
//       "one":"gingembre",
//       "t1":"12%",
        
//       },
//       {
         
//         "one":"Citron",
//         "t1":"11%",
          
//         },
//         {
         
//           "one":"menthe",
//           "t1":"7%",
            
//           },
//           {
         
            
//     "one":"menthe",
//     "t1":"7%",
              
//             },
//             {
              
//     "one":"poivre rose",
//     "t1":"6%",
//             },

          
           

// ],
// "mnotes":[  {
//   "mone":"Noix de muscade",
//   "m1":"5%",

// },
// {
//   "mone":"jasmin",
//   "m1":"3%",

// },],

// "bnotes": [
//             {    
//               "bone":"encens",
//               "b1":"13%",
//             },
//             {
//               "bone":"vétiver",
//               "b1":"6%",
//             },
//             {
//               "bone":"cèdre",
//               "b1":"6%",
//             },
//             {
//               "bone":"bois de santal",
//               "b1":"5%",
//             },
//             {
//               "bone":"patchouli",
//               "b1":"3%",
//             },
//             {
//               "bone":"labdanum",
//               "b1":"3%",
//             },
// ],

   
    
//     "Familleolfactive":"Boisé aromatique"
//   },
//   {"id": 2,
//   "name" : "Chanel n°05",
//   "image": "/assets/pr/6.png",
//   "imageback":"/assets/background/Chanel sign on store in Paris, France (1) (1).jpg",

//   "notes": [
//     {
//       "one":"aldéhydes",
//       "t1":"14%",
//     },
//     {
//       "one":"néroli",
//       "t1":"4%",
//     },
//     {
//       "one":"bergamote",
//       "t1":"4%",
//     },
//     {
      
//     "one":"citron",
//     "t1":"3%",
//     },
//   ],
//   "mnotes":[
//     {
//       "mone":"Ylang Ylang",
//       "m1":"10%",
//     },
//     {
//       "mone":"iris",
//       "m1":"8%",
//     },
//     {
//       "mone":"jasmin",
//       "m1":"7%",
//     },
//     {
//       "mone":"rose",
//       "m1":"6%",
//     },
//     {
      
//     "mone":"racine d'iris",
//     "m1":"5%",
//     },
//     {
//     "mone":"Muguet",
//     "m1":"3%",
//     },
//   ],
//   "bnotes":[{
//     "bone":"civette",
//     "b1":"7%",
//   },
//   { "bone":"bois de santal",
//   "b1":"5%",
// },
// {
//   "bone":"musc",
//   "b1":"5%",
// },
// {
//   "bone":"ambre",
//     "b1":"5%",
// },
// {
     
//   "bone":"mousse de chêne",
//   "b1":"4%",
// },
// {
//   "bone":"vétiver",
//   "b1":"4%",
  
// },
// ],
    

//   "Familleolfactive":"Aldéhyde floral"
//   },
//   {"id": 3,
//   "name" : "Chanel Egoïste",
//   "image": "/assets/pr/5.png",
//   "imageback":"/assets/background/Chanel sign on store in Paris, France (1) (1).jpg",

//   "notes":[
//   {
//     "one":"palissandre du Brésil",
//     "t1":"8%",
//   },
//   { 
//     "one":"coriandre",
//     "t1":"5%",
//   },
//   {
//     "one":"mandarine",
//     "t1":"5%",
//   },
//   ],
  
//    "mnotes":[
//     {
//     "mone":"cannelle",
//     "m1":"15%",
//     },
//     {
//       "mone":"rose",
//       "m1":"11%",
//     },
//     {
//       "mone":"œillet",
//       "m1":"7%",
//     },

//    ],

//    "bnotes":[{
//     "bone":"bois de santal",
//     "b1":"14%",
//    },
//    {
//     "bone":"tabac",
//     "b1":"10%",
//    },
//    {
//     "bone":"vanille",
//     "b1":"8%",
//    },
//    {
//     "bone":"cuir",
//     "b1":"6%",
//    },
//    {
//     "bone":"ambre",
//     "b1":"5%",
//    },
//    {
//     "bone":"acajou",
//     "b1":"5%",
//    },
//   ],

//   "Familleolfactive":"Boisé épicé"
//   },
//   {"id": 4,
//   "name" : "Chanel Chance",
//   "image": "/assets/pr/4.png",
//   "imageback":"/assets/background/Chanel sign on store in Paris, France (1) (1).jpg",
// "notes":[
//   {
//     "one":"poivre rose",
//     "t1":"20%",
// },
// {
//   "one":"jasmin",
//   "t1":"18%",
// },
// ],
// "mnotes":[
//   {
//     "mone":"iris",
//     "m1":"10%",
    
//   },
// ],

// "bnotes":[{
//   "bone":"patchouli",
//   "b1":"22%",
// },
// {
//   "bone":"musc",
//   "b1":"18%",
// },
// {
//   "bone":"vanille",
//   "b1":"12%",
// }
// ],

  
//   "Familleolfactive":"floral chypré"
//   },
//   {"id": 5,
//   "name" : "Chanel Eau Tendre",
//   "image": "/assets/pr/1.png",
//   "imageback":"/assets/background/Chanel sign on store in Paris, France (1) (1).jpg",
//   "notes":[
//     {
//       "one":"coing",
//       "t1":"25%",
//     },
//     {
//       "one":"pamplemousse",
//       "t1":"20%",
//     },
//   ],
//   "mnotes":[
//     {
//       "mone":"rose",
//       "m1":"22%",
//     },
//     {
//       "mone":"jasmin",
//       "m1":"22%",
//     },

//   ],

//   "bnotes":[
//     {
//       "bone":"musc",
//       "b1":"20%",
//     },
//   ],


//   "Familleolfactive":"floral fruité",
//   },
//   {"id": 6,
//   "name" : "Dior Sauvage",
//   "image": "/assets/pr/2.png",
//   "imageback":"/assets/background/téléchargé (4) (1).jpg",

//   "notes":[
//     {
//       "one":"Bergamote",
//       "t1":"16%",
//     },
//     {
//       "one":"Poivre",
//       "t1":"14%",
//     },
//     {
//       "one":"Poivre du Sichuan",
//       "t1":"11%",
//     },
//     {
//       "one":"Poivre rose",
//       "t1":"7%",
//     },
//     {
//       "one":"Élémi",
//       "t1":"3%",
//     },
//   ],
//   "mnotes":[
//     {
//       "mone":"Lavande",
//       "m1":"8%",
//   },
//   {
//     "mone":"Géranium",
//     "m1":"3%",
// },
// ],
// "bnotes":[
//   {
//     "bone":"Ambroxan",
//     "b1":"21%",
//   },
//   {
//     "bone":"Cèdre",
//     "b1":"21%",
//   },
//   {
//     "bone":"Vétiver",
//     "b1":"4%",
//   },
//   {
//     "bone":"Patchouli",
//     "b1":"4%",
//   },
//   {
//     "bone":"Labdanum",
//     "b1":"3%",
//   },
// ],


//   "Familleolfactive":"fougère aromatique",
//   },
//   {"id": 7,
//   "name" : "Dior Bois D'argent",
//   "image": "/assets/pr/7.png",
//   "imageback":"/assets/background/Dior Beauty_ Parfum, Make-up, Huidverzorging & Geschenkideeën _ DIOR (1).jpg",
//   "notes":[
//     {
//       "one":"Juniper Berries",
//       "t1":"5%",
//     }
//   ],
//   "mnotes":[
//     {
//       "mone":"Iris",
//       "m1":"15%",
//     },
//     {
//       "mone":"Cypress",
//       "m1":"6%",
//     },
//   ],
//   "bnotes":[
//     {
//       "bone":"Myrrh",
//       "b1":"14%",
//     },
//     {
//       "bone":"Woody Notes",
//       "b1":"13%",
//     },
//     {
//       "bone":"Honey",
//       "b1":"11%",
//     },
//     {
//       "bone":"Vanilla",
//       "b1":"9%",
//     },
//     {
//       "bone":"Amber",
//       "b1":"7%",
//     },
//   ],

  
//   "Familleolfactive":"chypre boisé",
//   },
//   {"id": 8,
//   "name" : "Dior Ambre nuit",
//   "image": "/assets/pr/8.png",
//   "imageback":"/assets/background/Dior Beauty_ Parfum, Make-up, Huidverzorging & Geschenkideeën _ DIOR (1).jpg",
//   "notes":[
//     {
//       "one":"Pink Pepper",
//       "t1":"28%",
//     },
//     {
//       "one":"Berganot",
//       "t1":"15%",
//     },
//     {
//       "one":"Grapefruit",
//       "t1":"11%",
//     },
//   ],
//   "mnotes":[
//     {
//       "mone":"Rose",
//       "m1":"28%",
//     },
//   ],
//   "bnotes":[
//     {
//       "bone":"Ambergris",
//       "b1":"4%",
//     },
//     {
//       "bone":"Guaiac Wood",
//       "b1":"2%",
//     },
//     {
//       "bone":"Cedar",
//       "b1":"2%",
//     },
//     {
//       "bone":"Patchouli",
//       "b1":"2%",
//     },
 
//   ],

//   "Familleolfactive":"Ambre",
//   },
//   {"id": 9,
//   "name" : "Armani with you",
//   "image": "/assets/pr/10.png",
//   "imageback":"/assets/background/Armani Hotel Dubai - Lifestyle Experience - Passion for Hospitality (1).jpg",


//   "Familleolfactive":"Fougère Aromatique",
  
//   },
//   {"id": 10,
//   "name" : "Dior Fahrenheit",
//   "image": "/assets/pr/9.png",
//   "imageback":"/assets/background/téléchargé (4) (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],


//   "Familleolfactive":"fougère aromatique",
//   },
//   {"id": 11,
//   "name" : "Yves Saint Libre",
//   "image": "/assets/pr/Untitled design (2).png",
//   "imageback":"/assets/background/téléchargé (5) (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"ambre fougère",
//   },
//   {"id": 12,
//   "name" : "bleu electrique",
//   "image": "/assets/pr/28.png",
//   "imageback":"/assets/background/téléchargé (5) (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],
 
//   "Familleolfactive":"aromatique épicé",
//   },
//   {"id": 13,
//   "name" : "Armani amber",
//   "image": "/assets/pr/47.png",
//   "imageback":"/assets/background/Armani Hotel Dubai - Lifestyle Experience - Passion for Hospitality (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"ambre fougère",
  
//   },
//   {"id": 14,
//   "name" : "Creed aventus",
//   "image": "/assets/pr/11.png",
//   "imageback":"/assets/background/téléchargé (6) (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"chypré fruité",
 
//   },
//   {"id": 15,
//   "name" : "Creed himalaya",
//   "image": "/assets/pr/12.png",
//   "imageback":"/assets/background/téléchargé (6) (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"ambre boisé",
  
//   },
//   {"id": 16,
//   "name" : " Creed water",
//   "image": "/assets/pr/13.png",
//   "imageback":"/assets/background/téléchargé (6) (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"aromatique",
//   },
//   {"id": 17,
//   "name" : "Nishane hacivat",
//   "image": "/assets/pr/14.png",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"chypre",
//   },
//   {"id": 18,
//   "name" : "Nishane shem",
//   "image": "/assets/pr/15.png",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"ambre floral",
//   },
//   {"id": 19,
//   "name" : "Soleil neige",
//   "image": "/assets/pr/16.png",
//   "imageback":"/assets/background/Tom Ford - Las Vegas (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"ambre floral",
//   },
//   {"id": 20,
//   "name" : "Black orchid",
//   "image": "/assets/pr/19.png",
//   "imageback":"/assets/background/Tom Ford - Las Vegas (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"ambre floral",
//   },
//   {"id": 21,
//   "name" : "Beau du jour",
//   "image": "/assets/pr/20.png",
//   "imageback":"/assets/background/Tom Ford - Las Vegas (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"fougère aromatique",
//   },
//   {"id": 22,
//   "name" : "Fucking fabulous",
//   "image": "/assets/pr/17.png",
//   "imageback":"/assets/background/Tom Ford - Las Vegas (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"cuir",
//   },
//   {"id": 23,
//   "name" : "Lost cherry",
//   "image": "/assets/pr/18.png",
//   "imageback":"/assets/background/Tom Ford - Las Vegas (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"ambre floral",
//   },
//   {"id": 24,
//   "name" : "",
//   "image": "/assets/pr/Bitter peach",
  
  
//   },
//   {"id": 25,
//   "name" : "Metalique",
//   "image": "/assets/pr/21.png",
//   "imageback":"/assets/background/Tom Ford - Las Vegas (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"aldéhyde floral",


//   },
//   {"id": 26,
//   "name" : "The one",
//   "image": "/assets/pr/22.png",
//   "imageback":"/assets/background/Dolce&Gabbana The One for Men Eau de Parfum - 100ml (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"boisé épicé",


//   },
//   {"id": 27,
//   "name" : "Royal night",
//   "image": "/assets/pr/23.png",
//   "imageback":"/assets/background/Dolce&Gabbana The One for Men Eau de Parfum - 100ml (1).jpg",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"ambre boisé",

//   },
//   {"id": 28,
//   "name" : "Initio greatness",
//   "image": "/assets/pr/INITIO_Oud_for_Greatness_eau_de_parfum_90ml-removebg-preview.jpg",
  
  
//   },
//   {"id": 29,
//   "name" : "Initio happiness",
//   "image": "/assets/pr/Initio_-_.jpg",
 
//   },
//   {"id": 30,
//   "name" : "Molecules 02",
//   "image": "/assets/pr/24.png",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   "Familleolfactive":"amber floral",

  
  
//   },
//   {"id": 31,
//   "name" : "Versace eros",
//   "image": "/assets/pr/25.png",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],
//   "Familleolfactive":"fougère aromatique",

//   },
//   {"id": 32,
//   "name" : "Versace dylan blue",
//   "image": "/assets/pr/26.png",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],
//   "Familleolfactive":"fougère aromatique",

//   },
//   {"id": 33,
//   "name" : "Versace crystal noir",
//   "image": "/assets/pr/27.png",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],
  
//   },
//   {"id": 34,
//   "name" : "Prada l'homme",
//   "image": "/assets/pr/29.png",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   },
//   {"id": 35,
//   "name" : "Prada luna rossa extreme",
//   "image": "/assets/pr/30.png",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],

//   },
//   {"id": 36,
//   "name" : "Terre d'hermes",
//   "image": "/assets/pr/31.png",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],
//   "imageback":"/assets/background/for men with love _) (1).jpg",

 
//   },
//   {"id": 37,
//   "name" : "Hermes un jardin de monsieur li",
//   "image": "/assets/pr/32.png",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],
//   "imageback":"/assets/background/for men with love _) (1).jpg",

  
//   },
//   {"id": 38,
//   "name" : "Hermes un jardin sur le toit",
//   "image": "/assets/pr/33.png",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],
//   "imageback":"/assets/background/for men with love _) (1).jpg",


//   },
//   {"id": 39,
//   "name" : "Hermes un jardin sur le mediterranien",
//   "image": "/assets/pr/34.png",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],
//   "imageback":"/assets/background/for men with love _) (1).jpg",

 
//   },
//   {"id": 40,
//   "name" : "hermes un jardin sur la lagune",
//   "image": "/assets/pr/35.png",
//   "notes":[
//     {}
//   ],
//   "mnotes":[
//     {}
//   ],
//   "bnotes":[
//     {}
//   ],
//   "imageback":"/assets/background/for men with love _) (1).jpg",

  
//   },
//   {"id": 41,
//   "name" : "Voyage d'hermes",
//   "image": "/assets/pr/36.png",
//   "imageback":"/assets/background/for men with love _) (1).jpg",

//   "notes":[
//     {
//       "one":"Cardamome",
//       "t1":"21%",
//     },
//     {
//       "one":"Citron",
//       "t1":"19%",
//     },
//     {
//       "one":"Notes Vertes",
//       "t1":"11%",
//     },
//     {
//       "one":"Baies de genièvre",
//       "t1":"1%",
//     },
//   ],

//   "mnotes":[
//     {
//       "mone":"Notes épicées",
//       "m1":"13%",
//     },
//     {
//       "mone":"Thé",
//       "m1":"12%",
//     },
//     {
//       "mone":"Notes florales",
//       "m1":"4%",
//     },
//   ],
//   "bnotes":[
//     {
//       "bone":"Notes boisées",
//       "b1":"11%",
//     },
//     {
//       "bone":"Musc",
//       "b1":"7%",
//     },
//     {
//       "bone":"Cèdre",
//       "b1":"1%",
//     },
//   ],
//   "Familleolfactive":"Musc floral boisé",


//   },
//   {"id": 42,
//   "name" : "Nautica voyage",
//   "image": "/assets/pr/37.png",
//   "imageback":"/assets/background/for men with love _) (1).jpg",

//   "notes":[
//     {
//       "one":"Pomme",
//       "t1":"25%",
//     },
//     {
//       "one":"Notes vertes",
//       "t1":"24%",
//     },
//   ],
//   "mnotes":[
//     {
//       "mone":"Latus",
//       "m1":"17%",
//   },
//   {
//     "mone":"Mimosa",
//     "m1":"9%",
// },
// ],
// "bnotes":[
//   {
//     "bone":"Musc",
//     "b1":"9%",
//   },
//   {
//     "bone":"Cèdre",
//     "b1":"6%",
//   },
//   {
//     "bone":"Mousse de chêne",
//     "b1":"5%",
//   },
//   {
//     "bone":"Ambre",
//     "b1":"4%",
//   },
// ],

//   "Familleolfactive":"Boisé Aquatique",
 
//   },
//   {"id": 43,
//   "name" : "Afternoon swim",
//   "image": "/assets/pr/38.png",
//   "imageback":"/assets/background/Louis Vuitton Men's Fragrance Collection (1).jpg",
//   "notes":[
//     {
//       "one":"Mandarine",
//       "t1":"39%",
//     },
//     {
//       "one":"Orange",
//       "t1":"34%",
//     },
//     {
//       "one":"Bergamote",
//       "t1":"27%",
//     },
  
//   ],
//   "Familleolfactive":"Agrumes",


//   },
//   {"id": 44,
//   "name" : "Louis vuitton l'immensité",
//   "image": "/assets/pr/39.png",
//   "imageback":"/assets/background/Louis Vuitton Men's Fragrance Collection (1).jpg",

//   "notes":[
//     {
//       "one":"Pamplemousse",
//       "t1":"14%",
//     },
//     {
//       "one":"Eau",
//       "t1":"13%",
//     },
//     {
//       "one":"Gingembre",
//       "t1":"12%",
//     },
//     {
//       "one":"Romarin",
//       "t1":"9%",
//     },
//     {
//       "one":"bergamote",
//       "t1":"8%",
//     },
//   ],
//   "mnotes":[
//     {
//       "mone":"Fréquemment",
//       "m1":"10%",
//   },
//   {
//     "mone":"Géranium",
//     "m1":"7%",
// },
// ],
// "bnotes":[
//   {
//     "bone":"Ambroxan",
//     "b1":"15%",
//   },
//   {
//     "bone":"Ambre",
//     "b1":"7%",
//   },
//   {
//     "bone":"Labdanum",
//     "b1":"5%",
//   },
// ],

//   "Familleolfactive":"Ambré Épicé",
  
 
//   },
//   {"id": 45,
//   "name" : "Louis vuitton sur la route",
//   "image": "/assets/pr/40.png",
//   "imageback":"/assets/background/Louis Vuitton Men's Fragrance Collection (1).jpg",

//   "notes":[
//     {
//       "one":"Cituses",
//       "t1":"15%",
//     },
//     {
//       "one":"bergamote",
//       "t1":"13%",
//     },
//     {
//       "one":"Herbe",
//       "t1":"11%",
//     },
//     {
//       "one":"Citron",
//       "t1":"10%",
//     },
//     {
//       "one":"Poivre rose",
//       "t1":"5%",
//     },
//     {
//       "one":"Cardamome",
//       "t1":"4%",
//     },
//   ],

//   "mnotes":[
//     { 
//       "mone":"Pleurons",
//     "m1":"6%",
//   },
//   { "mone":"Hédion",
//   "m1":"5%",
// },
//   ],

//   "bnotes":[
//     {
//       "bone":"Cuir",
//       "b1":"13%",
//     },
//     {
//       "bone":"Baume du Pérou",
//       "b1":"6%",
//     },
//     {
//       "bone":"Cèdre",
//       "b1":"5%",
//     },
//     {
//       "bone":"Patchouli",
//       "b1":"5%",
//     },
//     {
//       "bone":"Gros E super",
//       "b1":"3%",
//     },

//   ],
//   "Familleolfactive":"Agrumes Aromatiques",

//   },
//   {"id": 46,
//   "name" : "Louis vuitton ombre nomade",
//   "image": "/assets/pr/42.png",
//   "imageback":"/assets/background/Louis Vuitton Men's Fragrance Collection (1).jpg",

// "notes":[
//   {
//     "one":"Framboise",
//     "t1":"13%",
// },
// {
//   "one":"Safran",
//   "t1":"8%",
// },
// ],
// "mnotes":[{
//   "mone":"Rose",
//   "m1":"14%",
// },
// {
//   "mone":"Géranium",
//   "m1":"4%",
// },
// ],
// "bnotes":[
//   {
//     "bone":"Bois d'agar",
//     "b1":"21%",
// },
// {
//   "bone":"Encens",
//   "b1":"15%",
// },
// {
//   "bone":"Bouleau",
//   "b1":"10%",
// },
// {
//   "bone":"benzain",
//   "b1":"8%",
// },
//   {
//     "bone":"Bois d'ambre",
//     "b1":"7%",
// },
// ],

//   "Familleolfactive":"Ambre Boisé",


//   },
//   {"id": 46,
//   "name" : "Louis vuitton imagination",
//   "image": "/assets/pr/41.png",
//   "imageback":"/assets/background/Louis Vuitton Men's Fragrance Collection (1).jpg",

//   "notes":[
//     {
//     "one":"Citron",
//     "t1":"17%",
//   },
//   {
//     "one":"Bergamote",
//     "t1":"11%",
//   },
//   {
//     "one":"Orange",
//     "t1":"11%",
//   },
//   {
//     "one":"Gingembre",
//     "t1":"9%",
//   },
//   {
//     "one":"Néroli",
//     "t1":"9%",
//   },
// ],
// "mnotes":[
//   {
//     "mone":"Tea",
//     "m1":"9%",
//   },
//   {
//     "mone":"Cannelle",
//     "m1":"6%",
//   },
// ],

// "bnotes":[
//   {
//     "bone":"Ambroxan",
//     "b1":"12%",
//   },
//   {
//     "bone":"Bois de gaïac",
//     "b1":"5%",
//   },
//   {
//     "bone":"Encens",
//     "b1":"4%",
//   },

// ],

//   "Familleolfactive":" Agrumes Aromatiques",
 
//  },
//   {"id": 47,
//   "name" : "Mfk baccarat rouge",
//   "image": "/assets/pr/43.png",
//   "imageback":"/assets/background/86074440-28d9-4fe4-a9f6-61c4b944a71d (1).jpg",


//   "notes":[
//     {
//       "one":"Amande",
//       "t1":"20%",
//     },
//     {
//       "one":"Safran",
//       "t1":"18%",
//     }
//   ],
//   "mnotes":[
//     {
//       "mone":"Jasmin",
//       "m1":"9%",
//     },
//   ],
//   "bnotes":[
    
//       {
//         "bone":"Ambre gris",
//         "b1":"22%",
//        },
//        {
//         "bone":"Notes boisées",
//         "b1":"12%",
//        },
//        {
//         "bone":"Musc",
//         "b1":"11%",
//        },
//        {
//         "bone":"Cèdre",
//         "b1":"17%",
//        },
  
// ],
//   "Familleolfactive":"Ambre Floral",

  
//   },
//   {"id": 48,
//   "name" : "Mfk petit matin",
//   "image": "/assets/pr/44.png",
//   "imageback":"/assets/background/86074440-28d9-4fe4-a9f6-61c4b944a71d (1).jpg",

//   "notes":[

//     {
//       "one":"Citron",
//       "t1":"29%",
//     },
//   ],

//   "mnotes":[
//     {
//       "mone":"fleur d'oranger",
//       "m1":"20%",
//     },
//     {
//       "mone":"lavande",
//       "m1":"13%",
//     },
//     {
//       "mone":"aubépine",
//       "m1":"9%",
//     },
//   ],
//   "bnotes":[

//        {
//       "bone":"musc",
//       "b1":"17%",
//      },
//      {
//       "bone":"ambroxan",
//       "b1":"11%",
//      },

//   ],

//   "Familleolfactive":"Vert Aromatique",

//   },
  
//   ]
  get product() {
 return this.products.find((p: { id: string | null; }) => p.id == this.id)
  }

}
function getProductKeys() {
  throw new Error('Function not implemented.');
}

