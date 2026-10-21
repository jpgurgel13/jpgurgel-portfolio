import { Camera, CodeXml, MessageCircle } from "lucide-react";
import type { ContactLink } from "../types/contactTypes";

const whatsappNumber = "5567992945396";
const whatsappMessage = "Olá, JP! Vi seu portfólio e queria conversar.";

export const contactList: ContactLink[] = [
  {
    label: "WhatsApp",
    handle: "Mandar mensagem",
    url: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    icon: MessageCircle,
    description: "Uma mensagem direta para falar comigo.",
  },
  {
    label: "Instagram",
    handle: "@jpgurgel13",
    url: "https://www.instagram.com/jpgurgel13/",
    icon: Camera,
    description: "Me acompanhe por lá.",
  },
  {
    label: "GitHub",
    handle: "jpgurgel13",
    url: "https://github.com/jpgurgel13",
    icon: CodeXml,
    description: "Todo o código dos meus projetos.",
  },
];
