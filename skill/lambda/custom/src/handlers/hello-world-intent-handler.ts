import * as Clova from '@line/clova-cek-sdk-nodejs';
import { RequestHandler } from '../extension/clova-extension-client';
import { createUtterance } from '../factories/utterance-factory';
import { HelloWorldUtterance as Utterance } from '../utterances/hello-world-utterance';

/**
 * こんにちは世界 インテントハンドラ
 */
export const HelloWorldIntentHandler: RequestHandler = {
  /**
   * 実行判定
   * @param handlerInput ハンドラ
   */
  canHandle(handlerInput: Clova.Context) {
    return (
      handlerInput.getIntentName() === 'HelloWorldIntent' &&
      handlerInput.getSlot('customSlot') !== null
    );
  },
  /**
   * ハンドラ実行
   * @param handlerInput ハンドラ
   */
  handle(handlerInput: Clova.Context) {
    // スロット収集
    const customSlot = handlerInput.getSlot('customSlot');

    // 発話取得
    const speechOutput = createUtterance(Utterance).respond(customSlot);

    // レスポンス設定
    handlerInput
      .setSimpleSpeech(Clova.SpeechBuilder.createSpeechText(speechOutput.speech))
      .setSimpleSpeech(Clova.SpeechBuilder.createSpeechText(speechOutput.repromptSpeech), true);
  }
};
