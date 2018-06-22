
const setOptions = (method, data) => ({
  method,
  body: JSON.stringify(data),
  headers: new Headers({ 'Content-Type': 'application/json' })
});

export const fetchAllHeroes = () => (
  fetch('/api/heroes', { method: 'GET' })
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }

      throw new Error('Error while fetching');
    })
);

export const addHeroToDb = (hero) => (
  fetch('/api/heroes', setOptions('POST', hero))
    .then(response => {
      if (response.status === 201) return response.json();
      throw new Error('Error while fetching');
    })
);

export const deleteHeroFromDB = id => {
  const deleteUrl = `api/heroes/${id}`;
  const deleteData = { id };
  return fetch(deleteUrl, setOptions('DELETE', deleteData))
    .then(response => {
      if (response.status === 200) return;

      alert('Ups! Something went wrong!')
    })
}

export const addSquadToDB = newSquad =>
  fetch('api/squads', setOptions('POST', newSquad)).then(response => {
    if (response.status === 201) return response.json();
    throw new Error('Error while fetching');
  });


export const deletSquadFromDB = id =>
  fetch(`api/squads/${id}`, setOptions('DELETE', { id })).then(response => {
    if (response.status === 200) return;

    throw new Error('Error while fetching!');
  });
