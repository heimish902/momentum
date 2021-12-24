const quotes = [
  {
    quote:
      'Laziness is nothing more than the habit of resting before you get tired.',
    author: 'Jules Renard',
  },
  {
    quote:
      'The revolution is not an apple that falls when it is ripe. You have to make it fall.',
    author: 'Ernesto "Che" Guevara',
  },
  {
    quote:
      'Our greatest glory is not in never falling, but in rising every time we fall.',
    author: 'Confucius',
  },
  {
    quote:
      'Try not to become a man of success but rather try to become a man of value.',
    author: 'Albert Einstein',
  },
  {
    quote: 'Genius is nothing but a great capacity for patience.',
    author: 'Buffon',
  },
  {
    quote: 'No great genius has ever existed without some touch of madness.',
    author: 'Aristotle',
  },
  {
    quote: 'Respect yourself and others will respect you.',
    author: 'Confucius',
  },
  {
    quote: 'Whoever ceases to be a student has never been a student.',
    author: 'George Iles',
  },
  {
    quote: 'Wish not so much to live long as to live well.',
    author: 'Benjamin Franklin',
  },
  {
    quote: "Life is something that happens when you can't get to sleep.",
    author: 'Fran Lebowitz',
  },
];

const quote = document.querySelector('.quote span:first-child');
const author = document.querySelector('.quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
