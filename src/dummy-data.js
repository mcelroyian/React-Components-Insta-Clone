const dummyData = [
    {
        username: "philzcoffee",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
        likes: 400,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                username: "philzcoffee",
                text: "We've got more than just coffees!"
            },
            {
                username: "biancasaurus",
                text: "Looks delicious!"
            },
            {
                username: "martinseludo",
                text: "Can't wait to try it!"
            }
        ]
    },
    {
        username: "twitch",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
        likes: 4307,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                username: "twitch",
                text: "Epic Street Fighter action here in Vegas!"
            },
            {
                username: "michaelmarzetta",
                text: "Omg that match was crazy"
            },
            {
                username: "themexican_leprechaun",
                text: "What a setup"
            },
            {
                username: "dennis_futbol",
                text: "It that injustice"
            }
        ]
    },
    {
      username: "Marylou Mann",
      thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
      imageUrl: "http://placehold.it/800",
      likes: 2907,
      timestamp: "2015-02-24T02:11:18 +06:00",
      comments: [
        {
          username: "Dona Wilder",
          text: "ad"
        },
        {
          username: "Eugenia Valenzuela",
          text: "ullamco"
        },
        {
          username: "Deloris Ayers",
          text: "est"
        }
      ]
    },
    {
      username: "Esther Hester",
      thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
      imageUrl: "http://placehold.it/800",
      likes: 3225,
      timestamp: "2018-08-17T12:15:47 +05:00",
      comments: [
        {
          username: "Ayala Oconnor",
          text: "officia"
        },
        {
          username: "Buckley Bowman",
          text: "ea"
        },
        {
          username: "Mcfadden Fitzgerald",
          text: "nostrud"
        }
      ]
    },
    {
      username: "Vincent Mckinney",
      thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
      imageUrl: "http://placehold.it/800",
      likes: 513,
      timestamp: "2019-11-29T11:04:38 +06:00",
      comments: [
        {
          username: "Gabriela Daniels",
          text: "officia"
        },
        {
          username: "Lorna Herman",
          text: "esse"
        },
        {
          username: "Hollie Waters",
          text: "officia"
        }
      ]
    },
    {
      username: "Georgette Hyde",
      thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
      imageUrl: "http://placehold.it/800",
      likes: 2716,
      timestamp: "2016-07-17T10:51:14 +05:00",
      comments: [
        {
          username: "Webb Ross",
          text: "deserunt"
        },
        {
          username: "Prince Meyer",
          text: "ad"
        },
        {
          username: "Sherman Rollins",
          text: "et"
        }
      ]
    },
    {
      username: "Pitts Everett",
      thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
      imageUrl: "http://placehold.it/800",
      likes: 2329,
      timestamp: "2020-02-17T06:53:03 +06:00",
      comments: [
        {
          username: "Carter Woodward",
          text: "laborum"
        },
        {
          username: "Andrews Bowers",
          text: "tempor"
        },
        {
          username: "Potter Hudson",
          text: "veniam"
        }
      ]
    },
    {
      username: "Noel Garner",
      thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
      imageUrl: "http://placehold.it/800",
      likes: 3832,
      timestamp: "2014-02-26T05:34:46 +06:00",
      comments: [
        {
          username: "Edna Velasquez",
          text: "adipisicing"
        },
        {
          username: "Serrano Horton",
          text: "duis"
        },
        {
          username: "Luann Anthony",
          text: "quis"
        }
      ]
    },
    {
      username: "Tabatha Combs",
      thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
      imageUrl: "http://placehold.it/800",
      likes: 1612,
      timestamp: "2018-01-04T04:10:02 +06:00",
      comments: [
        {
          username: "Adela Wilkerson",
          text: "officia"
        },
        {
          username: "Terrie Hutchinson",
          text: "cupidatat"
        },
        {
          username: "Robinson Mcgowan",
          text: "esse"
        }
      ]
    }
];

export default dummyData;
