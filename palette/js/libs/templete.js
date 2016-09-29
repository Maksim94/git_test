var tpl = {};

tpl.addStatistics =
    `<h2>Statistics</h2>
        <p>red: 0</p>
        <p>green: 0</p>
        <p>blue: 0</p>`;

tpl.replacer = function (statistics, obj) {
    statistics = statistics.replace(obj.color + ': ' + (obj.counter - 1), obj.color + ': ' + obj.counter);

    return statistics;
};