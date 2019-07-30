import { Injectable } from '@angular/core';
import { Basic } from './basic.model';

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  private basic: Basic[] = [
    {
      id: 'romeWeather',
      title: 'Weather',
      imageUrl: '../assets/img/sunny.png',
      body: 'Jun–Sep is warm to hot and generally dry. The wettest months are Oct–Dec. Winter from Dec to Feb is cool to mild.',
    },
    {
      id: 'romeCurrency',
      title: 'Currency',
      imageUrl: '../assets/img/money.png',
      body: 'Euro is the official currency',
    },
    {
      id: 'romeCost',
      title: 'Cost Of Living',
      imageUrl: '../assets/img/budget.png',
      // tslint:disable-next-line: max-line-length
      body: ' Daily Travel Expenses in Rome: €68 / $77 / £61 Our Rome travel budget includes accommodation, three meals per day, transport and activities.',
    },
    {
      id: 'romeInsurance',
      title: 'Cost Of Living',
      imageUrl: '../assets/img/medical-insurance.png',
      body: 'Rome social security insurance. The cost of this is approximately €213 per year',
    },
    {
      id: 'romeSocket',
      title: 'Sockets',
      imageUrl: '../assets/img/electric.png',
      // tslint:disable-next-line: max-line-length
      body: 'Plug adapters are the interfaces between the American flat-pronged plug and Italy"s two (or three) round-prong socket. These allow you to plug your electrical device into the Italian wall socket, but they do not convert the electricity to the American 110 volts',
    },

    {
      id: 'parisWeather',
      title: 'Weather',
      imageUrl: '../assets/img/sunny.png',
      // tslint:disable-next-line: max-line-length
      body: 'March to May is largely unstable, with temperatures ranging from pleasant to quite cold. The summer span from June to August Midsummer in the city of light is moderately warm and gorgeous—or muggy, hot, and humid. During winter, average temperatures typically hover around 45 F, but there are occasional warm days where temperatures in the upper 50s aren not uncommon.',
    },
    {
      id: 'parisCurrency',
      title: 'Weather',
      imageUrl: '../assets/img/sunny.png',
      body: 'Euro is the official currency',
    },
    {
      id: 'parisCost',
      title: 'Cost Of Living',
      imageUrl: '../assets/img/budget.png',
      // tslint:disable-next-line: max-line-length
      body: ' Daily Travel Expenses in Paris: €80 / $90 / £72 Our Rome travel budget includes accommodation, three meals per day, transport and activities.',
    },
    {
      id: 'parisInsurance',
      title: 'Cost Of Living',
      imageUrl: '../assets/img/medical-insurance.png',
      body: 'French social security insurance. The cost of this is approximately €213 per year',
    },
    {
      id: 'parisSocket',
      title: 'Sockets',
      imageUrl: '../assets/img/electric.png',
      // tslint:disable-next-line: max-line-length
      body: 'For France there are two associated plug types, types C and E. Plug type C is the plug which has two round pins and plug type E is the plug which has two round pins and a hole for the socket"s male earthing pin. France operates on a 230V supply voltage and 50Hz',
    },

    {
      id: 'barcelonaWeather',
      title: 'Weather',
      imageUrl: '../assets/img/sunny.png',
      // tslint:disable-next-line: max-line-length
      body: 'Summer (Jul–Aug) can be hot and humid, Winters in Barcelona are mild. December, January and February are the coldest months.',
    },
    {
      id: 'barcelonaCurrency',
      title: 'Weather',
      imageUrl: '../assets/img/sunny.png',
      body: 'Euro is the official currency',
    },
    {
      id: 'barcelonaCost',
      title: 'Cost Of Living',
      imageUrl: '../assets/img/budget.png',
      // tslint:disable-next-line: max-line-length
      body: 'Daily Travel Expenses in Barcelona: €35 / $41 / £30 Our Barcelona travel budget includes accommodation, three meals per day, transport and activities.',
    },
    {
      id: 'barcelonaInsurance',
      title: 'Health Insurance',
      imageUrl: '../assets/img/medical-insurance.png',
      // tslint:disable-next-line: max-line-length
      body: 'The Spanish health care system specifies that every person in Germany is required to have a health insurance',
    },
    {
      id: 'barcelonaSocket',
      title: 'Sockets',
      imageUrl: '../assets/img/electric.png',
      // tslint:disable-next-line: max-line-length
      body: 'The mains voltage is in Barcelona as in the whole of Europe 230 volts AC, plug adapters are hardly necessary. The flat European standard fit into the Spanish sockets.',
    },

    {
      id: 'berlinWeather',
      title: 'Weather',
      imageUrl: '../assets/img/sunny.png',
      // tslint:disable-next-line: max-line-length
      body: 'Summer (Jun–Aug) is warm. Fall and winter (Oct–Mar) can be cloudy with rain, sleet and snow. Peak travel is May–Oct.',
    },
    {
      id: 'berlinCurrency',
      title: 'Weather',
      imageUrl: '../assets/img/sunny.png',
      body: 'Euro is the official currency',
    },
    {
      id: 'berlinCost',
      title: 'Cost Of Living',
      imageUrl: '../assets/img/budget.png',
      // tslint:disable-next-line: max-line-length
      body: 'Daily Travel Expenses in Berlin: €57 / $64 / £51 Our Berlin travel budget includes accommodation, three meals per day, transport and activities.',
    },
    {
      id: 'berlinInsurance',
      title: 'Cost Of Living',
      imageUrl: '../assets/img/medical-insurance.png',
      // tslint:disable-next-line: max-line-length
      body: 'The German health care system specifies that every person in Germany is required to have a health insurance. Even those who will stay in Germany for a short time must be health insured',
    },
    {
      id: 'berlinSocket',
      title: 'Sockets',
      imageUrl: '../assets/img/electric.png',
      // tslint:disable-next-line: max-line-length
      body: 'Germany travel adaptors. For Germany there are two associated plug types, types C and F. Plug type C is the plug which has two round pins and plug type F is the plug which has two round pins with two earth clips on the side. Germany operates on a 230V supply voltage and 50Hz.',
    },
  ];
  constructor() { }

  getAllBasics() {
    return [...this.basic];
  }

  getBasic(basicId: string) {
    return {
      ...this.basic.find(basic => {
        return basic.id === basicId;
      })
    };
  }

}
