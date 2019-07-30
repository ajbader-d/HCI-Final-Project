import { Injectable } from '@angular/core';
import { ExpDetail } from './exp-model';

@Injectable({
  providedIn: 'root'
})
export class ExpServiceService {
  private expDetail: ExpDetail[] = [
    {
      id: 'romeExp1',
      title: 'Ancient Bike Tour',
      imageUrl: '../assets/img/hero-bk/bk-img.png',
      description: 'Exploring the center is essential when in Rome, but if you want a really unique experience you have to get off the beaten path. Get a view of Italy in a new light with the bike tour of Ancient Appian Way, Catacombs, and Aqueducts park.',
      duration: '4.5 hours',
      meetingPoint: 'Via Labicana, 49',
      tripType: 'group tour',
      email: 'shop@romeing.it',
      website: 'https://www.romeing.it/shop/product/rome-bike-tour-ancient-appian-way-catacombs-aqueducts/',
      phone: '333-52-1558'
    },
    {
      id: 'romeExp2',
      title: 'Wine Tasting ',
      imageUrl: '../assets/img/hero-bk/bk-img.png',
      description: 'Indulge in an authentic wine tasting in a charming wine bar in the historic center, footsteps from Campo de’ Fiori. Step inside the boutique enoteca with wines stacked on every shelf where you will be greeted by your host Patrizia and her sommelier son, Giampaolo.',
      duration: '2 hours',
      meetingPoint: 'Via di Monserrato, 4',
      tripType: 'group tour',
      email: 'shop@romeing.it',
      website: 'https://www.romeing.it/shop/product/rome-wine-tasting-with-italian-fine-wines-food/',
      phone: '333-52-1558'
    },
    {
      id: 'romeExp3',
      title: 'Sistine Chapel’s secret rooms',
      imageUrl: '../assets/img/hero-bk/bk-img.png',
      description: 'This isn’t just any private tour of the Vatican and Sistine Chapel — on this Viator VIP tour, you’ll have permission to visit rooms of the Vatican Museums that are typically closed to the public, plus you’ll go inside the Sistine Chapel after hours, when it’s only open for your small group limited to 15 people. This unprecedented opportunity to gaze at Michelangelo’s famous ceiling fresco without the usual crowds is the ultimate way to experience this iconic site. In addition to secret sites like the Room of Gold, you’ll also visit public galleries like Raphael’s Rooms.      ',
      duration: '2.5 hours',
      meetingPoint: 'Vatican Museums, Rome',
      tripType: 'private tour',
      email: 'info@viator.com',
      website: 'https://www.viator.com/tours/Rome/Viator-VIP-Sistine-Chapel-Private-Viewing-and-Small-Group-Tour-of-the-Vaticans-Secret-Rooms/d511-3731VATICANVIP',
      phone: '+1 (702) 648-5873'
    },
    {
      id: 'parisExp1',
      title: 'Gem of the Gare de Lyon',
      imageUrl: '../assets/img/hero-bk/paris_single.png',
      description: 'One could easily miss this soaring masterpiece of Belle Époque architecture hidden away in the Gare de Lyon train station. Whether you are on your way to the Riviera or not, this eye-popping brasserie is a destination unto itself. It is a marvel, with French boiserie woodwork, gilding, and murals by leading 19th-century painters depicting railway scenes and portraits of famous Parisians (can you spot Sarah Bernhardt?).',
      duration: '2 hours',
      meetingPoint: '6 parvis Notre-Dame–Place Jean-Paul II,',
      tripType: 'group tour',
      email: 'info@fodors.com',
      website: 'www.notredamedeparis.fr',
      phone: '01–42–34–56–10'
    },
    {
      id: 'parisExp2',
      title: 'Visit the Louvre, the world’s largest art museum.',
      imageUrl: '../assets/img/hero-bk/paris_single.png',
      description: 'Simply put, the Louvre is the worlds greatest art museum—and the largest, with 675,000 square feet of works from almost every civilization on earth. The Mona Lisa is, of course, a top draw, along with the Venus de Milo and Winged Victory. These and many more of the globe’s most coveted treasures are displayed in three wings—the Richelieu, the Sully, and the Denon—which are arranged like a horseshoe.',
      duration: 'open',
      meetingPoint: 'Palais du Louvre, Paris, Île-de-France',
      tripType: 'group tour',
      email: 'info@fodors.com',
      website: 'www.louvre.fr',
      phone: '01–40–20–53–17'
    },
    {
      id: 'parisExp3',
      title: 'Basilique Saint-Denis',
      imageUrl: '../assets/img/hero-bk/paris_single.png',
      // tslint:disable-next-line: max-line-length
      description: 'For centuries, the former royal abbey of Saint-Denis illuminated the artistic, political and spiritual history of the Frankish world.',
      duration: '2 hours',
      meetingPoint: '1 rue de la Légion d"Honneur, St-Denis',
      tripType: 'group tour',
      email: 'info@fodors.com',
      website: 'www.saint-denis.monuments-nationaux.fr',
      phone: '01–48–09–83–54'
    },
    {
      id: 'barcelonaExp1',
      title: 'Visit Park Güell',
      imageUrl: '../assets/img/hero-bk/barce_sing.png',
      // tslint:disable-next-line: max-line-length
      description: 'We’re hardly sharing a secret when we say that Gaudi’s landscaped gardens are one of the best places to visit in Barcelona. But if you really want to experience Park Guell at its romantic best, then head there in the evening, when the late afternoon glazes the gorgeous trencadis-decorated terrace, and you can look over the whole of Barcelona bathed in soft golden light.',
      duration: '1 hour',
      meetingPoint: 'Carrer d"Olot 7,',
      tripType: 'group tour',
      email: 'info@getyourguide.com',
      website: 'https://juliatravel.com/tours/barcelona/skip-the-line-park-guell-guided-walking-tour-12765_16/',
      phone: '+34 93 402 69 00'
    },
    {
      id: 'barcelonaExp2',
      title: 'Ride A Steel Donkey',
      imageUrl: '../assets/img/hero-bk/barce_sing.png',
      // tslint:disable-next-line: max-line-length
      description: 'Steel Donkey Bike Tours are the first and only alternative bicycle rides in Barcelona. Unlike with standard tours of the city, you won’t simply be learning about Barcelona you’ll be living it too… ride with us and we’ll search out the best patatas bravas in BCN, look around obscure but beautiful attractions like the Hospital de Sant Pau and the amazing neoclassical cemetery of Poblenou, stop off at local markets for delicious snacks or vintage threads, and recount the stories of the city under the shade of palm trees and in picturesque squares.',
      duration: '4 hours',
      meetingPoint: 'Carrer Cervantes 5',
      tripType: 'group tour',
      email: 'info@steeldonkeybiketours.com',
      website: 'https://www.steeldonkeybiketours.com/',
      phone: '+34 657286854'
    },
    {
      id: 'barcelonaExp3',
      title: 'La Sagrada Familia Towers',
      imageUrl: '../assets/img/hero-bk/barce_sing.png',
      // tslint:disable-next-line: max-line-length
      description: 'Skip the long lines to the Sagrada Familia in Barcelona, and enjoy a 1,5-hour guided tour of Gaudí’s Modernisme masterpiece. Learn about the unfinished construction of the basilica at the museum. Then, enjoy panoramic views from the towers.',
      duration: '1.3 - 1.5 hours',
      meetingPoint: 'Carrer Cervantes 5',
      tripType: 'group tour',
      email: 'info@getyourguide.com',
      website: 'https://www.getyourguide.com/barcelona-l45/barcelona-skip-the-line-sagrada-familia-tour-towers-t51441/?partner_id=P5C41H8',
      phone: '+34 93 402 69 00'
    },
    {
      id: 'berlinExp1',
      title: 'Visit Spreepark',
      imageUrl: '../assets/img/hero-bk/paris_sing.png',
      // tslint:disable-next-line: max-line-length
      description: 'The Spreepark in southeastern Berlin has been abandoned for the last 10 years, and it looks like it. Each part of the park is scattered with remnants from the previous three decades, making a hodgepodge of bizarre entertainment, children’s rides, and life-size dinosaur statues.',
      duration: '3 hours',
      meetingPoint: 'Kiehnwerderallee 1-3',
      tripType: 'group tour',
      email: 'not available',
      website: 'http://www.gruen-berlin.de/spreepark',
      phone: '+49 30 280 18 320'
    },
    {
      id: 'berlinExp2',
      title: 'Visit Tempelhofer',
      imageUrl: '../assets/img/hero-bk/paris_sing.png',
      // tslint:disable-next-line: max-line-length
      description: 'A historically fascinating area, with a diverse and tangled history in its role in Berlin, the Tempelhof area is more than just the abandoned airfield. Taking a look at the cultural sites of this corner of the city, from cemeteries to planetariums, here are the wonders of the Western district.',
      duration: '2 hours',
      meetingPoint: 'Tempelhof Damm 1-7 (entry opposite petrol station)',
      tripType: 'group tour',
      email: ' tour@thf-berlin.de ',
      website: 'https://www.thf-berlin.de/en/tours/',
      phone: '+49 30 200 03 74-41'
    },
    {
      id: 'berlinExp3',
      title: 'Liquidrom futuristic spa',
      imageUrl: '../assets/img/hero-bk/paris_sing.png',
      // tslint:disable-next-line: max-line-length
      description: 'This futuristic German spa allows visitors to float in a pool of salt water while zoning out to underwater techno. Puncturing the Berlin sky like a surreal crown, the exterior of the Liquidrom spa looks like something straight out of a science fiction novel, and the hi-tech delights within don’t disappoint either.',
      duration: '3 hours',
      meetingPoint: 'Liquidrom GmbH & Co. KG Möckernstraße 10',
      tripType: 'private',
      email: 'rezeption@liquidrom-berlin.de',
      website: 'https://www.liquidrom-berlin.de/en/preise.php',
      phone: '+49 (0)30 25 80 07 82-0'
    },
  ];


  constructor() { }

  getExpDetail(ExpDetailId: string) {
    return {
      ...this.expDetail.find(expDetail => {
        return expDetail.id === ExpDetailId;
      })
    };
  }
}
