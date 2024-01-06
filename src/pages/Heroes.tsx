import { HeroesList } from "@/components/HeroesList";
import { useTitle } from "@/hooks/useTitle";
import { FC } from "react";

const Heroes: FC = () => {
  useTitle("Heroes");
  return <HeroesList />;
};

export default Heroes;
