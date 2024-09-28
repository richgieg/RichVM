import { it, expect, describe } from 'vitest';
import { VM } from '../src/vm';
import { Memory } from '../src/memory';
import { CPU } from '../src/cpu/cpu';

describe('VM', () => {

  it('should have all the necessary components', () => {
    const vm = new VM();
    expect(vm.memory).toBeInstanceOf(Memory);
    expect(vm.cpu).toBeInstanceOf(CPU);
  });

});
