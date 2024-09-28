import { it, expect, describe } from 'vitest';
import { Register } from '../../src/cpu/register';
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
} from '../../src/constants';

describe('Register', () => {

  describe('getInt8', () => {

    it('should return 0 after creation', () => {
      const register = new Register();
      expect(register.getInt8()).toBe(0);
    });

  });

  describe('setInt8', () => {

    it('should set when value is valid', () => {
      const register = new Register();
      register.setInt8(1);
      expect(register.getInt8()).toBe(1);
    });

    it('should throw error if value < min', () => {
      const register = new Register();
      expect(() => register.setInt8(MIN_INT8 - 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const register = new Register();
      expect(() => register.setInt8(MAX_INT8 + 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const register = new Register();
      expect(() => register.setInt8(1.1)).toThrow(/invalid value/i);
      expect(() => register.setInt8(NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getUint8', () => {

    it('should return 0 after creation', () => {
      const register = new Register();
      expect(register.getUint8()).toBe(0);
    });

  });

  describe('setUint8', () => {

    it('should set when value is valid', () => {
      const register = new Register();
      register.setUint8(1);
      expect(register.getUint8()).toBe(1);
    });

    it('should throw error if value < min', () => {
      const register = new Register();
      expect(() => register.setUint8(MIN_UINT8 - 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const register = new Register();
      expect(() => register.setUint8(MAX_UINT8 + 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const register = new Register();
      expect(() => register.setUint8(1.1)).toThrow(/invalid value/i);
      expect(() => register.setUint8(NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getInt16', () => {

    it('should return 0 after creation', () => {
      const register = new Register();
      expect(register.getInt16()).toBe(0);
    });

  });

  describe('setInt16', () => {

    it('should set when value is valid', () => {
      const register = new Register();
      register.setInt16(1);
      expect(register.getInt16()).toBe(1);
    });

    it('should throw error if value < min', () => {
      const register = new Register();
      expect(() => register.setInt16(MIN_INT16 - 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const register = new Register();
      expect(() => register.setInt16(MAX_INT16 + 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const register = new Register();
      expect(() => register.setInt16(1.1)).toThrow(/invalid value/i);
      expect(() => register.setInt16(NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getUint16', () => {

    it('should return 0 after creation', () => {
      const register = new Register();
      expect(register.getUint16()).toBe(0);
    });

  });

  describe('setUint16', () => {

    it('should set when value is valid', () => {
      const register = new Register();
      register.setUint16(1);
      expect(register.getUint16()).toBe(1);
    });

    it('should throw error if value < min', () => {
      const register = new Register();
      expect(() => register.setUint16(MIN_UINT16 - 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const register = new Register();
      expect(() => register.setUint16(MAX_UINT16 + 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const register = new Register();
      expect(() => register.setUint16(1.1)).toThrow(/invalid value/i);
      expect(() => register.setUint16(NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getInt32', () => {

    it('should return 0 after creation', () => {
      const register = new Register();
      expect(register.getInt32()).toBe(0);
    });

  });

  describe('setInt32', () => {

    it('should set when value is valid', () => {
      const register = new Register();
      register.setInt32(1);
      expect(register.getInt32()).toBe(1);
    });

    it('should throw error if value < min', () => {
      const register = new Register();
      expect(() => register.setInt32(MIN_INT32 - 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const register = new Register();
      expect(() => register.setInt32(MAX_INT32 + 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const register = new Register();
      expect(() => register.setInt32(1.1)).toThrow(/invalid value/i);
      expect(() => register.setInt32(NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getUint32', () => {

    it('should return 0 after creation', () => {
      const register = new Register();
      expect(register.getUint32()).toBe(0);
    });

  });

  describe('setUint32', () => {

    it('should set when value is valid', () => {
      const register = new Register();
      register.setUint32(1);
      expect(register.getUint32()).toBe(1);
    });

    it('should throw error if value < min', () => {
      const register = new Register();
      expect(() => register.setUint32(MIN_UINT32 - 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const register = new Register();
      expect(() => register.setUint32(MAX_UINT32 + 1)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const register = new Register();
      expect(() => register.setUint32(1.1)).toThrow(/invalid value/i);
      expect(() => register.setUint32(NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getInt64', () => {

    it('should return 0 after creation', () => {
      const register = new Register();
      expect(register.getInt64()).toBe(0n);
    });

  });

  describe('setInt64', () => {

    it('should set when value is valid', () => {
      const register = new Register();
      register.setInt64(1n);
      expect(register.getInt64()).toBe(1n);
    });

    it('should throw error if value < min', () => {
      const register = new Register();
      expect(() => register.setInt64(MIN_INT64 - 1n)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const register = new Register();
      expect(() => register.setInt64(MAX_INT64 + 1n)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const register = new Register();
      expect(() => register.setInt64(1.1)).toThrow(/invalid value/i);
      expect(() => register.setInt64(NaN)).toThrow(/invalid value/i);
    });

  });

  describe('getUint64', () => {

    it('should return 0 after creation', () => {
      const register = new Register();
      expect(register.getUint64()).toBe(0n);
    });

  });

  describe('setUint64', () => {

    it('should set when value is valid', () => {
      const register = new Register();
      register.setUint64(1n);
      expect(register.getUint64()).toBe(1n);
    });

    it('should throw error if value < min', () => {
      const register = new Register();
      expect(() => register.setUint64(MIN_UINT64 - 1n)).toThrow(/invalid value/i);
    });

    it('should throw error if value > max', () => {
      const register = new Register();
      expect(() => register.setUint64(MAX_UINT64 + 1n)).toThrow(/invalid value/i);
    });

    it('should throw error if value is not an integer', () => {
      const register = new Register();
      expect(() => register.setUint64(1.1)).toThrow(/invalid value/i);
      expect(() => register.setUint64(NaN)).toThrow(/invalid value/i);
    });

  });

});
