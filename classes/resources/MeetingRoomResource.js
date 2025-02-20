// meetingRoomResource.js
import { Resource } from './resource.js'

export class MeetingRoomResource extends Resource {
  constructor(options) {
    super(options)
    // Additional properties specific to meeting rooms:
    this.hasProjector = options.hasProjector ?? false
    this.hasWhiteboard = options.hasWhiteboard ?? false
    this.maxOccupancy = options.maxOccupancy
  }

  // Example override: maybe there's a special capacity rule if
  // the room layout changes (e.g., "boardroom" vs. "theater" layout).
  getEffectiveCapacity(layoutType) {
    if (layoutType === 'theater') {
      return this.capacity + 10 // Just an example
    }
    return this.capacity
  }
}