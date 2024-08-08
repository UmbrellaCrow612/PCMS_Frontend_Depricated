export const heatMapData = [
    {
      name: 'Mon',
      series: [
        { name: '00-04', value: 12 },
        { name: '04-08', value: 5 },
        { name: '08-12', value: 8 },
        { name: '12-16', value: 15 },
        { name: '16-20', value: 23 },
        { name: '20-24', value: 18 },
      ],
    },
    {
      name: 'Tue',
      series: [
        { name: '00-04', value: 10 },
        { name: '04-08', value: 3 },
        { name: '08-12', value: 7 },
        { name: '12-16', value: 14 },
        { name: '16-20', value: 20 },
        { name: '20-24', value: 16 },
      ],
    },
    {
      name: 'Wed',
      series: [
        { name: '00-04', value: 11 },
        { name: '04-08', value: 4 },
        { name: '08-12', value: 9 },
        { name: '12-16', value: 13 },
        { name: '16-20', value: 22 },
        { name: '20-24', value: 17 },
      ],
    },
    {
      name: 'Thu',
      series: [
        { name: '00-04', value: 13 },
        { name: '04-08', value: 6 },
        { name: '08-12', value: 10 },
        { name: '12-16', value: 16 },
        { name: '16-20', value: 25 },
        { name: '20-24', value: 19 },
      ],
    },
    {
      name: 'Fri',
      series: [
        { name: '00-04', value: 18 },
        { name: '04-08', value: 7 },
        { name: '08-12', value: 11 },
        { name: '12-16', value: 17 },
        { name: '16-20', value: 28 },
        { name: '20-24', value: 30 },
      ],
    },
    {
      name: 'Sat',
      series: [
        { name: '00-04', value: 25 },
        { name: '04-08', value: 9 },
        { name: '08-12', value: 12 },
        { name: '12-16', value: 20 },
        { name: '16-20', value: 32 },
        { name: '20-24', value: 35 },
      ],
    },
    {
      name: 'Sun',
      series: [
        { name: '00-04', value: 22 },
        { name: '04-08', value: 8 },
        { name: '08-12', value: 10 },
        { name: '12-16', value: 18 },
        { name: '16-20', value: 27 },
        { name: '20-24', value: 24 },
      ],
    },
  ];


  /*

  This data structure represents a week-long crime heatmap with the following characteristics:

Days of the week are represented from Monday to Sunday.
Each day is divided into six 4-hour time slots.
The value represents the number of reported crimes during that time slot.
The data follows some realistic patterns:

Early morning hours (00-04, 04-08) generally have fewer crimes.
Afternoons and evenings (16-20, 20-24) tend to have more crimes.
Weekends (Friday, Saturday, Sunday) show higher crime rates overall.
Saturday night/early Sunday morning has the highest crime rates.
  
  */


export var bubbleData = [
  {
    name: 'Theft',
    series: [
      {
        name: '2023',
        x: '2023',
        y: 25.3,
        r: 80
      },
      {
        name: '2022',
        x: '2022',
        y: 23.1,
        r: 75
      },
      {
        name: '2021',
        x: '2021',
        y: 20.4,
        r: 70
      }
    ]
  },
  {
    name: 'Assault',
    series: [
      {
        name: '2023',
        x: '2023',
        y: 18.8,
        r: 65
      },
      {
        name: '2022',
        x: '2022',
        y: 17.9,
        r: 60
      },
      {
        name: '2021',
        x: '2021',
        y: 16.4,
        r: 55
      }
    ]
  },
  {
    name: 'Fraud',
    series: [
      {
        name: '2023',
        x: '2023',
        y: 15.4,
        r: 50
      },
      {
        name: '2022',
        x: '2022',
        y: 13.1,
        r: 45
      },
      {
        name: '2021',
        x: '2021',
        y: 11.2,
        r: 40
      }
    ]
  },
  {
    name: 'Drug Offenses',
    series: [
      {
        name: '2023',
        x: '2023',
        y: 12.2,
        r: 40
      },
      {
        name: '2022',
        x: '2022',
        y: 11.8,
        r: 38
      },
      {
        name: '2021',
        x: '2021',
        y: 10.7,
        r: 35
      }
    ]
  }
];