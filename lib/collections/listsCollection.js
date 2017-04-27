/**
* This file is responsible for the Lists Mongo Collection and its proprieties.
*
* @summary Lists DB.
*/

import { Mongo } from 'meteor/mongo';
import SCHEMASLIST from './schemas';

// While there isn't a user authentication yet, DEBUGMODE will simulate an admin case
const DEBUGMODE = true;
export const LISTSDB = new Mongo.Collection('LISTSDB');

// Links the defined schema to te database
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
