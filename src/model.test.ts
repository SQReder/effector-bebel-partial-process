import {$commitId} from './model'
import {createStore} from "effector";

it('imported unit should have sid', () => {
    console.log($commitId.sid)
    expect($commitId.sid).toBeTruthy()
});

it('local store should have sid', () => {
    const $store = createStore(null)
    expect($store.sid).toBeTruthy()
});