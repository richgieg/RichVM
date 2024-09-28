import { it, expect, describe } from 'vitest';
import { MMU } from '../../src/cpu/mmu';
import { Memory } from '../../src/memory';

describe('MMU', () => {

  it('should have all of the necessary components', () => {
    const memory = new Memory();
    const mmu = new MMU(memory);
    expect(mmu._memory).toBeInstanceOf(Memory);
  });

});
