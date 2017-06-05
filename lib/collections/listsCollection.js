/**
* This file is responsible for the Lists Mongo Collection and its proprieties.
*
* @summary Lists DB.
*/

/* global Meteor comes from Meteor Library*/
import SCHEMASLIST from './schemas';

// The variable below is needed for security reasons - See below in ".deny()"
const CLIENTPERMITION = false;

// Create the MongoDB Collection for storing the lists, and exports it
/* global Mongo */
export const LISTSDB = new Mongo.Collection('LISTSDB');

// Links the defined schema to te database
LISTSDB.schema = SCHEMASLIST.List;

/** For security reasons, all client server requests must be validated using
  * Meteor Methods.
  * In this case, use server/listMethods for more information.
  * Guide is available in: https://guide.meteor.com/security.html
 */
LISTSDB.deny({
  insert() {
    return !CLIENTPERMITION;
  },
  update() {
    return !CLIENTPERMITION;
  },
  remove() {
    return !CLIENTPERMITION;
  },
});

export default LISTSDB;
