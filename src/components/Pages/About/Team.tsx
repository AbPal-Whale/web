import SectionWrapper from "@/components/SectionWrapper";
import typography from "@/components/Typography";
import Title from "@/components/Typography/SectionTitle";
import dictionary from "@public/translate/about/es.json";
import cx from "classnames";

export const Team = () => {
  const teamMembers = [
    {
      name: "Abraham",
      position: "CEO",
    },
    {
      name: "Mario",
      position: "Tech Lead",
    },
    {
      name: "Jonh Doe",
      position: "Tech Lead",
    },
    {
      name: "Jane Doe",
      position: "Tech Lead",
    },
    {
      name: "Jonh Doe",
      position: "Tech Lead",
    },
    {
      name: "Jane Doe",
      position: "Tech Lead",
    },
    {
      name: "Jonh Doe",
      position: "Tech Lead",
    },
    {
      name: "Jane Doe",
      position: "Tech Lead",
    },
  ];

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-24">
        <Title title={dictionary.team} />
        <div className="grid grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={"team-member-" + index} className="flex flex-col gap-5">
              <div className="w-[332px] h-[281px] bg-[#C4DEFD] rounded-3xl" />
              <div className="flex flex-col gap-2">
                <p className={cx(typography.bodySmall)}>{member.position}</p>
                <p className={cx(typography.body)}>
                  <strong>{member.name}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Team;
