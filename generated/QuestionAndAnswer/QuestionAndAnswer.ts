// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class QuestionAnswered extends ethereum.Event {
  get params(): QuestionAnswered__Params {
    return new QuestionAnswered__Params(this);
  }
}

export class QuestionAnswered__Params {
  _event: QuestionAnswered;

  constructor(event: QuestionAnswered) {
    this._event = event;
  }

  get questioner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get answerer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get questionId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get bounty(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get date(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get answer(): string {
    return this._event.parameters[5].value.toString();
  }
}

export class QuestionAsked extends ethereum.Event {
  get params(): QuestionAsked__Params {
    return new QuestionAsked__Params(this);
  }
}

export class QuestionAsked__Params {
  _event: QuestionAsked;

  constructor(event: QuestionAsked) {
    this._event = event;
  }

  get questioner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get answerer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get questionId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get bounty(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get date(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get question(): string {
    return this._event.parameters[5].value.toString();
  }

  get expiryDate(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class QuestionCanceled extends ethereum.Event {
  get params(): QuestionCanceled__Params {
    return new QuestionCanceled__Params(this);
  }
}

export class QuestionCanceled__Params {
  _event: QuestionCanceled;

  constructor(event: QuestionCanceled) {
    this._event = event;
  }

  get questioner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get answerer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get questionId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get date(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get withdrawalBy(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class QuestionAndAnswer__answererToSettingsResult {
  value0: boolean;
  value1: BigInt;
  value2: BigInt;
  value3: string;

  constructor(value0: boolean, value1: BigInt, value2: BigInt, value3: string) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    return map;
  }

  getPopulated(): boolean {
    return this.value0;
  }

  getPriceMinimum(): BigInt {
    return this.value1;
  }

  getWithdrawableAmount(): BigInt {
    return this.value2;
  }

  getInterests(): string {
    return this.value3;
  }
}

export class QuestionAndAnswer__getQuestionerToAnswererToQAsResult {
  value0: string;
  value1: string;
  value2: boolean;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: string,
    value1: string,
    value2: boolean,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getValue0(): string {
    return this.value0;
  }

  getValue1(): string {
    return this.value1;
  }

  getValue2(): boolean {
    return this.value2;
  }

  getValue3(): BigInt {
    return this.value3;
  }

  getValue4(): BigInt {
    return this.value4;
  }

  getValue5(): BigInt {
    return this.value5;
  }
}

export class QuestionAndAnswer extends ethereum.SmartContract {
  static bind(address: Address): QuestionAndAnswer {
    return new QuestionAndAnswer("QuestionAndAnswer", address);
  }

  answererToSettings(
    param0: Address
  ): QuestionAndAnswer__answererToSettingsResult {
    let result = super.call(
      "answererToSettings",
      "answererToSettings(address):(bool,uint256,uint256,string)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new QuestionAndAnswer__answererToSettingsResult(
      result[0].toBoolean(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toString()
    );
  }

  try_answererToSettings(
    param0: Address
  ): ethereum.CallResult<QuestionAndAnswer__answererToSettingsResult> {
    let result = super.tryCall(
      "answererToSettings",
      "answererToSettings(address):(bool,uint256,uint256,string)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new QuestionAndAnswer__answererToSettingsResult(
        value[0].toBoolean(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toString()
      )
    );
  }

  getQuestionerToAnswererToQAs(
    questioner: Address,
    answerer: Address,
    index: BigInt
  ): QuestionAndAnswer__getQuestionerToAnswererToQAsResult {
    let result = super.call(
      "getQuestionerToAnswererToQAs",
      "getQuestionerToAnswererToQAs(address,address,uint256):(string,string,bool,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(questioner),
        ethereum.Value.fromAddress(answerer),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return new QuestionAndAnswer__getQuestionerToAnswererToQAsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toBoolean(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  try_getQuestionerToAnswererToQAs(
    questioner: Address,
    answerer: Address,
    index: BigInt
  ): ethereum.CallResult<
    QuestionAndAnswer__getQuestionerToAnswererToQAsResult
  > {
    let result = super.tryCall(
      "getQuestionerToAnswererToQAs",
      "getQuestionerToAnswererToQAs(address,address,uint256):(string,string,bool,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(questioner),
        ethereum.Value.fromAddress(answerer),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new QuestionAndAnswer__getQuestionerToAnswererToQAsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toBoolean(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get USDCAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AnswerQuestionCall extends ethereum.Call {
  get inputs(): AnswerQuestionCall__Inputs {
    return new AnswerQuestionCall__Inputs(this);
  }

  get outputs(): AnswerQuestionCall__Outputs {
    return new AnswerQuestionCall__Outputs(this);
  }
}

export class AnswerQuestionCall__Inputs {
  _call: AnswerQuestionCall;

  constructor(call: AnswerQuestionCall) {
    this._call = call;
  }

  get questioner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get questionId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get answer(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class AnswerQuestionCall__Outputs {
  _call: AnswerQuestionCall;

  constructor(call: AnswerQuestionCall) {
    this._call = call;
  }
}

export class AnswererWithdrawCall extends ethereum.Call {
  get inputs(): AnswererWithdrawCall__Inputs {
    return new AnswererWithdrawCall__Inputs(this);
  }

  get outputs(): AnswererWithdrawCall__Outputs {
    return new AnswererWithdrawCall__Outputs(this);
  }
}

export class AnswererWithdrawCall__Inputs {
  _call: AnswererWithdrawCall;

  constructor(call: AnswererWithdrawCall) {
    this._call = call;
  }
}

export class AnswererWithdrawCall__Outputs {
  _call: AnswererWithdrawCall;

  constructor(call: AnswererWithdrawCall) {
    this._call = call;
  }
}

export class AskQuestionCall extends ethereum.Call {
  get inputs(): AskQuestionCall__Inputs {
    return new AskQuestionCall__Inputs(this);
  }

  get outputs(): AskQuestionCall__Outputs {
    return new AskQuestionCall__Outputs(this);
  }
}

export class AskQuestionCall__Inputs {
  _call: AskQuestionCall;

  constructor(call: AskQuestionCall) {
    this._call = call;
  }

  get question(): string {
    return this._call.inputValues[0].value.toString();
  }

  get answerer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get bounty(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get expiryDate(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class AskQuestionCall__Outputs {
  _call: AskQuestionCall;

  constructor(call: AskQuestionCall) {
    this._call = call;
  }
}

export class CancelQuestionCall extends ethereum.Call {
  get inputs(): CancelQuestionCall__Inputs {
    return new CancelQuestionCall__Inputs(this);
  }

  get outputs(): CancelQuestionCall__Outputs {
    return new CancelQuestionCall__Outputs(this);
  }
}

export class CancelQuestionCall__Inputs {
  _call: CancelQuestionCall;

  constructor(call: CancelQuestionCall) {
    this._call = call;
  }

  get answerer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get questionId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelQuestionCall__Outputs {
  _call: CancelQuestionCall;

  constructor(call: CancelQuestionCall) {
    this._call = call;
  }
}

export class SetAnswererSettingsCall extends ethereum.Call {
  get inputs(): SetAnswererSettingsCall__Inputs {
    return new SetAnswererSettingsCall__Inputs(this);
  }

  get outputs(): SetAnswererSettingsCall__Outputs {
    return new SetAnswererSettingsCall__Outputs(this);
  }
}

export class SetAnswererSettingsCall__Inputs {
  _call: SetAnswererSettingsCall;

  constructor(call: SetAnswererSettingsCall) {
    this._call = call;
  }

  get priceMinimum(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get interests(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetAnswererSettingsCall__Outputs {
  _call: SetAnswererSettingsCall;

  constructor(call: SetAnswererSettingsCall) {
    this._call = call;
  }
}
