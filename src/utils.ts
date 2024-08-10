
interface AnalysisResult {
    wordCount: number;
    letterCount: number;
    spaceCount: number;
    repeatedWords: { [key: string]: number }; // Indice stringa con valore numerico
}

export function analyzeText(text: string): AnalysisResult {
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

    const repeatedWords: { [key: string]: number } = {};
    Object.entries(wordFrequency).forEach(([word, count]) => {
        if (count > 10) {
            repeatedWords[word] = count;
        }
    });

    return { wordCount, letterCount, spaceCount, repeatedWords };
}

