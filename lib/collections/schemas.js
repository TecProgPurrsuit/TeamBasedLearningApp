/**
* This file is responsible for creating schemas which can be used in Mongo
* databases if necessary.
*
* @summary Available schemas.
*/

import SimpleSchema from 'simpl-schema';

const SCHEMASLIST = {};

SCHEMASLIST.Alternatives = new SimpleSchema({
  alternativeDescription: {
    type: String,
  },
  alternativePoints: {
    type: Number,
    min: 0,
    max: 4,
  },
});

SCHEMASLIST.Question = new SimpleSchema({
  description: {
    type: String,
    label: 'Description',
  },
  alternatives: {
    type: Array,
    minCount: 1,
    maxCount: 6,
  },
  'alternatives.$': {
    type: SCHEMASLIST.Alternatives,
  },
});

SCHEMASLIST.List = new SimpleSchema({
  title: {
    type: String,
    label: 'Título',
    max: 200,
  },
  description: {
    type: String,
    label: 'Descrição',
    max: 500,
  },
  discipline: {
    type: String,
    label: 'Matéria',
    max: 50,
  },

  // This variable is responsible for list availability, for students.
  enable: {
    type: Boolean,
    defaultValue: false,
  },

  /** This variable is responsible for closing a list after everyone answered
    * the list or the admin decided to close the list for other reason.
    */
  closed: {
    type: Boolean,
    defaultValue: false,
  },
  questions: {
    type: Array,
    minCount: 0,
    maxCount: 20,
    optional: true,
  },
  'questions.$': {
    type: SCHEMASLIST.Question,
  },
  createdAt: {
    type: Date,
    optional: true,
  },
});

export default SCHEMASLIST;
