export const languageStrings: ILanguageStrings = {
  ja: {
    'WELCOME': 'ようこそ',
    'HELLO_WORLD': 'こんにちは、<%= customSlot %>',
    'GUIDE': 'こんにちは、東京都。など挨拶のあとに都道府県名を言ってください。',
    'UNHANDLED_MESSAGE': 'ごめんなさい、よく聞きとれませんでした。',
    'ANYTHING_ELSE': '他に何かご用ですか？',
    'RETRY': 'もう一度、言ってください。'
  }
};

export interface ILanguageStrings {
  ja: {
    'WELCOME': string;
    'HELLO_WORLD': string;
    'GUIDE': string;
    'UNHANDLED_MESSAGE': string;
    'ANYTHING_ELSE': string;
    'RETRY': string;
  };
}
