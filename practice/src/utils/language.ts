export enum Words {
  LOCALE,
  ENGLISH,
  ARABIC,
  GERMAN,
  COUNT,
  INCREMENT,
  DECREMENT,
  RESET,
}

export const language: Record<string, Record<Words, string>> = {
  en: {
    [Words.LOCALE]: "locale",
    [Words.ENGLISH]: "English",
    [Words.ARABIC]: "Arabic",
    [Words.GERMAN]: "German",
    [Words.COUNT]: "count",
    [Words.INCREMENT]: "increment",
    [Words.DECREMENT]: "decrement",
    [Words.RESET]: "reset",
  },
  ar: {
    [Words.LOCALE]: "لغة",
    [Words.ENGLISH]: "إنجليزي",
    [Words.ARABIC]: "عربي",
    [Words.GERMAN]: "ألمانية",
    [Words.COUNT]: "عدد",
    [Words.INCREMENT]: "زيادة",
    [Words.DECREMENT]: "إنقاص",
    [Words.RESET]: "إعادة ضبط",
  },
  de: {
    [Words.LOCALE]: "Gebietsschema",
    [Words.ENGLISH]: "Englisch",
    [Words.ARABIC]: "Arabisch",
    [Words.GERMAN]: "Deutsch",
    [Words.COUNT]: "zählen",
    [Words.INCREMENT]: "Inkrement",
    [Words.DECREMENT]: "dekrementieren",
    [Words.RESET]: "zurücksetzen",
  },
};
