import { ALU } from './alu';
import { CU } from './cu';
import { MMU } from './mmu';
import { Register } from './register';

/**
 * Central Processing Unit
 */
export class CPU {

  constructor(memory) {
    this.regs = {
      ip: new Register(),
      sp: new Register(),
      bp: new Register(),
      flags: new Register(),
      r0: new Register(),
      r1: new Register(),
      r2: new Register(),
      r3: new Register(),
      r4: new Register(),
      r5: new Register(),
      r6: new Register(),
      r7: new Register(),
      r8: new Register(),
      r9: new Register(),
      r10: new Register(),
      r11: new Register(),
      r12: new Register(),
      r13: new Register(),
      r14: new Register(),
      r15: new Register(),
    };

    this.cu = new CU();
    this.alu = new ALU();
    this.mmu = new MMU(memory);
  }

}
