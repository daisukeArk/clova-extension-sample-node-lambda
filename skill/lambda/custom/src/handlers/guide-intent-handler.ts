import * as Clova from '@line/clova-cek-sdk-nodejs';
import { RequestHandler } from '../extension/clova-extension-client';
import { createUtterance } from '../factories/utterance-factory';
import { LoggerFactory } from '../helpers/logger-factory';
import { GuideUtterance as Utterance } from '../utterances/guide-utterance';

/**
 * ガイド インテントハンドラ
 */
export const GuideIntentHandler: RequestHandler = {
  /**
   * 実行判定
   * @param handlerInput ハンドラ
   */
  canHandle(handlerInput: Clova.Context) {
    return (
      handlerInput.getIntentName() === 'Clova.GuideIntent'
    );
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
