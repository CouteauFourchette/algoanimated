import Card from './card';
import BubbleSortAnimation from './bubble_sort_animation';
import QuickSortAnimation from './quick_sort_animation';

document.addEventListener('DOMContentLoaded', () => {
  const bubbleSortButton = document.querySelector('.startBubblesort');
  const bubbleSortCanvas = document.getElementById('bubblesortCanvas');
  bubbleSortCanvas.height = 100;
  bubbleSortCanvas.width = 380;
  const bubbleSortctx = bubbleSortCanvas.getContext('2d');
  const cards = Card.generateCards(20);
  const bubbleAnim = new BubbleSortAnimation(bubbleSortCanvas, bubbleSortctx, cards);
  bubbleSortButton.addEventListener('click', () => {
    bubbleAnim.bubbleSort();
  });
  const bubbleQuickSortButton = document.querySelector('.shuffleBubblesort');
  bubbleQuickSortButton.addEventListener('click', () => {
    bubbleAnim.cards = Card.generateCards(20);
    bubbleAnim.render();
  });

  const quickSortButton = document.querySelector('.startQuicksort');
  const quickSortCanvas = document.getElementById('quicksortCanvas');
  quickSortCanvas.height = 100;
  quickSortCanvas.width = 380;
  const quickSortctx = quickSortCanvas.getContext('2d');
  const quickCards = Card.generateCards(20);
  const quickAnim = new QuickSortAnimation(quickSortCanvas, quickSortctx, quickCards);
  quickSortButton.addEventListener('click', () => {
    quickAnim.quickSort(0, quickCards.length - 1);
  });
  const shuffleQuickSortButton = document.querySelector('.shuffleQuicksort');
  shuffleQuickSortButton.addEventListener('click', () => {
    quickAnim.cards = Card.generateCards(20);
    quickAnim.render();
  });
});

