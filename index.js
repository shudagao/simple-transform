import { Transform } from './transform';

const container = document.getElementById('zoom-container');
const transformInstace = new Transform([0, 0]);
container.addEventListener('touchstart', (e) => {
    // 问题出在这 要找到真正的中心点
    console.log('start');
});
container.addEventListener('touchmove', (e) => {
    console.log('move');
});
container.addEventListener('touchend', (e) => {
    console.log('end');
});
