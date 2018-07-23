import { IGuideSpeechOutput as ISpeechOutput } from './domains/guide-speech-output';
import { ILanguageStrings } from './language-strings';
import { UtteranceBase } from './utterance-base';

/**
 * ガイド 発話クラス
 */
export class GuideUtterance extends UtteranceBase {
  /**
   * コンストラクタ
   * @param languageStrings 発話セット
   */
  constructor(languageStrings: ILanguageStrings) {
    super(languageStrings);
  }

  /**
   * 発話内容取得
   * @returns 発話内容
   */
  public respond(): ISpeechOutput {
    return {
      speech: this.languageStrings.ja.GUIDE,
      repromptSpeech: this.languageStrings.ja.GUIDE
    };
  }
}
