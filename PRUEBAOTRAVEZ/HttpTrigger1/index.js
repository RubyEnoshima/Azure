var Connection = require('tedious').Connection;
var Request = require('tedious').Request
var TYPES = require('tedious').TYPES;

module.exports = function(context, myTimer) {

    var _currentData = {};

    var config = {
        userName: 'vilaruben70',
        password: 'pokemon1A',
        server: 'cloud04server.mysql.database.azure.com',
        options: { encrypt: true, database: 'idiomas' }
    };

    context.log("jlljljljljlj")
    var connection = new Connection(config);
    connection.on('connect', function(err) {
        context.log("Connected");
        getPerformance();
    });

    function getPerformance() {

        request = new Request("SELECT 'Best' = MIN(FivekmTime), 'Average' = AVG(FivekmTime) FROM RunnerPerformance;", function(err) {
            if (err) {
                context.log(err);
            }
        });



        request.on('row', function(columns) {
            _currentData.Best = columns[0].value;
            _currentData.Average = columns[1].value;;
            context.log(_currentData);
        });

        request.on('requestCompleted', function() {
            saveStatistic();
        });
        connection.execSql(request);
    }


    function saveStatistic() {

        request = new Request("UPDATE Statistic SET BestTime=@best, AverageTime=@average;", function(err) {
            if (err) {
                context.log(err);
            }
        });
        request.addParameter('best', TYPES.Int, _currentData.Best);
        request.addParameter('average', TYPES.Int, _currentData.Average);
        request.on('row', function(columns) {
            columns.forEach(function(column) {
                if (column.value === null) {
                    context.log('NULL');
                } else {
                    context.log("Statistic Updated.");
                }
            });
        });

        connection.execSql(request);
    }

    context.res = {
        body: "aaaa"
    }

    context.done();
};