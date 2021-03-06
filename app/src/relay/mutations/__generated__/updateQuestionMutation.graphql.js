/**
 * @flow
 * @relayHash f94ef89b5159e27d1aeef809d3a5a861
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type upQuestionInput = {|
  id: string,
  description: string,
  answers: $ReadOnlyArray<?string>,
|};
export type updateQuestionMutationVariables = {|
  input: upQuestionInput
|};
export type updateQuestionMutationResponse = {|
  +updateQuestion: ?{|
    +id: string
  |}
|};
export type updateQuestionMutation = {|
  variables: updateQuestionMutationVariables,
  response: updateQuestionMutationResponse,
|};
*/


/*
mutation updateQuestionMutation(
  $input: upQuestionInput!
) {
  updateQuestion(input: $input) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "upQuestionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Question",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "updateQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "updateQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "updateQuestionMutation",
    "id": null,
    "text": "mutation updateQuestionMutation(\n  $input: upQuestionInput!\n) {\n  updateQuestion(input: $input) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ceea4f09cab9f01e25aaace959ad0620';
module.exports = node;
