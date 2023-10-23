"use client";

import SectionWrapper from "@/components/SectionWrapper";
import typography from "@components/Typography";
import Button from "@components/UI/Button";
import dictionary from "@public/translate/contact/es.json";
import cx from "classnames";
import Link from "next/link";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sendingForm, setSendingForm] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setSendingForm(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, message }),
      });

      if (response.ok) {
        setFormSent(true);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }

    setSendingForm(false);
  };

  return (
    <SectionWrapper
      background="bg-astronaut-500"
      padding="py-14"
      appearOnScroll
    >
      <form
        onSubmit={handleSubmit}
        autoComplete="on"
        className="flex flex-col gap-5 w-full max-w-2xl mx-auto"
      >
        <h2 className={cx("text-white text-center pb-14", typography.H3)}>
          {dictionary.form.title}
        </h2>
        <div className="flex md:flex-row flex-col gap-6">
          <div className="w-full md:w-1/2 flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className={cx("text-white", typography.button)}
            >
              {dictionary.form.name}
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              autoComplete="on"
              placeholder="name"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className={cx("text-white", typography.button)}
            >
              {dictionary.form.phone}
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              autoComplete="on"
              placeholder="phone"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className={cx("text-white", typography.button)}
          >
            {dictionary.form.email}
          </label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="on"
            placeholder="phone"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className={cx("text-white", typography.button)}
          >
            {dictionary.form.message}
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            name="message"
            rows={5}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100"
          />
        </div>
        <div className="w-full flex justify-end pt-5 transition-all">
          {!formSent && !sendingForm && !error && (
            <Button disabled={!(name.length > 0 && email.length > 0)}>
              {dictionary.form.send}
            </Button>
          )}
          {sendingForm && <Loading />}
          {formSent && <p className="text-white">{dictionary.form.thanks}</p>}
          {error && (
            <p className="text-white">
              {dictionary.form.error}
              <Link href="mailto:contacto@whalecomm.io">
                {dictionary.email}
              </Link>
            </p>
          )}
        </div>
      </form>
    </SectionWrapper>
  );
};

export default Form;

const Loading = () => {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(2 1)" stroke="#FFF" stroke-width="1.5">
          <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#fff">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              dur="1.3s"
              values="1;0;0;0;0;0;0;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#fff">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              dur="1.3s"
              values="0;1;0;0;0;0;0;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#fff">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              dur="1.3s"
              values="0;0;1;0;0;0;0;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#fff">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              dur="1.3s"
              values="0;0;0;1;0;0;0;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#fff">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              dur="1.3s"
              values="0;0;0;0;1;0;0;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#fff">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              dur="1.3s"
              values="0;0;0;0;0;1;0;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#fff">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              dur="1.3s"
              values="0;0;0;0;0;0;1;0"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#fff">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              dur="1.3s"
              values="0;0;0;0;0;0;0;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
};
