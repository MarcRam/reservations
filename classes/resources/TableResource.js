// tableResource.js
import { Resource } from './resource.js'

export class TableResource extends Resource {
  constructor(options) {
    super(options)
    // Perhaps a restaurant table has a unique attribute like tableShape or a preference for high chairs.
    // We can set them on the base `attributes` object or as dedicated properties.
    this.tableShape = options.tableShape || 'square'       // e.g., "square", "round"
    this.allowHighChair = options.allowHighChair ?? true   // default to true
   }

  // Example override: if the table is already reserved at a specific time, it’s not available.
  // Real implementation would check a reservation database, etc.
  isAvailable(startTime, endTime) {
    // Some specialized logic for a restaurant table
    // e.g., check if any existing reservation overlaps with the given startTime/endTime
    return super.isAvailable(startTime, endTime)
  }

  // Additional table-specific methods...
}