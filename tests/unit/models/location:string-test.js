import { moduleForModel, test } from 'ember-qunit';

moduleForModel('location:string', 'Unit | Model | location:string', {
  // Specify the other units that are required for this test.
  needs: ['model:word']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
