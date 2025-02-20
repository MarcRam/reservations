// equipmentResource.js
import { Resource } from './resource.js'

export class EquipmentResource extends Resource {
  constructor(options) {
    super(options)
    // For instance, each piece of equipment might have a serial number, brand, or condition rating.
    this.serialNumber = options.serialNumber
    this.brand = options.brand
  }

  // Example method: check if equipment is due for maintenance
  needsMaintenance() {
    const usageCount = this.getAttribute('usageCount') || 0
    return usageCount > 100 // Arbitrary rule
  }
}