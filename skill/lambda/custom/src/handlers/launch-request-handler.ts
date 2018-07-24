import * as Clova from '@line/clova-cek-sdk-nodejs';
import { RequestHandler } from '../extension/clova-extension-client';
import { createUtterance } from '../factories/utterance-factory';
import { LaunchRequestUtterance as Utterance } from '../utterances/launch-request-utterance';

/**
 * 起動リクエストハンドラ
 */
export const LaunchRequestHandler: RequestHandler = {
  /**
   * 実行判定
   * @param handlerInput ハンドラ
   */
  canHandle(handlerInput: Clova.Context) {
    return true;
  },
  /**
   * ハンドラ実行
   * @param handlerInput ハンドラ
   */
  handle(handlerInput: Clova.Context) {
    // 発話取得
    const speechOutput = createUtterance(Utterance).respond();

    // レスポンス設定
    handlerInput
      .setSimpleSpeech(Clova.SpeechBuilder.createSpeechText(speechOutput.speech))
      .setSimpleSpeech(Clova.SpeechBuilder.createSpeechText(speechOutput.repromptSpeech), true);
  }
};
