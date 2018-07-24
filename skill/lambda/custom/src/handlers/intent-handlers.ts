import * as Clova from '@line/clova-cek-sdk-nodejs';
import { ClovaExtensionClient } from '../extension/clova-extension-client';
import * as Handlers from '../handlers';

export const intentHandlers = async (responseHelper: Clova.Context) => {
  const clova = new ClovaExtensionClient()
    .addRequestHandlers(
      Handlers.GuideIntentHandler,
      Handlers.HelloWorldIntentHandler,
      Handlers.UnhandledHandler
    ).addErrorHandlers(
      Handlers.ErrorHandler
    );

  await clova.invoke(responseHelper);
};
