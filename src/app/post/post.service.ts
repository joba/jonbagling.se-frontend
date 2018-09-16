import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  posts = [
    {
      id: 46,
      title: 'Agada',
      description:
        'Agada is a platform where licensed therapists can offer treatments online.',
      agency: 'Frost',
      url: 'https://www.agada.se  ',
      tags: [
        {
          id: 1,
          name: 'frontend'
        },
        {
          id: 4,
          name: 'css'
        },
        {
          id: 12,
          name: 'angular2'
        },
        {
          id: 13,
          name: 'typescript'
        }
      ]
    },
    {
      id: 44,
      title: 'bold',
      description: '',
      agency: 'Dareville',
      url: 'http://boldscandinavia.com ',
      tags: [
        {
          id: 1,
          name: 'frontend'
        },
        {
          id: 2,
          name: 'backend'
        },
        {
          id: 3,
          name: 'php'
        },
        {
          id: 4,
          name: 'css'
        },
        {
          id: 5,
          name: 'wordpress'
        },
        {
          id: 9,
          name: 'javascript'
        }
      ]
    },
    {
      id: 47,
      title: 'Hesperios',
      description:
        'Hesperios is a clothing collection focused on knitwear, \
        an annual two volume art and literary journal and shop based in New York City.',
      agency: 'Yours',
      url: 'https://www.hesperios.com',
      tags: [
        {
          id: 1,
          name: 'frontend'
        },
        {
          id: 2,
          name: 'backend'
        },
        {
          id: 3,
          name: 'php'
        },
        {
          id: 4,
          name: 'css'
        },
        {
          id: 5,
          name: 'wordpress'
        },
        {
          id: 9,
          name: 'javascript'
        }
      ]
    },
    {
      id: 48,
      title: 'Funktionsrätt Sverige',
      description: '',
      agency: 'MSL/JKL',
      url: 'http://funktionsratt.se/',
      tags: [
        {
          id: 1,
          name: 'frontend'
        },
        {
          id: 2,
          name: 'backend'
        },
        {
          id: 3,
          name: 'php'
        },
        {
          id: 4,
          name: 'css'
        },
        {
          id: 5,
          name: 'wordpress'
        },
        {
          id: 9,
          name: 'javascript'
        }
      ]
    },
    {
      id: 49,
      title: 'Tredje AP-fonden',
      description: '',
      agency: 'MSL/JKL',
      url: 'http://ap3.se',
      tags: [
        {
          id: 1,
          name: 'frontend'
        },
        {
          id: 2,
          name: 'backend'
        },
        {
          id: 3,
          name: 'php'
        },
        {
          id: 4,
          name: 'css'
        },
        {
          id: 5,
          name: 'wordpress'
        },
        {
          id: 9,
          name: 'javascript'
        }
      ]
    },
    {
      id: 45,
      title: 'drivet podcast',
      description:
        'DRIVET is a inspiration- and carreerpodcast where succsessful women is interviewed.',
      agency: '',
      url: 'http://drivetpodcast.se',
      tags: [
        {
          id: 1,
          name: 'frontend'
        },
        {
          id: 2,
          name: 'backend'
        },
        {
          id: 3,
          name: 'php'
        },
        {
          id: 4,
          name: 'css'
        },
        {
          id: 5,
          name: 'wordpress'
        },
        {
          id: 9,
          name: 'javascript'
        }
      ]
    },
    {
      id: 34,
      title: 'pejlo demo',
      description: '',
      agency: 'Frost',
      url: 'https://www.pejlo.se/#!/sa-fungerar-pejlo  ',
      tags: [
        {
          id: 1,
          name: 'frontend'
        },
        {
          id: 4,
          name: 'css'
        },
        {
          id: 9,
          name: 'javascript'
        },
        {
          id: 10,
          name: 'angular'
        }
      ]
    },
    {
      id: 14,
      title: 'skolvalet',
      description: '',
      agency: 'MSL/JKL',
      url: 'http://skolvalet.nu ',
      tags: [
        {
          id: 1,
          name: 'frontend'
        },
        {
          id: 2,
          name: 'backend'
        },
        {
          id: 3,
          name: 'php'
        },
        {
          id: 4,
          name: 'css'
        },
        {
          id: 5,
          name: 'wordpress'
        }
      ]
    },
    {
      id: 40,
      title: 'mitt nya jobb',
      description: '',
      agency: 'MSL/JKL',
      url: 'http://avskaffajobbvalet.skolvalet.nu/',
      tags: [
        {
          id: 1,
          name: 'frontend'
        },
        {
          id: 2,
          name: 'backend'
        },
        {
          id: 3,
          name: 'php'
        },
        {
          id: 4,
          name: 'css'
        },
        {
          id: 11,
          name: 'google maps'
        }
      ]
    },
    {
      id: 50,
      title: 'Fabian Mannheimer',
      description: '',
      agency: '',
      url: 'https://fabianmannheimer.com',
      tags: [
        {
          id: 1,
          name: 'frontend'
        },
        {
          id: 2,
          name: 'backend'
        },
        {
          id: 3,
          name: 'php'
        },
        {
          id: 4,
          name: 'css'
        },
        {
          id: 5,
          name: 'wordpress'
        },
        {
          id: 9,
          name: 'javascript'
        }
      ]
    }
  ];
}
