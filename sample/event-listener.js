/**
 * Created by Meathill on 2017/6/18.
 */

document.getElementById('start').addEventListener('click', start, false);

function start() {
  // 响应事件，进行相应的操作
}

// jQuery 用 `.on()` 也是事件侦听
$('#start').on('click', start);