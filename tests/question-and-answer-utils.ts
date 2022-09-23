import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  QuestionAnswered,
  QuestionAsked,
  QuestionCanceled,
  QuestionExpired,
  Withdraw
} from "../generated/QuestionAndAnswer/QuestionAndAnswer"

export function createQuestionAnsweredEvent(
  questioner: Address,
  answerer: Address,
  questionId: BigInt,
  bounty: BigInt,
  date: BigInt,
  answer: string
): QuestionAnswered {
  let questionAnsweredEvent = changetype<QuestionAnswered>(newMockEvent())

  questionAnsweredEvent.parameters = new Array()

  questionAnsweredEvent.parameters.push(
    new ethereum.EventParam(
      "questioner",
      ethereum.Value.fromAddress(questioner)
    )
  )
  questionAnsweredEvent.parameters.push(
    new ethereum.EventParam("answerer", ethereum.Value.fromAddress(answerer))
  )
  questionAnsweredEvent.parameters.push(
    new ethereum.EventParam(
      "questionId",
      ethereum.Value.fromUnsignedBigInt(questionId)
    )
  )
  questionAnsweredEvent.parameters.push(
    new ethereum.EventParam("bounty", ethereum.Value.fromUnsignedBigInt(bounty))
  )
  questionAnsweredEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromUnsignedBigInt(date))
  )
  questionAnsweredEvent.parameters.push(
    new ethereum.EventParam("answer", ethereum.Value.fromString(answer))
  )

  return questionAnsweredEvent
}

export function createQuestionAskedEvent(
  questioner: Address,
  answerer: Address,
  questionId: BigInt,
  bounty: BigInt,
  date: BigInt,
  question: string
): QuestionAsked {
  let questionAskedEvent = changetype<QuestionAsked>(newMockEvent())

  questionAskedEvent.parameters = new Array()

  questionAskedEvent.parameters.push(
    new ethereum.EventParam(
      "questioner",
      ethereum.Value.fromAddress(questioner)
    )
  )
  questionAskedEvent.parameters.push(
    new ethereum.EventParam("answerer", ethereum.Value.fromAddress(answerer))
  )
  questionAskedEvent.parameters.push(
    new ethereum.EventParam(
      "questionId",
      ethereum.Value.fromUnsignedBigInt(questionId)
    )
  )
  questionAskedEvent.parameters.push(
    new ethereum.EventParam("bounty", ethereum.Value.fromUnsignedBigInt(bounty))
  )
  questionAskedEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromUnsignedBigInt(date))
  )
  questionAskedEvent.parameters.push(
    new ethereum.EventParam("question", ethereum.Value.fromString(question))
  )

  return questionAskedEvent
}

export function createQuestionCanceledEvent(
  questioner: Address,
  answerer: Address,
  questionId: BigInt,
  date: BigInt
): QuestionCanceled {
  let questionCanceledEvent = changetype<QuestionCanceled>(newMockEvent())

  questionCanceledEvent.parameters = new Array()

  questionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "questioner",
      ethereum.Value.fromAddress(questioner)
    )
  )
  questionCanceledEvent.parameters.push(
    new ethereum.EventParam("answerer", ethereum.Value.fromAddress(answerer))
  )
  questionCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "questionId",
      ethereum.Value.fromUnsignedBigInt(questionId)
    )
  )
  questionCanceledEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromUnsignedBigInt(date))
  )

  return questionCanceledEvent
}

export function createQuestionExpiredEvent(
  questioner: Address,
  answerer: Address,
  questionId: BigInt,
  date: BigInt
): QuestionExpired {
  let questionExpiredEvent = changetype<QuestionExpired>(newMockEvent())

  questionExpiredEvent.parameters = new Array()

  questionExpiredEvent.parameters.push(
    new ethereum.EventParam(
      "questioner",
      ethereum.Value.fromAddress(questioner)
    )
  )
  questionExpiredEvent.parameters.push(
    new ethereum.EventParam("answerer", ethereum.Value.fromAddress(answerer))
  )
  questionExpiredEvent.parameters.push(
    new ethereum.EventParam(
      "questionId",
      ethereum.Value.fromUnsignedBigInt(questionId)
    )
  )
  questionExpiredEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromUnsignedBigInt(date))
  )

  return questionExpiredEvent
}

export function createWithdrawEvent(
  withdrawalBy: Address,
  amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawalBy",
      ethereum.Value.fromAddress(withdrawalBy)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}
