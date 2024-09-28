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
} from '../constants';

export class Register {

  constructor() {
    this._buffer = new ArrayBuffer(8);
    this._view = new DataView(this._buffer);
  }

  getInt8() {
    return this._view.getInt8(0, true);
  }

  setInt8(value) {
    if (!Number.isInteger(value) || value < MIN_INT8 || value > MAX_INT8) {
      throw new Error('Invalid value');
    }
    this._view.setUint8(0, value, true);
  }

  getUint8() {
    return this._view.getUint8(0, true);
  }

  setUint8(value) {
    if (!Number.isInteger(value) || value < MIN_UINT8 || value > MAX_UINT8) {
      throw new Error('Invalid value');
    }
    this._view.setUint8(0, value, true);
  }

  getInt16() {
    return this._view.getInt16(0, true);
  }

  setInt16(value) {
    if (!Number.isInteger(value) || value < MIN_INT16 || value > MAX_INT16) {
      throw new Error('Invalid value');
    }
    this._view.setUint16(0, value, true);
  }

  getUint16() {
    return this._view.getUint16(0, true);
  }

  setUint16(value) {
    if (!Number.isInteger(value) || value < MIN_UINT16 || value > MAX_UINT16) {
      throw new Error('Invalid value');
    }
    this._view.setUint16(0, value, true);
  }

  getInt32() {
    return this._view.getInt32(0, true);
  }

  setInt32(value) {
    if (!Number.isInteger(value) || value < MIN_INT32 || value > MAX_INT32) {
      throw new Error('Invalid value');
    }
    this._view.setUint32(0, value, true);
  }

  getUint32() {
    return this._view.getUint32(0, true);
  }

  setUint32(value) {
    if (!Number.isInteger(value) || value < MIN_UINT32 || value > MAX_UINT32) {
      throw new Error('Invalid value');
    }
    this._view.setUint32(0, value, true);
  }

  getInt64() {
    return this._view.getBigInt64(0, true);
  }

  setInt64(value) {
    if (typeof value !== 'bigint' || value < MIN_INT64 || value > MAX_INT64) {
      throw new Error('Invalid value');
    }
    this._view.setBigInt64(0, value, true);
  }

  getUint64() {
    return this._view.getBigUint64(0, true);
  }

  setUint64(value) {
    if (typeof value !== 'bigint' || value < MIN_UINT64 || value > MAX_UINT64) {
      throw new Error('Invalid value');
    }
    this._view.setBigUint64(0, value, true);
  }

}
