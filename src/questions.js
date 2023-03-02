const questions = [
  {
    id: 1,
    question: 'What would you like to learn?',
    answers: [
      {
        id: 1,
        title: 'Enhance your Features',
        description:
          'A course where you will learn different techniques to apply your makeup.',
        url: '/images/makeup.webp',
        type: 'course',
      },
      {
        id: 2,
        title: 'Healthy Living',
        description:
          'In this course you will learn how to have a healthy relationship with food without feeling hunger in the process.',
        url: '/images/food.jpeg',
        type: 'course',
      },
      {
        id: 3,
        title: 'Skin Care',
        description:
          'Learn how to have the perfect routine to protect your skin from the sun, which will also prevent early aging of your skin.',
        url: '/images/skincare.webp',
        type: 'course',
      },
    ],
  },
  {
    id: 2,
    question: 'What is your age?',
    answers: [
      {
        id: 1,
        title: '18-25',
        description: '',
        url: '',
        type: 'age',
      },
      {
        id: 2,
        title: '26-35',
        description: '',
        url: '',
        type: 'age',
      },
      {
        id: 3,
        title: '36-45',
        description: '',
        url: '',
        type: 'age',
      },
      {
        id: 4,
        title: '46+',
        description: '',
        url: '',
        type: 'age',
      },
    ],
  },
];

export default questions;
