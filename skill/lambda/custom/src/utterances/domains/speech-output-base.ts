/**
 * 発話基底インタフェース
 */
export interface ISpeechOutputBase {
  /**
   * 初回の発話
   */
  speech: any;

  /**
   * 追加の発話
   */
  repromptSpeech?: any;
}
