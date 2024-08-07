/**
 * 开启网页全屏
 * @author 陈随易 <https://chensuiyi.me>
 * @category 浏览器
 * @param {String} element 元素
 */
export function yd_browser_openFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
    }
}
