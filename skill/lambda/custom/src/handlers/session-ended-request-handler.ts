import * as Clova from '@line/clova-cek-sdk-nodejs';
import { RequestHandler } from '../extension/clova-extension-client';

/**
 * セッション終了リクエストハンドラ
 */
export const SessionEndedRequestHandler: RequestHandler = {
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
    // レスポンス設定
    handlerInput.endSession();
  }
};
