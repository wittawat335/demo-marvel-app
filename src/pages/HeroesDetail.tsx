import React from "react";
import { useRoute } from "wouter";

type Props = {};

const HeroesDetail = (props: Props) => {
  const [, params] = useRoute("/heroes/:heroesName");
  const heroesName = decodeURI(params!.heroesName);
  return <div>HeroesDetail</div>;
};

export default HeroesDetail;
