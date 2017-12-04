class Card {
  constructor(position, height) {
    this.position = position;
    this.nextPosition = position;
    this.height = height;
    this.selected = false;
    this.moving = false;
    this.y = 0;
    this.x = 0;
  }
  render(ctx, canvasHeight) {
    ctx.save();
    if (this.selected) {
      ctx.fillStyle = 'rgb(146, 30, 84)';
    }
    ctx.fillRect(40 + (this.position * 15) + this.x, canvasHeight - this.height, 10, this.height);
    ctx.restore();
  }

  moveToPosition() {
    if (((this.position * 15) + this.x) > (this.nextPosition * 15)) {
      this.x -= 1;
      this.moving = true;
    } else if (((this.position * 15) + this.x) < (this.nextPosition * 15)) {
      this.x += 1;
      this.moving = true;
    } else {
      this.position = this.nextPosition;
      this.x = 0;
      this.moving = false;
    }
  }

  static generateCards(numberOfCards = 20) {
    const cards = [];
    for (let i = 0; i <= numberOfCards; i += 1) {
      const height = Math.floor((Math.random() * 60) + 10);
      const card = new Card(i, height);
      cards.push(card);
    }
    return cards;
  }
}

export default Card;
