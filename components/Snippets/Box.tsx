import React from "react";

interface BoxProps {
  children: React.ReactNode;
  title: string;
  description: string;
}
export default function Box({ children, title, description }: BoxProps) {
  return (
    <section className="article-services__payroll">
      {children}
      <div className="article-services__text">
        <h3 className="heading-three">{title}</h3>
        <p className="paragraph">{description}</p>
      </div>
    </section>
  );
}
