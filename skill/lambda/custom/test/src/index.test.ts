import * as Lambda from 'aws-lambda';
import 'mocha';
import { IMock, It, Mock } from 'moq.ts';
import * as Assert from 'power-assert';
import * as Util from 'util';
import { handler } from '../../src/';
import { LoggerFactory } from '../../src/helpers/logger-factory';
import { helloWorldIntentRequest } from '../fixtures/hello-world-intent-request';

describe('index.handler のテスト', () => {
  let eventMock: IMock<Lambda.APIGatewayProxyEvent>;
  let contextMock: IMock<Lambda.Context>;

  /**
   * 前処理
   */
  before(async () => {
    // イベントモック
    eventMock = new Mock<Lambda.APIGatewayProxyEvent>('eventMock')
      .setup((self: Lambda.APIGatewayProxyEvent) => self.body)
      .returns(JSON.stringify(helloWorldIntentRequest));
    // コンテキストモック
    contextMock = new Mock<Lambda.Context>('contextMock');
  });

  // 検証
  it('正常終了すること', async () => {
    try {
      // 実行
      await handler(
        eventMock.object(),
        contextMock.object(),
        (error?: string | Error | null | undefined, result?: Lambda.APIGatewayProxyResult | undefined) => {
          if (error) {
            Assert.fail(error);
          } else {
            if (result) {
              // トレースログ
              LoggerFactory.instance.info(Util.inspect(JSON.parse(result.body), { depth: null }));
            }

            Assert.ok('正常終了');
          }
        }
      );
    } catch (error) {
      Assert.fail(error);
    }
  });
});
