import SortAnimation from './sort_animation';

class BubbleSortAnimation extends SortAnimation {
  next(n, isSorted) {
    let sorted = isSorted;
    if (this.cards[n].height < this.cards[n - 1].height) {
      this.swapCard(n, n - 1);
      sorted = false;
    }

    if (n < this.cards.length - 1) {
      window.setTimeout(() => {
        this.animate(() => {
          this.next(n + 1, sorted);
        }, n);
      }, 0);
    } else {
      this.bubbleSort(sorted);
    }
  }
  bubbleSort(isSorted) {
    const sorted = isSorted || false;

    if (!sorted) {
      this.next(1, true);
    } else {
      this.render();
    }
  }
}

export default BubbleSortAnimation;
