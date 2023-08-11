const wordlist = [
    {
        word: "search"
    },
    {
        word: "server"
    },
    {
        word: "rocket"
    },
    {
        word: "crypto"
    },
    {
        word: "google"
    },
    {
        word: "python"
    }
]

function randomWord(){
    let randomWrd = wordList[Math.floor.random() * wordList.length];
    console.log(randomWrd);
}
randomWord();