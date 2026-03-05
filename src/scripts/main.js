'use strict';

// eslint-disable-next-line no-shadow
document.addEventListener('click', (event) => {
  const coordX = event.clientX;
  const coordY = event.clientY;
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const leftBorderField = wall.offsetLeft + wall.clientLeft + spider.width / 2;
  const topBorderField = wall.offsetTop + wall.clientTop + spider.height / 2;
  const fieldWidth = wall.clientWidth - spider.width;
  const fieldHeight = wall.clientHeight - spider.height;

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
