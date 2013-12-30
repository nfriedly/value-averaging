Value Averaging Tracker & Helper
================================

[Value Averaging](https://en.wikipedia.org/wiki/Value_averaging) is an investment strategy that is a straightforward, formalized method of the old addage "buy low, sell high". 

To describe Value Averaging, it's helpful to first describe the method that it builds from, **[Dollar Cost Averaging](https://en.wikipedia.org/wiki/Dollar_cost_averaging)**. In DCA, you decide where your investment is going, and then invest a fixed amount of money at regular intervals, for example $100 each month into a mutual fund. When the market is low, your $100 buys you more shares. When it's high, you only get a few shares. At the end of the year, the average price you paid will be lower than the average price of the fund throughout the year because you buought more shares when it was lower and fewer when it was higher.

For those who cannot predict the future, Dollar Cost Averaging is a very sound investement strategy, especially because it's so easy to automate: take $x out of every paycheck and invest it into fund y.

**Value Averaging** builds on DCA amplifying the market changes: when the market is low, you buy even more shares. When it's high, you buy even fewer shares, possibly none at all. And if you're in an IRA or other tax-advantaged account, you could even sell some shares! 

The formula is fairly simple: instead of deciding what $ amount to invest each month, you decide what $ amount you want your investments to grow buy each month. So, for example, if you want your fund to grow by $100 each month, here's how it might go:

1. You invest $100 the first month. Lets say the price is $10 per share so you buy 10 shares. 
2. Next month, lets say the price is now down to $8 per share. Your 10 shares from last month are now only worth $80. To match your growth rate of $100 per month (and take advantage of the new, lower price) you now invest $120, buying 15 additional shares.
3. On the third month things turn around and the share price is now up to $13! You already own 25 shares which, thanks to the recent market jump, are now worth $325. This is higher than your target of $300 for this month and you didn't even invest anything! Your move here depends on what type of account you're in: 
  * If you have an [IRA](https://en.wikipedia.org/wiki/Individual_retirement_account) or similar "tax advantaged" account, you can sell the extra $25 worth (We'll round that off to 2 shares here to keep the math simple).
  * If this is a regular (taxed) savings account, then you just sit tight and don't buy or sell anything here.

Carry on like this each month - when the price is low, put in more money to meet your target goal. When the price is high, put in less money, or perhaps even sell some. On those months, if you have excess cach sitting around, just put it in savings so you'll have it avaliable on the low months. 

(For myself personally, I have a fixed amount come out of each paycheck and invested into a Money Market Fund automatically. I then use VA to move that money into my retirement Mutual Fund. This gets me most of the VA benefits while still keeping a simple budget.)

To my knowledge, there is no tool that completely automates Value Averaging, so I built this to make it a little easier. 


To Do:
------
* calculate suggested number or shares to purchase
* allow for editing / deletion of history
* Add a warning about floating point math and don't break the IRS rules
* set text in recommendations, one of:
   * You're right on time! Buy x shares for $y
   * You're all good! Come back on {{nextPurchaseDate}}
   * You're late! Buy x shares for $y to catch up.
* Beef up the fund price JSONP
    * add setInterval to update the share price every so often - maybe once every hour or two
    * show the most recent update time
    * add a refresh button
    * Turn off GET caching for the updates
    * consider using $resource - http://docs.angularjs.org/api/ngResource.$resource
    * Show the name of the fund (preferably the full name)
    * look at historical numbers so that the price always matches the givne date
* build some stats on the total number of shares owned, average price paid, income earned so far, etc.
* compare curent results to DCA
* Charts!
* add some style
* Add an intro that encourages value averaging
* add a footnote about vanguard
* maybe add some recommended books - A Random Walk Down Wall Street, something from Boggle, The Intelligent Asset Allocator
* switch to minified JS
    
