import type { Route } from "./+types/home";
import { HomePage } from "../home/home-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Autoskar" },
    { name: "description", content: "Autoservis, pneuservis, diagnostika" },
  ];
}

export default function Home() {
  return <HomePage />;
}
