var quoteQ = document.getElementById("quote");
var auther = document.getElementById("auther");

var quotes = [{
        'quote': `“Be yourself everyone else is already taken.”`,
        'auther': `-- Oscar Wilde`
    },
    {
        'quote': `“So many books, so little time.”`,
        'auther': `-- Frank Zappa`
    },
    {
        'quote': `“A room without books is like a body without a soul.”`,
        'auther': `-- Marcus Tullius Cicero`
    },
    {
        'quote': `“You only live once, but if you do it right, once is enough.”`,
        'auther': `-- Mae West`
    },
    {
        'quote': `“Be the change that you wish to see in the world.”`,
        'auther': `-- Mahatma Gandhi`
    },
    {
        'quote': `“If you tell the truth, you don't have to remember anything.”`,
        'auther': `-- Mark Twain`
    },
    {
        'quote': `“If you tell the truth, you don't have to remember anything.”`,
        'auther': `-- Mark Twain`
    },
    {
        'quote': `“Life is what happens to us while we are making other plans.”`,
        'auther': `-- Allen Saunders`
    },
]

function showQuote() {
    var random = Math.floor(Math.random() * quotes.length);
    quoteQ.innerHTML = quotes[random].quote;
    auther.innerHTML = quotes[random].auther;

}