"use client";

import SectionWrapper from "@/components/SectionWrapper";
import typography from "@components/Typography";
import Button from "@components/UI/Button";
import dictionary from "@public/translate/contact/es.json";
import cx from "classnames";
import { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({ name, phone, email, message });
  };

  useEffect(() => {
    console.log(name.length, phone.length, email.length, message.length);
  }, [name, phone, email, message]);

  return (
    <SectionWrapper background="bg-astronaut-500" padding="py-14">
      <form
        onSubmit={handleSubmit}
        autoComplete="on"
        className="flex flex-col gap-5 w-full max-w-2xl mx-auto"
      >
        <h2 className={cx("text-white text-center pb-14", typography.H3)}>
          {dictionary.form.title}
        </h2>
        <div className="flex gap-6">
          <div className="w-1/2 flex flex-col gap-1.5">
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
          <div className="w-1/2 flex flex-col gap-1.5">
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
        <div className="w-full flex justify-end pt-5">
          <Button disabled={!(name.length > 0 && email.length > 0)}>
            {dictionary.form.send}
          </Button>
        </div>
      </form>
    </SectionWrapper>
  );
};

export default Form;
