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
} from './constants';

const MEMORY_SIZE = 256 * 1024 * 1024; // 256 MB

export const MIN_MEMORY_ADDRESS = 0;
export const MAX_MEMORY_ADDRESS = MEMORY_SIZE - 1;

export class Memory {

  constructor() {
    this._buffer = new ArrayBuffer(MEMORY_SIZE);
    this._view = new DataView(this._buffer);
  }

  getInt8(address) {
    this._throwIfInvalidAddress8(address);
    return this._view.getInt8(address, true);
  }

  setInt8(address, value) {
    this._throwIfInvalidAddress8(address);
    if (!Number.isInteger(value) || value < MIN_INT8 || value > MAX_INT8) {
      throw new Error('Invalid value');
    }
    this._view.setInt8(address, value, true);
  }

  getUint8(address) {
    this._throwIfInvalidAddress8(address);
    return this._view.getUint8(address, true);
  }

  setUint8(address, value) {
    this._throwIfInvalidAddress8(address);
    if (!Number.isInteger(value) || value < MIN_UINT8 || value > MAX_UINT8) {
      throw new Error('Invalid value');
    }
    this._view.setUint8(address, value, true);
  }

  getInt16(address) {
    this._throwIfInvalidAddress16(address);
    return this._view.getInt16(address, true);
  }

  setInt16(address, value) {
    this._throwIfInvalidAddress16(address);
    if (!Number.isInteger(value) || value < MIN_INT16 || value > MAX_INT16) {
      throw new Error('Invalid value');
    }
    this._view.setInt16(address, value, true);
  }

  getUint16(address) {
    this._throwIfInvalidAddress16(address);
    return this._view.getUint16(address, true);
  }

  setUint16(address, value) {
    this._throwIfInvalidAddress16(address);
    if (!Number.isInteger(value) || value < MIN_UINT16 || value > MAX_UINT16) {
      throw new Error('Invalid value');
    }
    this._view.setUint16(address, value, true);
  }

  getInt32(address) {
    this._throwIfInvalidAddress32(address);
    return this._view.getInt32(address, true);
  }

  setInt32(address, value) {
    this._throwIfInvalidAddress32(address);
    if (!Number.isInteger(value) || value < MIN_INT32 || value > MAX_INT32) {
      throw new Error('Invalid value');
    }
    this._view.setInt32(address, value, true);
  }

  getUint32(address) {
    this._throwIfInvalidAddress32(address);
    return this._view.getUint32(address, true);
  }

  setUint32(address, value) {
    this._throwIfInvalidAddress32(address);
    if (!Number.isInteger(value) || value < MIN_UINT32 || value > MAX_UINT32) {
      throw new Error('Invalid value');
    }
    this._view.setUint32(address, value, true);
  }

  getInt64(address) {
    this._throwIfInvalidAddress64(address);
    return this._view.getBigInt64(address, true);
  }

  setInt64(address, value) {
    this._throwIfInvalidAddress64(address);
    if (typeof value !== 'bigint' || value < MIN_INT64 || value > MAX_INT64) {
      throw new Error('Invalid value');
    }
    this._view.setBigInt64(address, value, true);
  }

  getUint64(address) {
    this._throwIfInvalidAddress64(address);
    return this._view.getBigUint64(address, true);
  }

  setUint64(address, value) {
    this._throwIfInvalidAddress64(address);
    if (typeof value !== 'bigint' || value < MIN_UINT64 || value > MAX_UINT64) {
      throw new Error('Invalid value');
    }
    this._view.setBigUint64(address, value, true);
  }

  _throwIfInvalidAddress8(address) {
    if (!Number.isInteger(address) || address < MIN_MEMORY_ADDRESS || address > MAX_MEMORY_ADDRESS) {
      throw new Error('Invalid address');
    }
  }

  _throwIfInvalidAddress16(address) {
    if (!Number.isInteger(address) || address < MIN_MEMORY_ADDRESS || address > MAX_MEMORY_ADDRESS - 1) {
      throw new Error('Invalid address');
    }
  }

  _throwIfInvalidAddress32(address) {
    if (!Number.isInteger(address) || address < MIN_MEMORY_ADDRESS || address > MAX_MEMORY_ADDRESS - 3) {
      throw new Error('Invalid address');
    }
  }

  _throwIfInvalidAddress64(address) {
    if (!Number.isInteger(address) || address < MIN_MEMORY_ADDRESS || address > MAX_MEMORY_ADDRESS - 7) {
      throw new Error('Invalid address');
    }
  }

}
