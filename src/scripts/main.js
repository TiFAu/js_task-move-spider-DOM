'use strict';

// eslint-disable-next-line no-shadow
document.addEventListener('click', (event) => {
  const coordX = event.clientX;
  const coordY = event.clientY;
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const field = wall.getBoundingClientRect();

  console.log(field);

  const leftBorderField = field.x + wall.clientLeft + spider.offsetWidth / 2;
  const topBorderField = field.y + wall.clientTop + spider.offsetHeight / 2;
  const fieldWidth = wall.clientWidth - spider.offsetWidth;
  const fieldHeight = wall.clientHeight - spider.offsetHeight;

  if (
    coordX > leftBorderField &&
    coordX < leftBorderField + fieldWidth &&
    coordY > topBorderField &&
    coordY < topBorderField + fieldHeight
  ) {
    spider.style.left = `${coordX - leftBorderField}px`;
    spider.style.top = `${coordY - topBorderField}px`;

    // console.log(spider.style.left, spider.style.top);
  }
});
