import { CharacterEntityApi } from './character.api-model';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const response = await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          character(id: ${id}) {
            id
            name
            status
            species
            gender
            image
            origin {
              name
            }
            location {
              name
            }
          }
        }
      `,
    }),
  });

  const data = await response.json();

  return data.data.character;
};
