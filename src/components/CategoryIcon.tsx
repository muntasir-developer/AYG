import {
  // science
  Stethoscope,
  Laptop,
  Atom,
  Leaf,
  Satellite,
  Brain,
  // skills
  GitBranch,
  BarChart3,
  Palette,
  Banknote,
  FlaskConical,
  User2,
  BookOpen,
  Wrench,
  Globe,
  Dumbbell,
  Sparkles,
  // commerce
  Landmark,
  Coins,
  Briefcase,
  LineChart,
  FileText,
  // arts
  Camera,
  Theater,
  PenTool,
  // after-10th tracks
  Cog,
  HeartPulse,
  Hammer,
  Zap,
  Car,
  Building2,
  Cpu,
  Scissors,
  Utensils,
  Pill,
  Microscope,
  type LucideIcon,
} from "lucide-react";

/** Maps the icon name stored in the DB to its lucide component. */
const ICONS: Record<string, LucideIcon> = {
  Stethoscope,
  Laptop,
  Atom,
  Leaf,
  Satellite,
  Brain,
  GitBranch,
  BarChart3,
  Palette,
  Banknote,
  FlaskConical,
  User2,
  BookOpen,
  Wrench,
  Globe,
  Dumbbell,
  Sparkles,
  Landmark,
  Coins,
  Briefcase,
  LineChart,
  FileText,
  Camera,
  Theater,
  PenTool,
  Cog,
  HeartPulse,
  Hammer,
  Zap,
  Car,
  Building2,
  Cpu,
  Scissors,
  Utensils,
  Pill,
  Microscope,
  // alias: source data imported this as `PenToolIcon`
  PenToolIcon: PenTool,
};

type Props = {
  name: string | null | undefined;
  className?: string;
};

/** Renders a category icon by name; falls back to Sparkles if unknown. */
export default function CategoryIcon({ name, className }: Props) {
  const Icon = (name && ICONS[name]) || Sparkles;
  return <Icon className={className} />;
}
