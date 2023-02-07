'use strict';

describe('ifElse', () => {
const { ifElse } = require('./ifElse');

  it('should be run the second callback', () => {
  const first = jest.fn();
  const second = jest.fn();

  ifElse(() => Math.sqrt(25) > 10, first, second);
  expect(second.mock.calls.length)
    .toBe(1);
  });

  it('should not be run the first callback', () => {
    const first = jest.fn();
    const second = jest.fn();
  
    ifElse(() => Math.sqrt(25) > 10, first, second);
    expect(first.mock.calls.length)
      .toBe(0);
    });

  it('should be run the first callback', () => {
    const first = jest.fn();
    const second = jest.fn();
    
    ifElse(() => Math.sqrt(25) > 1, first, second);
    expect(first.mock.calls.length)
      .toBe(1);
    });

  it('should be run the second callback', () => {
    const first = jest.fn();
    const second = jest.fn();
      
    ifElse(() => Math.sqrt(25) > 5, first, second);
    expect(second.mock.calls.length)
      .toBe(1);
    });
    
  it('should not be run the second callback', () => {
    const first = jest.fn();
    const second = jest.fn();
        
    ifElse(() => Math.sqrt(25) > 1, first, second);
    expect(second.mock.calls.length)
     .toBe(0);
    });  
});
