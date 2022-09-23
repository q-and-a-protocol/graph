import { BigInt, Address } from '@graphprotocol/graph-ts';
import {
  QuestionAndAnswer,
  QuestionAnswered as QuestionAnsweredEvent,
  QuestionAsked as QuestionAskedEvent,
  QuestionCanceled as QuestionCanceledEvent,
  QuestionExpired as QuestionExpiredEvent,
  Withdraw as WithdrawEvent,
} from '../generated/QuestionAndAnswer/QuestionAndAnswer';
import {
  QuestionAnswered,
  QuestionAsked,
  QuestionCanceled,
  QuestionExpired,
  NewsfeedEvent,
} from '../generated/schema';

export function handleQuestionAnswered(event: QuestionAnsweredEvent): void {
  let questionAnswered = QuestionAnswered.load(
    getIdFromEventParams(event.params.questionId, event.params.questioner)
  );
  let newsfeedEvent = NewsfeedEvent.load(
    getIdFromEventParams(event.params.questionId, event.params.questioner)
  );

  if (!questionAnswered) {
    questionAnswered = new QuestionAnswered(
      getIdFromEventParams(event.params.questionId, event.params.questioner)
    );
  }
  if (!newsfeedEvent) {
    newsfeedEvent = new NewsfeedEvent(
      getIdFromEventParams(event.params.questionId, event.params.questioner)
    );
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

  newsfeedEvent.answered = true;

  questionAnswered.save();
  newsfeedEvent.save();
}

export function handleQuestionAsked(event: QuestionAskedEvent): void {
  let questionAsked = QuestionAsked.load(
    getIdFromEventParams(event.params.questionId, event.params.questioner)
  );
  let newsfeedEvent = NewsfeedEvent.load(
    getIdFromEventParams(event.params.questionId, event.params.questioner)
  );

  if (!questionAsked) {
    questionAsked = new QuestionAsked(
      getIdFromEventParams(event.params.questionId, event.params.questioner)
    );
  }
  if (!newsfeedEvent) {
    newsfeedEvent = new NewsfeedEvent(
      getIdFromEventParams(event.params.questionId, event.params.questioner)
    );
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

  newsfeedEvent.answered = false;

  questionAsked.save();
  newsfeedEvent.save();
}

export function handleQuestionCanceled(event: QuestionCanceledEvent): void {
  let questionCanceled = QuestionCanceled.load(
    getIdFromEventParams(event.params.questionId, event.params.questioner)
  );
  if (!questionCanceled) {
    questionCanceled = new QuestionCanceled(
      getIdFromEventParams(event.params.questionId, event.params.questioner)
    );
  }
  questionCanceled.questioner = event.params.questioner;
  questionCanceled.answerer = event.params.answerer;
  questionCanceled.questionId = event.params.questionId;
  questionCanceled.date = event.params.date;

  questionCanceled.save();
}

export function handleQuestionExpired(event: QuestionExpiredEvent): void {
  let questionExpired = QuestionExpired.load(
    getIdFromEventParams(event.params.questionId, event.params.questioner)
  );
  if (!questionExpired) {
    questionExpired = new QuestionExpired(
      getIdFromEventParams(event.params.questionId, event.params.questioner)
    );
  }
  questionExpired.questioner = event.params.questioner;
  questionExpired.answerer = event.params.answerer;
  questionExpired.questionId = event.params.questionId;
  questionExpired.date = event.params.date;

  questionExpired.save();
}

export function handleWithdraw(event: WithdrawEvent): void {}

function getIdFromEventParams(questionId: BigInt, questioner: Address): string {
  return questionId.toHexString() + questioner.toHexString();
}
