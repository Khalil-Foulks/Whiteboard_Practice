var wordBreak = function(s, wordDict) {
    // put each word in a Set
    const words = new Set(wordDict);
    // put the length of each word in a Set
    const wordLens = new Set(wordDict.map((word) => word.length))
    // Set containing idx for start of s String slice
    const starts = new Set([0])
    // using cur num in starts Set slice s string and check if sliced word is in words Set
    for (let start of starts) {
        for (let len of wordLens) {
            if (words.has(s.slice(start, start + len))) {
                // adds next slices starting point to starts
                starts.add(start + len)
            }
        }
    }
    // checks if starts contains len of s meaning all all words slices are in s
    return starts.has(s.length)
};

