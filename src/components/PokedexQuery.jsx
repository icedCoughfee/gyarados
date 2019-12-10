import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Pokedex from "./Pokedex";

const PKMN_QUERY = gql`
  query GetAllPokemon($limit: Int, $offset: Int) {
    getAllPokemon(limit: $limit, offset: $offset) {
      node {
        id
        name
        order
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
        types {
          slot
          type {
            name
            url
          }
        }
      }
    }
  }
`;

const PokedexQuery = () => (
  <Query query={PKMN_QUERY} notifyOnNetworkStatusChange>
    {({ data, loading, fetchMore }) => {
      return (
        data && (
          <Pokedex
            pokemonNodes={data.getAllPokemon || []}
            loading={loading}
            onLoadMore={() =>
              fetchMore({
                variables: {
                  limit: 50,
                  offset: data.getAllPokemon.length
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) return prev;
                  return Object.assign({}, prev, {
                    getAllPokemon: [
                      ...prev.getAllPokemon,
                      ...fetchMoreResult.getAllPokemon
                    ]
                  });
                }
              })
            }
          />
        )
      );
    }}
  </Query>
);

export default PokedexQuery;
