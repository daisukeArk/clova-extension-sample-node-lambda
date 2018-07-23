import * as Clova from '@line/clova-cek-sdk-nodejs';
import { createUtterance } from '../factories/utterance-factory';
import { RequestHandler } from '../helpers/clova-skill';
import { UnhandledUtterance as Utterance } from '../utterances/unhandled-utterance';

/**
 * 未ハンドラ インテントハンドラ
 */
export const UnhandledHandler: RequestHandler = {
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

    // レスポンス
    handlerInput
      .setSimpleSpeech(Clova.SpeechBuilder.createSpeechText(speechOutput.speech))
      .setSimpleSpeech(Clova.SpeechBuilder.createSpeechText(speechOutput.repromptSpeech), true);
  }
};
