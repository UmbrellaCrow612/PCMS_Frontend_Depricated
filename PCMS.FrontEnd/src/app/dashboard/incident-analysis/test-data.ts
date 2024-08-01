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