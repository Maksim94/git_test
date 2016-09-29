function StatisticsView () {
    var el = document.createElement('div');

    mediator.sub('statistics request', refresh);

    this.render = function () {
        el.innerHTML = tpl.addStatistics;
        return el;
    };

    function refresh (color) {
        el.innerHTML = tpl.replacer(el.innerHTML, color);
    }
}