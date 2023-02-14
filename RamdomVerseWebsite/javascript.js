var verse=[
    'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. - ISAIAH 41:10 (NIV)',
    'Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go. -JOSHUA 1:9',
    'For I, the LORD your God, hold your right hand; it is I who say to you, Fear not, I am the one who helps you. -ISAIAH 41:13',
    'When I thought, "My foot slips," Your steadfast love, O LORD, helped me up. When the cares of my heart are many, Your consolations cheer my soul.-PSALM 94:18-19'
]

function newVerse(){
    var randomVerse=Math.floor(Math.random()*(verse.length));
    document.getElementById('verseDisplay').innerHTML =verse[randomVerse];
}