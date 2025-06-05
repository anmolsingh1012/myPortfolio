import aws from "@/assets/images/aws.jpg";
import dsa from "@/assets/images/internshala.jpg";
import coursera from "@/assets/images/coursera.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import { ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "AWS Cloud Solutions Architect",
    position: "Coursera",
    avatar: aws,
    link: "https://coursera.org/share/161e9b4faeb4aaab8d233b4bb9ca687a",
    skills: [
      "Serverless Computing",
      "Cloud Security",
      "Solution Architecture",
      "Cloud Computing Architecture",
      "Amazon Web Services",
      "Scalability",
    ],
  },
  {
    name: "Data Structures & Algorithms",
    position: "Internshala",
    avatar: dsa,
    link: "https://drive.google.com/file/d/1w8bPf6r-cL04jbuOicRcj8h6ELCVh1yI/view?usp=sharing",
    skills: [
      "Algorithms",
      "Recursion",
      "Linked Lists",
      "Stacks & Queues",
      "Trees",
      "Graphs",
      "Time Complexity",
      "Sorting & Searching",
    ],
  },
  {
    name: "Computer Vision for Engineering",
    position: "Coursera",
    avatar: coursera,
    link: "https://coursera.org/share/4801e6a38f675584a26f6c650e13a19a",
    skills: [
      "OpenCV",
      "Image Processing",
      "Edge Detection",
      "Face Recognition",
      "Hough Transform",
      "Pattern Recognition",
    ],
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow=""
          title="Licenses & Certifications"
          description=""
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((certificate) => (
                  <Card
                    key={certificate.name}
                    className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center mb-4">
                      <div className="size-14 bg-gray-700 inline-flex justify-center items-center rounded-full flex-shrink-0">
                        <Image
                          src={certificate.avatar}
                          alt={certificate.name}
                          className="max-h-full rounded-full"
                        />
                      </div>

                      <div>
                        <div className="font-semibold flex items-center gap-2">
                          {certificate.name}
                          <a
                            href={certificate.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition"
                          >
                            <ExternalLink size={16} />
                          </a>
                        </div>
                        <div className="text-sm text-white/40">
                          {certificate.position}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {certificate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 text-xs text-gray-950 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
