class SortAnimation {
  constructor(canvas, ctx, cards) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.cards = cards;
    this.render();
  }

  animate(doneCallback, highlight) {
    let finishedCycle = true;
    if (highlight) {
      this.cards[highlight].selected = true;
    }
    for (let i = 0; i <= this.cards.length - 1; i += 1) {
      this.cards[i].moveToPosition();
      if (this.cards[i].moving === true) {
        finishedCycle = false;
      }
    }
    this.render();
    if (!finishedCycle) {
      window.requestAnimationFrame(() => {
        this.animate(doneCallback, highlight);
      });
    } else {
      setTimeout(() => {
        if (highlight) {
          this.cards[highlight].selected = false;
        }
        if (doneCallback) {
          doneCallback();
        }
      }, 100);
    }
  }

  swapCard(i, j) {
    this.cards[i].nextPosition = j;
    this.cards[j].nextPosition = i;
    const swap = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = swap;
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'rgb(99,138,127)';
    this.cards.forEach((card) => {
      card.render(this.ctx, this.canvas.height);
    });
  }
}

export default SortAnimation;
