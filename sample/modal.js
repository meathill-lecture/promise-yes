/**
 * Created by Meathill on 2017/4/20.
 */

// 弹出窗体
let confirm = popupManager.confirm('您确定么？');
confirm.promise
  .then(() => {
    // do confirm staff
  })
  .catch(() => {
    // do cancel staff
  });

// 窗体的构造函数
class Confirm {
  constructor() {
    this.promise = new Promise( (resolve, reject) => {
      this.confirmButton.onClick = resolve;
      this.cancelBUtton.onClick = reject;
    });
  }
}