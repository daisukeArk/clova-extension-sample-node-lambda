import * as Clova from '@line/clova-cek-sdk-nodejs';
import * as __ from 'underscore';
import { IHelloWorldSpeechOutput as ISpeechOutput } from './domains/hello-world-speech-output';
import { ILanguageStrings } from './language-strings';
import { UtteranceBase } from './utterance-base';

/**
 * こんにちは世界 発話クラス
 */
export class HelloWorldUtterance extends UtteranceBase {
  /**
   * コンストラクタ
   * @param languageStrings 発話セット
   */
  constructor(languageStrings: ILanguageStrings) {
    super(languageStrings);
  }

  /**
   * 発話内容取得
   * @param customSlot 都道府県スロット
   * @returns 発話内容
   */
  public respond(customSlot: Clova.Clova.SlotValue): ISpeechOutput {
    const speechText = __.template(this.languageStrings.ja.HELLO_WORLD)({
      customSlot: customSlot
    });

    return {
      speech: speechText,
      repromptSpeech: this.languageStrings.ja.ANYTHING_ELSE
    };
  }
}
