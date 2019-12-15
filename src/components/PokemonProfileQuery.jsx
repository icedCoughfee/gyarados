import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PokemonProfile from "./PokemonProfile";
import CenteredContainer from "./layout/CenteredContainer";

const PKMN_SPECIES_QUERY = gql`
  query GetPokemon($name: String) {
    getPokemon(name: $name) {
      id
      order
      height
      weight
      abilities {
        is_hidden
        slot
        ability {
          name
          url
          node {
            names {
              name
              language {
                name
              }
            }
          }
        }
      }
      forms {
        name
        url
      }
      game_indices {
        game_index
        version {
          name
          url
        }
      }
      held_items {
        item {
          name
          url
        }
        version_details {
          version {
            name
            url
          }
          rarity
        }
      }
      location_area_encounters
      moves {
        move {
          name
          url
        }
        version_group_details {
          move_learn_method {
            name
            url
          }
          version_group {
            name
            url
          }
          level_learned_at
        }
      }
      sprites {
        front_default
        front_shiny
        front_female
        front_shiny_female
        back_default
        back_shiny
        back_female
        back_shiny_female
      }
      stats {
        stat {
          name
          url
        }
        effort
        base_stat
      }
      species {
        name
        node {
          id
          name
          order
          gender_rate
          capture_rate
          base_happiness
          is_baby
          hatch_counter
          has_gender_differences
          growth_rate {
            name
            url
          }
          pokedex_numbers {
            entry_number
            pokedex {
              name
              url
            }
          }
          egg_groups {
            name
            url
            node {
              names {
                name
                language {
                  name
                  url
                }
              }
            }
          }
          color {
            name
            url
          }
          evolves_from_species {
            name
            url
          }
          evolution_chain {
            id
            baby_trigger_item {
              name
              url
            }
            chain {
              species {
                name
                url
              }
            }
          }
          habitat {
            name
            url
          }
          generation {
            name
            url
          }
          names {
            name
            language {
              name
              url
            }
          }
          flavor_text_entries {
            flavor_text
            language {
              name
              url
            }
            version {
              name
              url
            }
          }
          genera {
            genus
            language {
              name
              url
            }
          }
        }
      }
      types {
        slot
        type {
          name
          url
        }
      }
    }
  }
`;

const PokemonProfileQuery = ({ match }) => {
  return (
    <Query
      query={PKMN_SPECIES_QUERY}
      variables={{ name: match.params.name }}
      notifyOnNetworkStatusChange
    >
      {({ data, loading, error }) => {
        if (loading) {
          return <div>Loading...</div>;
        }
        if (error) {
          return <div>Error...</div>;
        }
        return (
          data && (
            <CenteredContainer>
              <PokemonProfile pokemon={data.getPokemon} />
            </CenteredContainer>
          )
        );
      }}
    </Query>
  );
};

export default PokemonProfileQuery;
