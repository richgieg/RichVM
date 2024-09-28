import { CPU } from './cpu/cpu';
import { Memory } from './memory';

/**
 * Virtual Machine
 */
export class VM {

  constructor() {
    this.memory = new Memory();
    this.cpu = new CPU(this.memory);
  }

}
