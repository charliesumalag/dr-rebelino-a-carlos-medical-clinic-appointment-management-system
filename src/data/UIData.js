import { MdDifference, MdWheelchairPickup, MdCheckCircleOutline, MdSchedule } from 'react-icons/md';

export const upcomingSectionData = [
  {
    headerText: 'Upcoming Appointments until Next Friday',
    texts: ['Heres quick access to upcoming appointments until 7 days','More details available in appointments section.'],
    lists: ['Appointment number', 'Patient name', 'Doctor', 'Session'],
    buttonLable: 'Show all appointments'
  },
  {
    headerText: 'Upcoming Sessions until Next Friday',
    texts: ['Heres quick access of upcoming sessions that scheduled until 7 days', 'Add, remove and many features available in schedule section'],
    lists: ['Session title', 'Doctor', 'Scedule Date and Time','Status'],
    buttonLable: 'Show all sessiona'
  }
];


export const boxListData = [
  {text: 'Doctors', icon: MdDifference },
  { text: 'Patients', icon: MdWheelchairPickup },
  { text: 'New Booking', icon: MdCheckCircleOutline },
  { text: "Today's Session", icon: MdSchedule },
];
