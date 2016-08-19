import { moduleForModel, test } from 'ember-qunit';

moduleForModel('word:string', 'Unit | Model | word:string', {
  // Specify the other units that are required for this test.
  needs: ['model:location', 'model:language']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
