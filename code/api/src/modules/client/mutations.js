// Imports
import { GraphQLString } from 'graphql'

// App Imports
import ClientType from './types'
import { create, remove, update } from './resolvers'

// Client create
export const clientCreate = {
  type: ClientType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: create
}

// Client update
export const clientUpdate = {
  type: ClientType,
  args: {
    id: {
      name: 'id',
      type: GraphQLString
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: update
}

// Client remove
export const clientRemove = {
  type: ClientType,
  args: {
    id: {
      name: 'id',
      type: GraphQLString
    }
  },
  resolve: remove
}