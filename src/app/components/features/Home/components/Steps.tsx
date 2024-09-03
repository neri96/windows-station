"use client";

import { forwardRef } from "react";

import Image from "next/image";

import IcSchedule from "@/app/assets/icons/schedule.svg";
import IcNotes from "@/app/assets/icons/notes.svg";
import IcTime from "@/app/assets/icons/time.svg";
import IcCompleted from "@/app/assets/icons/completed.svg";

import * as S from "./StepsStyles";

const stepData = [
  {
    id: 1,
    icon: IcSchedule,
    title: "schedule your free in-home estimate",
    content:
      "Call us at 415-295-4502 to schedule a date and time for a free in-home estimate that works best for you.",
    deadline: "today",
  },
  {
    id: 2,
    icon: IcNotes,
    title: "what to expect during your consultation",
    content:
      "During your consultation, your local Window Station Professional Sales Representative will take measurements, show samples, advise you on material options, and discuss your window  or door installation needs. Afterward, you’ll receive your quote.",
    deadline: "in two days",
  },
  {
    id: 3,
    icon: IcTime,
    title: "reliable lead time",
    content:
      "We will order your windows as soon as you review and approve the contract. Upon delivery to our warehouse, quality controlled inspections are employed and we will contact you to arrange an installation date.",
    deadline: "after 3-4 weeks",
  },
  {
    id: 4,
    icon: IcCompleted,
    title: "installation completion",
    content:
      "Upon completion, our certified installers will ensure you’re completely satisfied with the installation and inspect each window/door for proper operation, fit and finish.",
    deadline: "once finished",
  },
];

const Steps = ({ inView }: { inView: boolean }, ref: any) => {
  return (
    <S.Steps ref={ref}>
      <S.StepsTitle>
        <h3>4 easy steps</h3>
      </S.StepsTitle>
      <S.StepsContent>
        {stepData.map(({ id, icon, title, content, deadline }) => {
          return (
            <S.StepsElem key={id} $index={id} $inView={inView}>
              <S.StepsElemContainer $index={id} $inView={inView}>
                <S.StepsElemHeader>
                  <S.StepsIcon>
                    <Image src={icon} alt={title} />
                  </S.StepsIcon>
                  <S.StepsElemTitle>{title}</S.StepsElemTitle>
                </S.StepsElemHeader>
                <S.StepsElemContent>{content}</S.StepsElemContent>
                <S.StepsElemDeadline>{deadline}</S.StepsElemDeadline>
              </S.StepsElemContainer>
            </S.StepsElem>
          );
        })}
      </S.StepsContent>
    </S.Steps>
  );
};

export default forwardRef(Steps);
