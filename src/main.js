import Card from './card';

const canvas = document.getElementById('quicksortCanvas');
canvas.height = 100;
canvas.width = 600;
const ctx = canvas.getContext('2d');
const cards = Card.generateCards(50);

cards.forEach((card) => {
  card.render(ctx, canvas.height);
});
