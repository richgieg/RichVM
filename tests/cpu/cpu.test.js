import { it, expect, describe } from 'vitest';
import { CPU } from '../../src/cpu/cpu';
import { Register } from '../../src/cpu/register';
import { MMU } from '../../src/cpu/mmu';

describe('CPU', () => {

  it('should have all of the necessary components', () => {
    const cpu = new CPU();
    expect(cpu.regs.ip).toBeInstanceOf(Register);
    expect(cpu.regs.sp).toBeInstanceOf(Register);
    expect(cpu.regs.bp).toBeInstanceOf(Register);
    expect(cpu.regs.flags).toBeInstanceOf(Register);
    expect(cpu.regs.r0).toBeInstanceOf(Register);
    expect(cpu.regs.r1).toBeInstanceOf(Register);
    expect(cpu.regs.r2).toBeInstanceOf(Register);
    expect(cpu.regs.r3).toBeInstanceOf(Register);
    expect(cpu.regs.r4).toBeInstanceOf(Register);
    expect(cpu.regs.r5).toBeInstanceOf(Register);
    expect(cpu.regs.r6).toBeInstanceOf(Register);
    expect(cpu.regs.r7).toBeInstanceOf(Register);
    expect(cpu.regs.r8).toBeInstanceOf(Register);
    expect(cpu.regs.r9).toBeInstanceOf(Register);
    expect(cpu.regs.r10).toBeInstanceOf(Register);
    expect(cpu.regs.r11).toBeInstanceOf(Register);
    expect(cpu.regs.r12).toBeInstanceOf(Register);
    expect(cpu.regs.r13).toBeInstanceOf(Register);
    expect(cpu.regs.r14).toBeInstanceOf(Register);
    expect(cpu.regs.r15).toBeInstanceOf(Register);
    expect(cpu.mmu).toBeInstanceOf(MMU);
  });

});
