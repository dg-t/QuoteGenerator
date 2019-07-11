// create quotes with different fragments
var createQuote;
var Quotes = {
    init: function (quoteStart, quoteMiddle, quoteEnd) {
        this.quoteStart = quoteStart;
        this.quoteMiddle = quoteMiddle;
        this.quoteEnd = quoteEnd;
    }, 
    // choose quote randomly
    describe: function () {
        var start = Math.floor(Math.random() * (this.quoteStart.length));
        var middle = Math.floor(Math.random() * (this.quoteMiddle.length));
        var end = Math.floor(Math.random() * (this.quoteEnd.length));

        //join random quote together, and return full random quote
        createQuote = (this.quoteStart[start] + " " + this.quoteMiddle[middle] + 
        " " + this.quoteEnd[end]);
        return createQuote;
    }
};


// fragments for wellness quotes
var wellness = Object.create(Quotes);
wellness.init(
    ["I am always", "looking for", "good things"],
    ["Sometimes", "one moment", "change the world"],
    ["Remember", "is possible", "beleive in change"]
    );

    //fragments for positivism quotes
var positivism = Object.create(Quotes);
positivism.init(
    ["Be positive", "always", "more opportunity"],
    ["Think happyly", "if you want", "Keep it up"],
    ["Start trying", "beleving in", "possibilities"]
    );



       