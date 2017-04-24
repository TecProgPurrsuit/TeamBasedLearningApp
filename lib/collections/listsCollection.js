/**
* This file is responsible for the Lists Mongo Database and its proprieties.
*
* @summary Lists DB.
*/

import { Mongo } from 'meteor/mongo';
import { SCHEMASLIST } from './schemas';

// While there isn't a user authentication yet, DEBUGMODE will simulate an admin case
const DEBUGMODE = true;
export const LISTSDB = new Mongo.Collection('LISTSDB');

LISTSDB.schema = SCHEMASLIST.List;

/** Both methods below are responsible for allowing the client to assign data to the
  * database.
 */
LISTSDB.allow({
  insert() {
    return DEBUGMODE;
  },
  update() {
    return DEBUGMODE;
  },
  remove() {
    return DEBUGMODE;
  },
});

LISTSDB.deny({
  insert() {
    return !DEBUGMODE;
  },
  update() {
    return !DEBUGMODE;
  },
  remove() {
    return !DEBUGMODE;
  },
});

export default LISTSDB;
