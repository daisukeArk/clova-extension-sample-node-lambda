import * as Clova from '@line/clova-cek-sdk-nodejs';
import * as Lambda from 'aws-lambda';
import * as Util from 'util';
import { ClovaExtensionLambda } from './extension/clova-extension-lambda';
import { LoggerFactory } from './helpers/logger-factory';

/**
 * エントリポイント
 * @param event イベントソース
 * @param context コンテキスト
 * @param callback コールバック
 */
export const handler = async (
  event: Lambda.APIGatewayEvent,
  context: Lambda.Context,
  callback: Lambda.APIGatewayProxyCallback
) => {
  // トレースログ
  LoggerFactory.instance.trace(`event: ${Util.inspect(event, { depth: null })}`);

  // ハンドラ作成(Lambda用)
  const extensionHandler = new ClovaExtensionLambda();

  // レスポンス本文
  let responseBody: Clova.Clova.ResponseBody | null = null;

  try {
    // ハンドラ呼出
    responseBody = await extensionHandler.lambda(String(event.body));
  } catch (error) {
    LoggerFactory.instance.trace(error.message);
  }

  // レスポンス
  let response: Lambda.APIGatewayProxyResult;

  if (responseBody !== null) {
    // トレースログ
    LoggerFactory.instance.trace(Util.inspect(responseBody, { depth: null }));

    response = {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(responseBody)
    };
  } else {
    response = {
      statusCode: 500,
      body: 'Internal Server Error'
    };
  }

  // コールバック
  callback(null, response);
};
