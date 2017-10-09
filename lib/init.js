let control = require('electron').remote;

if (!String.format) {
    /**
     *
     * @param {string} format
     * @return {*|void|XML|string}
     */
    String.format = function(format) {
        let args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] !== 'undefined' ? args[number] : match;
        });
    };
}

let timeout;

document.onmousemove = function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        let win = remote.getCurrentWindow();
        win.close();
    }, 30 * 60 * 1000) //Close app on 30 minutes for inactivity
};