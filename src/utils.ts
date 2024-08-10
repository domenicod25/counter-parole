export function analyzeText(text: string) {
    const words = text.match(/\b\w+\b/g) || [];
    const letters = text.match(/[a-zA-Z]/g) || [];
    const spaces = text.match(/\s/g) || [];

    const wordCount = words.length;
    const letterCount = letters.length;
    const spaceCount = spaces.length;

    const wordFrequency: { [key: string]: number } = {};
    words.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    const repeatedWords = Object.entries(wordFrequency)
        .filter(([, count]) => count > 10)
        .map(([word, count]) => ({ word, count }));

    return { wordCount, letterCount, spaceCount, repeatedWords };
}
