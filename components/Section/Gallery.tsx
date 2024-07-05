import React from "react";
import TeamMember, { TeamMemberProps } from "../Snippets/TeamMember.tsx";

const team: TeamMemberProps[] = [
  {
    name: "Jamie Ryder",
    position: "Founding Partner & Chairman",
    image_src: "/images/team/ellipse-150x150/jamie-ryder.png",
  },
  {
    name: "Jenete Ekwueme",
    position: "Managing Partner",
    image_src: "/images/team/ellipse-150x150/jenete-ekwueme.png",
  },
  {
    name: "Vihrat Singh",
    position: "Accounting & Tax Manager",
    image_src: "/images/team/ellipse-150x150/vihrat-singh.png",
  },
  {
    name: "Isabella Telfer",
    position: "Associate Director",
    image_src: "/images/team/ellipse-150x150/isabella-telfer.png",
  },
];

export default function Gallery() {
  return (
    <article>
      <div className="container">
        <section className="gallery">
          {team.map((member) => {
            return (
              <TeamMember
                name={member.name}
                image_src={member.image_src}
                position={member.position}
                key={member.name}
              />
            );
          })}
        </section>
      </div>
    </article>
  );
}
