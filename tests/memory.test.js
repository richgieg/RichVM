import { it, expect, describe } from 'vitest';
import { MAX_MEMORY_ADDRESS, Memory, MIN_MEMORY_ADDRESS } from '../src/memory';
import {
  MIN_INT8,
  MAX_INT8,
  MIN_UINT8,
  MAX_UINT8,
  MIN_INT16,
  MAX_INT16,
  MIN_UINT16,
  MAX_UINT16,
  MIN_INT32,
  MAX_INT32,
  MIN_UINT32,
  MAX_UINT32,
  MIN_INT64,
  MAX_INT64,
  MIN_UINT64,
  MAX_UINT64,
} from '../src/constants';

describe('Memory', () => {

  describe('getInt8', () => {

    it('should return 0 after creation', () => {
      const memory = new Memory();
      expect(memory.getInt8(0)).toBe(0);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.getInt8(MIN_MEMORY_ADDRESS - 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.getInt8(MAX_MEMORY_ADDRESS + 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.getInt8(1.1)).toThrow(/invalid address/i);
      expect(() => memory.getInt8(NaN)).toThrow(/invalid address/i);
    });

  });

  describe('setInt8', () => {

    it('should set when value is valid', () => {
      const memory = new Memory();
      memory.setInt8(0, 1);
      expect(memory.getInt8(0)).toBe(1);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.setInt8(MIN_MEMORY_ADDRESS - 1, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.setInt8(MAX_MEMORY_ADDRESS + 1, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setInt8(1.1, 1)).toThrow(/invalid address/i);
      expect(() => memory.setInt8(NaN, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if value < min', () => {
      const memory = new Memory();
      expect(() => memory.setInt8(0, MIN_INT8 - 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const memory = new Memory();
      expect(() => memory.setInt8(0, MAX_INT8 + 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setInt8(0, 1.1)).toThrow(/invalid value/i);
      expect(() => memory.setInt8(0, NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getUint8', () => {

    it('should return 0 after creation', () => {
      const memory = new Memory();
      expect(memory.getUint8(0)).toBe(0);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.getUint8(MIN_MEMORY_ADDRESS - 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.getUint8(MAX_MEMORY_ADDRESS + 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.getUint8(1.1)).toThrow(/invalid address/i);
      expect(() => memory.getUint8(NaN)).toThrow(/invalid address/i);
    });

  });

  describe('setUint8', () => {

    it('should set when value is valid', () => {
      const memory = new Memory();
      memory.setUint8(0, 1);
      expect(memory.getUint8(0)).toBe(1);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.setUint8(MIN_MEMORY_ADDRESS - 1, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.setUint8(MAX_MEMORY_ADDRESS + 1, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setUint8(1.1, 1)).toThrow(/invalid address/i);
      expect(() => memory.setUint8(NaN, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if value < min', () => {
      const memory = new Memory();
      expect(() => memory.setUint8(0, MIN_UINT8 - 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const memory = new Memory();
      expect(() => memory.setUint8(0, MAX_UINT8 + 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setUint8(0, 1.1)).toThrow(/invalid value/i);
      expect(() => memory.setUint8(0, NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getInt16', () => {

    it('should return 0 after creation', () => {
      const memory = new Memory();
      expect(memory.getInt16(0)).toBe(0);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.getInt16(MIN_MEMORY_ADDRESS - 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.getInt16(MAX_MEMORY_ADDRESS + 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.getInt16(1.1)).toThrow(/invalid address/i);
      expect(() => memory.getInt16(NaN)).toThrow(/invalid address/i);
    });

  });

  describe('setInt16', () => {

    it('should set when value is valid', () => {
      const memory = new Memory();
      memory.setInt16(0, 1);
      expect(memory.getInt16(0)).toBe(1);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.setInt16(MIN_MEMORY_ADDRESS - 1, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.setInt16(MAX_MEMORY_ADDRESS + 1, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setInt16(1.1, 1)).toThrow(/invalid address/i);
      expect(() => memory.setInt16(NaN, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if value < min', () => {
      const memory = new Memory();
      expect(() => memory.setInt16(0, MIN_INT16 - 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const memory = new Memory();
      expect(() => memory.setInt16(0, MAX_INT16 + 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setInt16(0, 1.1)).toThrow(/invalid value/i);
      expect(() => memory.setInt16(0, NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getUint16', () => {

    it('should return 0 after creation', () => {
      const memory = new Memory();
      expect(memory.getUint16(0)).toBe(0);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.getUint16(MIN_MEMORY_ADDRESS - 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.getUint16(MAX_MEMORY_ADDRESS + 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.getUint16(1.1)).toThrow(/invalid address/i);
      expect(() => memory.getUint16(NaN)).toThrow(/invalid address/i);
    });

  });

  describe('setUint16', () => {

    it('should set when value is valid', () => {
      const memory = new Memory();
      memory.setUint16(0, 1);
      expect(memory.getUint16(0)).toBe(1);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.setUint16(MIN_MEMORY_ADDRESS - 1, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.setUint16(MAX_MEMORY_ADDRESS + 1, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setUint16(1.1, 1)).toThrow(/invalid address/i);
      expect(() => memory.setUint16(NaN, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if value < min', () => {
      const memory = new Memory();
      expect(() => memory.setUint16(0, MIN_UINT16 - 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const memory = new Memory();
      expect(() => memory.setUint16(0, MAX_UINT16 + 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setUint16(0, 1.1)).toThrow(/invalid value/i);
      expect(() => memory.setUint16(0, NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getInt32', () => {

    it('should return 0 after creation', () => {
      const memory = new Memory();
      expect(memory.getInt32(0)).toBe(0);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.getInt32(MIN_MEMORY_ADDRESS - 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.getInt32(MAX_MEMORY_ADDRESS + 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.getInt32(1.1)).toThrow(/invalid address/i);
      expect(() => memory.getInt32(NaN)).toThrow(/invalid address/i);
    });

  });

  describe('setInt32', () => {

    it('should set when value is valid', () => {
      const memory = new Memory();
      memory.setInt32(0, 1);
      expect(memory.getInt32(0)).toBe(1);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.setInt32(MIN_MEMORY_ADDRESS - 1, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.setInt32(MAX_MEMORY_ADDRESS + 1, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setInt32(1.1, 1)).toThrow(/invalid address/i);
      expect(() => memory.setInt32(NaN, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if value < min', () => {
      const memory = new Memory();
      expect(() => memory.setInt32(0, MIN_INT32 - 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const memory = new Memory();
      expect(() => memory.setInt32(0, MAX_INT32 + 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setInt32(0, 1.1)).toThrow(/invalid value/i);
      expect(() => memory.setInt32(0, NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getUint32', () => {

    it('should return 0 after creation', () => {
      const memory = new Memory();
      expect(memory.getUint32(0)).toBe(0);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.getUint32(MIN_MEMORY_ADDRESS - 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.getUint32(MAX_MEMORY_ADDRESS + 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.getUint32(1.1)).toThrow(/invalid address/i);
      expect(() => memory.getUint32(NaN)).toThrow(/invalid address/i);
    });

  });

  describe('setUint32', () => {

    it('should set when value is valid', () => {
      const memory = new Memory();
      memory.setUint32(0, 1);
      expect(memory.getUint32(0)).toBe(1);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.setUint32(MIN_MEMORY_ADDRESS - 1, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.setUint32(MAX_MEMORY_ADDRESS + 1, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setUint32(1.1, 1)).toThrow(/invalid address/i);
      expect(() => memory.setUint32(NaN, 1)).toThrow(/invalid address/i);
    });

    it('should throw error if value < min', () => {
      const memory = new Memory();
      expect(() => memory.setUint32(0, MIN_UINT32 - 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const memory = new Memory();
      expect(() => memory.setUint32(0, MAX_UINT32 + 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setUint32(0, 1.1)).toThrow(/invalid value/i);
      expect(() => memory.setUint32(0, NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getInt64', () => {

    it('should return 0 after creation', () => {
      const memory = new Memory();
      expect(memory.getInt64(0)).toBe(0n);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.getInt64(MIN_MEMORY_ADDRESS - 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.getInt64(MAX_MEMORY_ADDRESS + 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.getInt64(1.1)).toThrow(/invalid address/i);
      expect(() => memory.getInt64(NaN)).toThrow(/invalid address/i);
    });

  });

  describe('setInt64', () => {

    it('should set when value is valid', () => {
      const memory = new Memory();
      memory.setInt64(0, 1n);
      expect(memory.getInt64(0)).toBe(1n);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.setInt64(MIN_MEMORY_ADDRESS - 1, 1n)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.setInt64(MAX_MEMORY_ADDRESS + 1, 1n)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setInt64(1.1, 1n)).toThrow(/invalid address/i);
      expect(() => memory.setInt64(NaN, 1n)).toThrow(/invalid address/i);
    });

    it('should throw error if value < min', () => {
      const memory = new Memory();
      expect(() => memory.setInt64(0, MIN_INT64 - 1n)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const memory = new Memory();
      expect(() => memory.setInt64(0, MAX_INT64 + 1n)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setInt64(0, 1.1)).toThrow(/invalid value/i);
      expect(() => memory.setInt64(0, NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getUint64', () => {

    it('should return 0 after creation', () => {
      const memory = new Memory();
      expect(memory.getUint64(0)).toBe(0n);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.getUint64(MIN_MEMORY_ADDRESS - 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.getUint64(MAX_MEMORY_ADDRESS + 1)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.getUint64(1.1)).toThrow(/invalid address/i);
      expect(() => memory.getUint64(NaN)).toThrow(/invalid address/i);
    });

  });

  describe('setUint64', () => {

    it('should set when value is valid', () => {
      const memory = new Memory();
      memory.setUint64(0, 1n);
      expect(memory.getUint64(0)).toBe(1n);
    });

    it('should throw error if address < min', () => {
      const memory = new Memory();
      expect(() => memory.setUint64(MIN_MEMORY_ADDRESS - 1, 1n)).toThrow(/invalid address/i);
    });

    it('should throw error if address > max', () => {
      const memory = new Memory();
      expect(() => memory.setUint64(MAX_MEMORY_ADDRESS + 1, 1n)).toThrow(/invalid address/i);
    });

    it('should throw error if address is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setUint64(1.1, 1n)).toThrow(/invalid address/i);
      expect(() => memory.setUint64(NaN, 1n)).toThrow(/invalid address/i);
    });

    it('should throw error if value < min', () => {
      const memory = new Memory();
      expect(() => memory.setUint64(0, MIN_UINT64 - 1n)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const memory = new Memory();
      expect(() => memory.setUint64(0, MAX_UINT64 + 1n)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const memory = new Memory();
      expect(() => memory.setUint64(0, 1.1)).toThrow(/invalid value/i);
      expect(() => memory.setUint64(0, NaN)).toThrow(/invalid value/i);
    });

  });

});
