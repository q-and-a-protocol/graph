import { BigInt, Address } from '@graphprotocol/graph-ts';
import {
  QuestionAnswered as QuestionAnsweredEvent,
  QuestionAsked as QuestionAskedEvent,
  QuestionCanceled as QuestionCanceledEvent,
  Withdraw as WithdrawEvent,
  EmergencyWithdraw as EmergencyWithdrawEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from '../generated/QuestionAndAnswer/QuestionAndAnswer';
import {
  QuestionAnswered,
  QuestionAsked,
  QuestionCanceled,
  NewsfeedEvent,
  Withdraw,
  User,
} from '../generated/schema';

export function handleQuestionAnswered(event: QuestionAnsweredEvent): void {
  let questionAnswered = QuestionAnswered.load(
    getIdFromEventParams(event.params.questioner, event.params.answerer, event.params.questionId)
  );
  let newsfeedEvent = NewsfeedEvent.load(
    getIdFromEventParams(event.params.questioner, event.params.answerer, event.params.questionId)
  );
  let userAnswerer = User.load(getIdFromAddress(event.params.answerer));

  if (!questionAnswered) {
    questionAnswered = new QuestionAnswered(
      getIdFromEventParams(event.params.questioner, event.params.answerer, event.params.questionId)
    );
  }
  if (!newsfeedEvent) {
    newsfeedEvent = new NewsfeedEvent(
      getIdFromEventParams(event.params.questioner, event.params.answerer, event.params.questionId)
    );
  }
  if (!userAnswerer) {
    userAnswerer = new User(getIdFromAddress(event.params.answerer));
  }

  questionAnswered.questioner = event.params.questioner;
  newsfeedEvent.questioner = event.params.questioner;

  questionAnswered.answerer = event.params.answerer;
  newsfeedEvent.answerer = event.params.answerer;

  questionAnswered.questionId = event.params.questionId;
  newsfeedEvent.questionId = event.params.questionId;

  questionAnswered.bounty = event.params.bounty;
  newsfeedEvent.bounty = event.params.bounty;

  questionAnswered.date = event.params.date;
  newsfeedEvent.date = event.params.date;

  questionAnswered.answer = event.params.answer;
  newsfeedEvent.answer = event.params.answer;

  newsfeedEvent.answered = true;

  userAnswerer.address = event.params.answerer;
  userAnswerer.hasAnswered = true;
  userAnswerer.lastActivityDate = event.params.date;
  if (!userAnswerer.numberOfQuestionsAnswered) {
    userAnswerer.numberOfQuestionsAnswered = BigInt.fromString('1');
  } else {
    userAnswerer.numberOfQuestionsAnswered = userAnswerer.numberOfQuestionsAnswered!.plus(
      BigInt.fromString('1')
    );
  }

  questionAnswered.save();
  newsfeedEvent.save();
  userAnswerer.save();
}

export function handleQuestionAsked(event: QuestionAskedEvent): void {
  let questionAsked = QuestionAsked.load(
    getIdFromEventParams(event.params.questioner, event.params.answerer, event.params.questionId)
  );
  let newsfeedEvent = NewsfeedEvent.load(
    getIdFromEventParams(event.params.questioner, event.params.answerer, event.params.questionId)
  );
  let userQuestioner = User.load(getIdFromAddress(event.params.questioner));

  if (!questionAsked) {
    questionAsked = new QuestionAsked(
      getIdFromEventParams(event.params.questioner, event.params.answerer, event.params.questionId)
    );
  }
  if (!newsfeedEvent) {
    newsfeedEvent = new NewsfeedEvent(
      getIdFromEventParams(event.params.questioner, event.params.answerer, event.params.questionId)
    );
  }
  if (!userQuestioner) {
    userQuestioner = new User(getIdFromAddress(event.params.questioner));
  }

  questionAsked.questioner = event.params.questioner;
  newsfeedEvent.questioner = event.params.questioner;

  questionAsked.answerer = event.params.answerer;
  newsfeedEvent.answerer = event.params.answerer;

  questionAsked.questionId = event.params.questionId;
  newsfeedEvent.questionId = event.params.questionId;

  questionAsked.bounty = event.params.bounty;
  newsfeedEvent.bounty = event.params.bounty;

  questionAsked.date = event.params.date;
  newsfeedEvent.date = event.params.date;

  questionAsked.question = event.params.question;
  newsfeedEvent.question = event.params.question;

  questionAsked.expiryDate = event.params.expiryDate;
  newsfeedEvent.expiryDate = event.params.expiryDate;

  newsfeedEvent.answered = false;

  newsfeedEvent.expired = false;

  userQuestioner.address = event.params.questioner;
  userQuestioner.hasAsked = true;
  userQuestioner.lastActivityDate = event.params.date;
  if (!userQuestioner.numberOfQuestionsAsked) {
    userQuestioner.numberOfQuestionsAsked = BigInt.fromString('1');
  } else {
    userQuestioner.numberOfQuestionsAsked = userQuestioner.numberOfQuestionsAsked!.plus(
      BigInt.fromString('1')
    );
  }

  questionAsked.save();
  newsfeedEvent.save();
  userQuestioner.save();
}

export function handleQuestionCanceled(event: QuestionCanceledEvent): void {
  let questionCanceled = QuestionCanceled.load(
    getIdFromEventParams(event.params.questioner, event.params.answerer, event.params.questionId)
  );
  let newsfeedEvent = NewsfeedEvent.load(
    getIdFromEventParams(event.params.questioner, event.params.answerer, event.params.questionId)
  );

  if (!questionCanceled) {
    questionCanceled = new QuestionCanceled(
      getIdFromEventParams(event.params.questioner, event.params.answerer, event.params.questionId)
    );
  }
  if (!newsfeedEvent) {
    newsfeedEvent = new NewsfeedEvent(
      getIdFromEventParams(event.params.questioner, event.params.answerer, event.params.questionId)
    );
  }

  questionCanceled.questioner = event.params.questioner;
  questionCanceled.answerer = event.params.answerer;
  questionCanceled.questionId = event.params.questionId;

  questionCanceled.date = event.params.date;
  newsfeedEvent.date = event.params.date;

  newsfeedEvent.expiryDate = event.params.date;
  newsfeedEvent.expired = true;

  questionCanceled.save();
  newsfeedEvent.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
  let withdraw = Withdraw.load(getIdFromAddress(event.params.withdrawalBy));

  if (!withdraw) {
    withdraw = new Withdraw(getIdFromAddress(event.params.withdrawalBy));
  }

  withdraw.withdrawalBy = event.params.withdrawalBy;
  withdraw.amount = event.params.amount;

  withdraw.save();
}

function getIdFromEventParams(questioner: Address, answerer: Address, questionId: BigInt): string {
  return questioner.toHexString() + answerer.toHexString() + questionId.toHexString();
}

function getIdFromAddress(address: Address): string {
  return address.toHexString();
}

export function handleEmergencyWithdraw(event: EmergencyWithdrawEvent): void {}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {}
