
var Quotes = [
    {
        quote:'Be yourself; everyone else is already taken.',
        auther:'Oscar Wilde'
    },
    {
        quote:'So many books, so little time.',
        auther:' Frank Zappa'
    },
    {
        quote:'A room without books is like a body without a soul.',
        auther:'Marcus Tullius Cicero'
    },
    {
        quote:'ou only live once, but if you do it right, once is enough.',
        auther:'Mae West'
    },
    {
        quote:'Be the change that you wish to see in the world.',
        auther:'Mahatma Gandhi'
    },
    {
        quote:'We accept the love we think we deserve.',
        auther:'Stephen Chbosky'
    },
];

document.getElementById('btn').addEventListener('click' , function(){
    
    event.preventDefault();

    var ranQuote =  Quotes[Math.floor (Math.random () * Quotes.length )];

    document.getElementById('ranQuote').innerHTML=ranQuote.quote;

    document.getElementById('ranAuthor').innerHTML=ranQuote.auther;
})
