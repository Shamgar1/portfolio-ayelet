"use client";

import { useState } from "react";

import { quiz, whatsappLink, type QuizChoice } from "@/lib/content";

const questionCount = 3;

function ChoiceGroup({
  name,
  choices,
  value,
  onChange
}: {
  name: string;
  choices: QuizChoice[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="quiz-choices">
      {choices.map((choice) => (
        <label key={choice.value} className="quiz-choice">
          <input
            type="radio"
            name={name}
            value={choice.value}
            checked={value === choice.value}
            onChange={() => onChange(choice.value)}
          />
          <span>{choice.label}</span>
        </label>
      ))}
    </div>
  );
}

export function Quiz() {
  const [step, setStep] = useState(0);
  const [industry, setIndustry] = useState("");
  const [clients, setClients] = useState("");
  const [pain, setPain] = useState("");
  const [dream, setDream] = useState("");

  const canContinue = [industry !== "", clients !== "", pain.trim() !== "" || dream.trim() !== ""][step] ?? true;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (canContinue) setStep(step + 1);
  }

  function restart() {
    setStep(0);
    setIndustry("");
    setClients("");
    setPain("");
    setDream("");
  }

  if (step === questionCount) {
    const industryTip = quiz.business.choices.find((choice) => choice.value === industry)?.tip;
    const clientsTip = quiz.clients.choices.find((choice) => choice.value === clients)?.tip;
    const message = [
      "היי איילת, עשיתי את הבדיקה באתר.",
      `תחום: ${industry}`,
      `לקוחות בחודש: ${clients}`,
      pain.trim() ? `מה מעצבן: ${pain.trim()}` : "",
      dream.trim() ? `מה החלום: ${dream.trim()}` : ""
    ]
      .filter(Boolean)
      .join("\n");

    return (
      <div className="hero-panel quiz" id={quiz.id}>
        <p className="hero-panel-label">{quiz.label}</p>
        <h2 className="quiz-result-title">{quiz.result.title}</h2>
        <ul className="quiz-result">
          {industryTip ? <li>{industryTip}</li> : null}
          {clientsTip ? <li>{clientsTip}</li> : null}
        </ul>
        {dream.trim() ? (
          <p className="quiz-dream">
            <strong>{quiz.result.dreamLabel}:</strong> {dream.trim()}
          </p>
        ) : null}
        <a className="btn btn-whatsapp" href={whatsappLink(message)} target="_blank" rel="noreferrer">
          {quiz.result.cta}
        </a>
        <p className="quiz-hint">{quiz.result.note}</p>
        <button type="button" className="quiz-restart" onClick={restart}>
          {quiz.result.restart}
        </button>
      </div>
    );
  }

  return (
    <form className="hero-panel quiz" id={quiz.id} onSubmit={handleSubmit}>
      <div className="quiz-head">
        <p className="hero-panel-label">{quiz.label}</p>
        <div className="quiz-progress" aria-hidden="true">
          {Array.from({ length: questionCount }, (_, index) => (
            <span key={index} className={index <= step ? "is-on" : undefined} />
          ))}
        </div>
      </div>

      {step === 0 ? (
        <fieldset className="quiz-step">
          <legend>{quiz.business.title}</legend>
          <p className="quiz-hint">{quiz.business.hint}</p>
          <ChoiceGroup name="industry" choices={quiz.business.choices} value={industry} onChange={setIndustry} />
        </fieldset>
      ) : null}

      {step === 1 ? (
        <fieldset className="quiz-step">
          <legend>{quiz.clients.title}</legend>
          <p className="quiz-hint">{quiz.clients.hint}</p>
          <ChoiceGroup name="clients" choices={quiz.clients.choices} value={clients} onChange={setClients} />
        </fieldset>
      ) : null}

      {step === 2 ? (
        <fieldset className="quiz-step">
          <legend>{quiz.pain.title}</legend>
          <p className="quiz-hint">{quiz.pain.hint}</p>
          <textarea
            className="field"
            rows={2}
            value={pain}
            onChange={(event) => setPain(event.target.value)}
            placeholder={quiz.pain.painPlaceholder}
            aria-label={quiz.pain.painPlaceholder}
          />
          <textarea
            className="field"
            rows={2}
            value={dream}
            onChange={(event) => setDream(event.target.value)}
            placeholder={quiz.pain.dreamPlaceholder}
            aria-label={quiz.pain.dreamPlaceholder}
          />
        </fieldset>
      ) : null}

      <div className="quiz-actions">
        {step > 0 ? (
          <button type="button" className="btn btn-ghost" onClick={() => setStep(step - 1)}>
            {quiz.back}
          </button>
        ) : null}
        <button type="submit" className="btn btn-primary" disabled={!canContinue}>
          {step < questionCount - 1 ? quiz.next : quiz.showResult}
        </button>
      </div>
    </form>
  );
}
