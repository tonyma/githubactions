const assert = require('assert');

describe('Simple test', ()=>{
    it('should return 2', () => {
        assert.equal(1+1, 2);
    })
    it('should return 9', () => {
        assert.equal(3*3, 9);
    })
})