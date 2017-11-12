import SortAnimation from './sort_animation';

class QuickSortAnimation extends SortAnimation {
  partition(low, high) {
    const pivot = this.cards[high];
    let i = low - 1;
    for (let j = low; j < high; j += 1) {
      if (this.cards[j].height < pivot.height) {
        i += 1;
        this.swapCard(i, j);
      }
    }
    this.swapCard(i + 1, high);
    return (i + 1);
  }

  quickSort(low, high) {
    if (low < high) {
      window.requestAnimationFrame(() => {
        const pivotPos = this.partition(low, high);
        this.animate(() => {
          this.quickSort(low, pivotPos - 1);
          this.quickSort(pivotPos + 1, high);
        }, pivotPos);
      });
    } else {
      console.log('hi');
      this.render();
    }
  }
}

export default QuickSortAnimation;
