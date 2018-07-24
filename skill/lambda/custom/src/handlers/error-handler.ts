import * as Clova from '@line/clova-cek-sdk-nodejs';
import * as Util from 'util';
import { IErrorHandler } from '../extension/clova-extension-client';
import { createUtterance } from '../factories/utterance-factory';
import { LoggerFactory } from '../helpers/logger-factory';
import { ErrorUtterance as Utterance } from '../utterances/error-utterance';

/**
 * エラーハンドラ
 */
export const ErrorHandler: IErrorHandler = {
  /**
   * 実行判定
   * @param handlerInput ハンドラ
   * @param error エラー
   */
  canHandle(handlerInput: Clova.Context, error: Error) {
    return true;
  },
  /**
   * ハンドラ実行
   * @param handlerInput ハンドラ
   * @param error エラー
   */
  handle(handlerInput: Clova.Context, error: Error) {
    // 発話取得
    const speechOutput = createUtterance(Utterance).respond();

    // ログ出力
    LoggerFactory.instance.error(String(error.stack));

    // レスポンス設定
    handlerInput
      .setSimpleSpeech(Clova.SpeechBuilder.createSpeechText(speechOutput.speech))
      .setSimpleSpeech(Clova.SpeechBuilder.createSpeechText(speechOutput.repromptSpeech), true);
  }
};
