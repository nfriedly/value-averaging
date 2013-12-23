
function AccountCtl($scope, $http, $log, $filter) {
    "use strict";

    var timezoneOffset = 'UTC-' + (new Date().getTimezoneOffset()/60) + '00';
    $log.debug('timezone offset is ', timezoneOffset);
    function localDate(str) {
        return new Date(str + ' ' + timezoneOffset);
    }

    function getCurrentPrice(symbol) {
        var urlBase = 'http://query.yahooapis.com/v1/public/yql?format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=JSON_CALLBACK&q=';
        var query = 'select PreviousClose, Change, PercentChange, Name from yahoo.finance.quotes where symbol in ("' + symbol + '")'
        var url = urlBase + encodeURIComponent(query);
        // names get truncated with the above query. This one will get FundFamily=Vanguard and Category=Target Date 2036-2040
        // select FundFamily, Category from yahoo.finance.stocks where symbol="vforx"
        
        $http.jsonp(url).
            success(function(data, status, headers, config) {
                try {
                    $scope.currentPrice = parseFloat(data.query.results.quote.PreviousClose);
                    if (!$scope.currentPrice) {
                        throw 'Invalid fund price';
                    }
                    // todo: handle situations where the user already started typing in a price...
                    $scope.purchasePrice = $scope.currentPrice;
                } catch (ex) {
                    $log.error('Yahoo quote data not in expected format:', data);
                }
            }).
            error(function(data, status, headers, config) {
                $log.error('Error fetching feed:', data);
            });
    }

    $scope.purchases = [
        {date: localDate('12/20/2013'), price: 28.07, shares: 15},
        {date: localDate('07/11/2013'), price: 28.01, shares: 34}
    ];
    
    $scope.symbol = $scope.symbol || 'VFORX';
    $scope.desiredPeriodIncrease = $scope.desiredPeriodIncrease || 100;
    $scope.purchaseDate = $filter('date')(new Date(), 'yyyy-MM-dd'); // this needs to be a string to play nice with browsers that don't support the date input type

    
    $scope.addPurchase = function() {
        var purchase = {
            date: localDate($scope.purchaseDate),
            price: $scope.purchasePrice,
            shares: $scope.purchaseShares
        };
        $scope.purchases.push(purchase);
        var nextDate = new Date(purchase.date); // new date object, same time
        nextDate.setMonth(nextDate.getMonth() + 1); // now change the time by a month on the new Date, leaving the old one intact
        $scope.purchaseDate =  $filter('date')(new Date(), 'YYYY-MM-dd'); // and, back to a string
        $scope.purchaseDate.setMonth($scope.purchaseDate.getMonth() + 1);
        $scope.purchaseShares = 0;
    };
    
    getCurrentPrice($scope.symbol);

}
