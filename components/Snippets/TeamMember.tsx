import Image from "next/image";
import React from "react";

export interface TeamMemberProps {
  name: string;
  position: string;
  image_src: string;
}

export default function TeamMember({
  name,
  position,
  image_src,
}: TeamMemberProps) {
  return (
    <section className="team">
      <div className="team__img">
        <Image src={image_src} alt={name} width={200} height={200} />
      </div>
      <div className="team__desc">
        <h3 className="heading-three ">{name}</h3>
        <h3 className="heading-three heading-three--light">{position}</h3>
      </div>
    </section>
  );
}
