import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import PokemonProfile from "./PokemonProfile";

const PKMN_SPECIES_QUERY = gql`
  query GetPokemonSpecies($name: String) {
    getPokemonSpecies(name: $name) {
      id
      name
      order
      gender_rate
      capture_rate
      base_happiness
      is_baby
      hatch_counter
      has_gender_differences
      forms_switchable
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
      }
      color {
        name
        url
      }
      shape {
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
      pal_park_encounters {
        base_score
        rate
        area {
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
      form_descriptions {
        description
        language {
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
      varieties {
        is_default
        pokemon {
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
        return data && <PokemonProfile pokemon={data.getPokemonSpecies} />;
      }}
    </Query>
  );
};

export default PokemonProfileQuery;
