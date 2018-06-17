export const getHeroesInSquad = (heroes, ids) => {
  const HeroesInSquad = heroes.filter((hero) => ids.includes(hero.id));
  return HeroesInSquad;
}

export const getAvailableHeroes = (AllHeroes, filter, squadIds) => {
  const AvailableHeroes = AllHeroes.length > 0 ? (
      AllHeroes.filter((hero) => hero.name.toLowerCase().includes(filter.toLowerCase()) && !squadIds.includes(hero.id))
    ) : (
      []
  );

  return AvailableHeroes;
}

export const getSquadStatistic = (heroes, ids) => {
  const HeroesInSquad = heroes.filter((hero) => ids.includes(hero.id));
  const str = HeroesInSquad.reduce((sum, hero) => sum + hero.strength, 0)
  const int = HeroesInSquad.reduce((sum, hero) => sum + hero.intelligence, 0)
  const spd = HeroesInSquad.reduce((sum, hero) => sum + hero.speed, 0)

  return {
    str,
    int,
    spd
  }
}

export const fetchAllHeroes = () => {
  fetch('/api/heroes', { method: 'GET' })
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        return [];
      })
      .catch(error => console.log(`Error: ${error}`))
}
