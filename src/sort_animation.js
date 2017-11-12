class SortAnimation {
  constructor(canvas, ctx, cards) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.cards = cards;
  }

  swapCard(i, j) {
    this.cards[i].nextPosition = j;
    this.cards[j].nextPosition = i;
    const swap = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = swap;
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
    this.ctx.fillStyle = 'rgb(99,138,127)';
    this.cards.forEach((card) => {
      card.render(this.ctx);
    });
  }
}

export default SortAnimation;
