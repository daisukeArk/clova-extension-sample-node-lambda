import * as Clova from '@line/clova-cek-sdk-nodejs';
import * as Handlers from '../handlers';
import { ClovaSkill } from '../helpers/clova-skill';

export const intentHandlers = async (responseHelper: Clova.Context) => {
  const clova = new ClovaSkill()
    .addRequestHandlers(
      Handlers.GuideIntentHandler,
      Handlers.HelloWorldIntentHandler,
      Handlers.UnhandledHandler
    ).addErrorHandlers(
      Handlers.ErrorHandler
    );

  await clova.invoke(responseHelper);
};
