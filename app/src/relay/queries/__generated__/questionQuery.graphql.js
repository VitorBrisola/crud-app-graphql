/**
 * @flow
 * @relayHash dba1de863a83e5df81870de1498b3827
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type questionQueryVariables = {|
  input: string
|};
export type questionQueryResponse = {|
  +question: ?{|
    +description: ?string,
    +answers: ?$ReadOnlyArray<?string>,
  |}
|};
export type questionQuery = {|
  variables: questionQueryVariables,
  response: questionQueryResponse,
|};
*/


/*
query questionQuery(
  $input: ID!
) {
  question(id: $input) {
    description
    answers
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "answers",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "questionQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "question",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Question",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "questionQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "question",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Question",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "questionQuery",
    "id": null,
    "text": "query questionQuery(\n  $input: ID!\n) {\n  question(id: $input) {\n    description\n    answers\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '67ab553e0e636635b74e89c4f25c5a04';
module.exports = node;
