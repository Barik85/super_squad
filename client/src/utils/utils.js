/*eslint-disable*/
import React from 'react';

export const getHeroesInSquad = (heroes, ids) => heroes.filter((hero) => ids.includes(hero.id));


export const getAvailableHeroes = (allHeroes, filter, squadIds) => allHeroes.filter((hero) =>
  hero.name.toLowerCase().includes(filter.toLowerCase()) && !squadIds.includes(hero.id));



export const getSquadStatistic = (heroes, ids) => {
  const HeroesInSquad = getHeroesInSquad(heroes, ids);

  const stats = HeroesInSquad.reduce((total, {strength, intelligence, speed}) => {
    total.str += strength;
    total.int += intelligence;
    total.spd += speed;

    return total;
  },
  {str: 0, int: 0, spd: 0});

  return stats;
}

export const classList = (arr) => (arr.join(' '));

export const makeOptions = (num) => {
  const elements =[];
  for (let i = 1; i <= num; i += 1) {
    elements.push(
      <option key={i} value={i}>{i}</option>
    )
  }
  return elements;
}
