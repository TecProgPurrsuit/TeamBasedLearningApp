/**
* This file is responsible for creating schemas which can be used in Mongo
* databases if necessary.
*
* @summary Available schemas.
*/

import SimpleSchema from 'simpl-schema';

export const SCHEMASLIST = {};

SCHEMASLIST.Alternatives = new SimpleSchema({
  alternativeDescription: {
    type: String,
  },
  alternativePoints: {
    type: Number,
    min: 0,
    max: 4,
  },
  alternative: {
    type: Boolean,
    optional: true,
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
    label: 'Title',
    max: 200,
  },
  description: {
    type: String,
    label: 'Description',
    max: 500,
  },
  enable: {
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
});
