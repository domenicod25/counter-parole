import { analyzeText } from '../utils';

describe('Text Analysis', () => {
  const text = "Hello world! Hello, hello. Welcome to the world of programming.";

  test('Conta il numero totale di parole', () => {
    const result = analyzeText(text);
    expect(result.wordCount).toBe(10);
  });

  test('Conta il numero totale di lettere', () => {
    const result = analyzeText(text);
    expect(result.letterCount).toBe(50);
  });

  test('Conta il numero totale di spazi', () => {
    const result = analyzeText(text);
    expect(result.spaceCount).toBe(9);
  });

  test('Trova e conta parole che si ripetono per più di 10 volte', () => {
    const repeatedText = "test ".repeat(11) + "other words";
    const result = analyzeText(repeatedText);
    expect(result.repeatedWords['test']).toBe(11);
  });
});
