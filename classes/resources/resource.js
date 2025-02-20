// resource.js

export class Resource {
    /**
     * @param {Object} options
     * @param {string|number} options.id - Unique identifier for the resource
     * @param {string} options.name - Descriptive name of the resource (e.g., Table #1, Meeting Room A)
     * @param {number} [options.capacity=1] - How many people/items can it accommodate?
     * @param {string} [options.location] - Optional location info (e.g., "Floor 3, West Wing")
     * @param {Object} [options.attributes] - A generic object for custom attributes
     */
    constructor({
      id,
      name,
      capacity = 1,
      location,
      attributes = {}
    }) {
      this.id = id;
      this.name = name;
      this.capacity = capacity;
      this.location = location;
      // attributes: A "catch-all" for custom fields that might not
      // be in every resource type
      this.attributes = { ...attributes };
    }
  
    /**
     * Example method: checks if resource is available for a given date/time range.
     * Real-world logic might involve database lookups, calendars, or external APIs.
     */
    isAvailable(startTime, endTime) {
      // Placeholder logic:
      // For a base Resource, assume it's always available.
      // (Specialized classes can override or extend this.)
      return true;
    }
  
    /**
     * Another example: attach a new attribute or update an existing one.
     */
    setAttribute(key, value) {
      this.attributes[key] = value;
    }
  
    /**
     * Retrieve a custom attribute by key.
     */
    getAttribute(key) {
      return this.attributes[key];
    }
  }