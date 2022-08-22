import { type FC } from "react";
import ContentLayout from "_layouts/content/Content.layout";
import { MAX_W_PROSE } from "_constants";
import EnhancedImage from "_primitives/enhanced-image/EnhancedImage.primitive";
import { parse } from "yaml";
import { readFileSync } from "fs";
import ResumeLayout from "_layouts/resume/Resume.layout";
import { Resume } from "../types/resume.types";

interface ResumePageProps {
  resume: Resume;
}

export function getStaticProps() {
  const resume = parse(
    readFileSync("assets/resume.yml", { encoding: "UTF-8" })
  ) as Resume;

  return {
    props: {
      resume,
    },
  };
}

const ResumePage: FC<ResumePageProps> = ({ resume }) => {
  return (
    <ContentLayout>
      <EnhancedImage
        className="rounded-md"
        alt="Resume title image"
        credits="photo by Utku Sarioglu"
        src={require("_assets/images/waves-and-bird.jpg")}
        maxResponsiveWidth={MAX_W_PROSE}
      />
      <ResumeLayout resume={resume} />
    </ContentLayout>
  );
};

export default ResumePage;
