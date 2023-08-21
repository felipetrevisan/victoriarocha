"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MailOpen } from "lucide-react";
import * as Form from "@radix-ui/react-form";

import { useApp } from "@/hooks/useApp";
import { Title } from "@/components/Title";
import { TransitionEffect } from "@/components/TransitionEffect";

export function Contact() {
  const refContact = useRef<HTMLDivElement>(null);

  const { setCurrentSection, getSection } = useApp();

  useEffect(() => {
    setCurrentSection(getSection("/contact"));
  }, [getSection, setCurrentSection]);

  return (
    <>
      <TransitionEffect />
      <motion.div
        ref={refContact}
        data-section="contact"
        className="max-sm::items-center container flex flex-col justify-center md:lg:justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: [0, 1] }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      >
        <div className="flex flex-wrap items-center justify-center">
          <Title content="Contato" />
        </div>
        <div className="flex flex-wrap items-center">
          <div className="mx-auto w-full lg:w-[66.666%]">
            <h6 className="mb-5 flex flex-col items-center justify-center gap-2 md:flex-row">
              Preencha o formulário ou entre em contato pelo e-mail
              <a
                href="mailto:victoria_rocha_@hotmail.com"
                className="mb-1 ml-2 flex items-center justify-center rounded-md bg-black/40 p-3 text-sm backdrop-blur transition-colors duration-500 ease-in-out hover:bg-pink-800/80"
              >
                <MailOpen size={14} className="mr-2" />{" "}
                victoria_rocha_@hotmail.com
              </a>
            </h6>
            <div className="overflow-hidden rounded-2xl border border-solid border-black/[0.1] bg-white/[0.1] p-6 backdrop-blur-xl backdrop-saturate-[180deg]">
              <Form.Root className="contact-info grid grid-cols-12 gap-6">
                <Form.Field name="name" className="col-span-12 md:col-span-6">
                  <Form.Control
                    className="text-md w-full rounded-md border border-solid border-black/10 bg-black/50 px-3 py-2 font-normal outline-2"
                    type="text"
                    placeholder="Nome *"
                    required
                  />
                  <Form.Message
                    className="mb-1 mt-1 flex items-baseline justify-between rounded-md bg-purple-950/40 p-3 text-sm backdrop-blur"
                    match="valueMissing"
                  >
                    Por favor digite seu nome
                  </Form.Message>
                </Form.Field>
                <Form.Field name="email" className="col-span-12 md:col-span-6">
                  <Form.Control
                    className="text-md w-full rounded-md border border-solid border-black/10 bg-black/50 px-3 py-2 font-normal outline-2"
                    type="email"
                    placeholder="E-mail *"
                    required
                  />
                  <Form.Message
                    className="mb-1 mt-1 flex items-baseline justify-between rounded-md bg-purple-950/40 p-3 text-sm backdrop-blur"
                    match="valueMissing"
                  >
                    Por favor digite seu e-mail
                  </Form.Message>
                  <Form.Message
                    className="mb-1 mt-1 flex items-baseline justify-between rounded-md bg-purple-950/40 p-3 text-sm backdrop-blur"
                    match="typeMismatch"
                  >
                    Por favor digite um e-mail válido
                  </Form.Message>
                </Form.Field>
                <Form.Field name="subject" className="col-span-12">
                  <Form.Control
                    className="text-md w-full rounded-md border border-solid border-black/10 bg-black/50 px-3 py-2 font-normal outline-2"
                    type="text"
                    placeholder="Assunto *"
                    required
                  />
                  <Form.Message
                    className="mb-1 mt-1 flex items-baseline justify-between rounded-md bg-purple-950/40 p-3 text-sm backdrop-blur"
                    match="valueMissing"
                  >
                    Por favor digite um assunto
                  </Form.Message>
                </Form.Field>
                <Form.Field name="message" className="col-span-12">
                  <Form.Control
                    className="text-md w-full resize-none rounded-md border border-solid border-black/10 bg-black/50 px-3 py-2 font-normal outline-2"
                    asChild
                  >
                    <textarea placeholder="Mensagem *" rows={5} required />
                  </Form.Control>
                  <Form.Message
                    className="mb-1 flex items-baseline justify-between rounded-md bg-purple-950/40 p-3 text-sm backdrop-blur transition-all"
                    match="valueMissing"
                  >
                    Por favor digite sua mensagem
                  </Form.Message>
                </Form.Field>
                <div className="col-span-12 place-self-end">
                  <Form.Submit asChild>
                    <button className="md:text-md relative rounded-full bg-none p-3 text-sm uppercase text-white after:absolute after:bottom-0 after:left-0 after:right-8 after:h-1 after:w-0 after:bg-border after:transition-[all_ease_0.35s] hover:after:left-0 hover:after:right-auto hover:after:w-full lg:text-lg">
                      Enviar Mensagem
                    </button>
                  </Form.Submit>
                </div>
              </Form.Root>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
