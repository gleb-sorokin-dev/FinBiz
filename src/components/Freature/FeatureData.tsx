import { Blocks, ChartPie, Files, GitFork, UserRoundPen } from "lucide-react";
import boxLeft from "../../assets/box-left.svg";
import boxLeftReal from "../../assets/box-left-real.svg";

export const featureData = {
  sectionSubtitle: "Finance and Analytics",
  sectionTitle: "Everything for cost control and team accounting",
  sectionText:
    "Control your budget in real time, track employee spending and get analytics for informed decisions. Automate accounting.",
  features: [
    {
      icon: <ChartPie size={32} />,
      iconBoxColor: "bg-blue-600",
      title: "Advance Analytics",
      desc: "Experience advanced analytics capabilities that enable you to dive deep into data, uncover meaningful patterns, and derive actionable insights",
      imgSrc: boxLeft,
    },
    {
      icon: <Files size={32} />,
      iconBoxColor: "bg-cyan-500",
      title: "Automated Reports",
      desc: "Save time and effort with automated reporting, generating comprehensive and accurate reports automatically, streamlining your data analysis",
      imgSrc: boxLeftReal,
    },
    {
      icon: <UserRoundPen size={32} />,
      iconBoxColor: "bg-yellow-500",
      title: "Retention Report",
      desc: "Enhance retention with our report, maximizing customer engagement and loyalty for business",
    },
    {
      icon: <GitFork size={32} />,
      iconBoxColor: "bg-red-500",
      title: "A/B Test Variants",
      desc: "Efficiently compare A/B test variants to determine the most effective strategies",
    },
    {
      icon: <Blocks size={32} />,
      iconBoxColor: "bg-purple-500",
      title: "Integration Directory",
      desc: "Seamlessly integrate with our directory, maximizing efficiency and unlocking the full potentials",
    },
  ],
};
