import React from "react";
import Radar from "react-d3-radar";
import { getPropertyForLanguage } from "../utility/pokemon";
import CONSTANTS from "../constants";

function BaseStats({ stats }) {
  const variables = stats.map(({ stat, base_stat }) => {
    return {
      key: stat.name,
      label: getPropertyForLanguage(stat.node, "name", CONSTANTS.LANG_ENGLISH),
      value: base_stat
    };
  });

  const values = {};
  for (const stat of variables) {
    values[stat.key] = stat.value;
  }
  const data = { variables: variables, sets: [{ values: values }] };

  return (
    <Radar
      width={500}
      height={500}
      padding={70}
      domainMax={255}
      highlighted={null}
      data={data}
    />
  );
}

export default BaseStats;
