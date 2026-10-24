import { House, Folder, Award, UserRound, Mail } from "lucide-react";
import type { NavItem } from "../types/navigation";

export const navItems: NavItem[] = [
  { path: "/", label: "Home", icon: <House size={16} /> },
  { path: "/projects", label: "Projetos", icon: <Folder size={16} /> },
  { path: "/certificates", label: "Certificados", icon: <Award size={16} /> },
  { path: "/about", label: "Sobre", icon: <UserRound size={16} /> },
  { path: "/contact", label: "Contato", icon: <Mail size={16} /> },
];
