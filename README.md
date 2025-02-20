# Reservations

Design project for a resource booking system

## 1. Base Resource Class

Purpose: Provide a shared foundation (e.g., id, name, capacity, location, etc.) and generic methods (like checking basic availability).

This structure allows you to store generic resource properties (e.g., id, name, capacity) while giving each specialized resource type the flexibility to add its own attributes and methods.

### Notes on the attributes Property
	•	The attributes object is a simple way to store custom fields that may vary by resource type.
	•	We can add new properties at runtime with setAttribute().
	•	This approach keeps the base Resource class from becoming cluttered while still allowing for extension or specialized needs.

## 2. Specialized Resource Classes

Below are some examples of how you might extend the base Resource class for different use cases. Each specialized class overrides or adds attributes and methods that are unique to that resource type.

### 2.1. Restaurant Table Resource
Extends the base resource class to include attributes for:
   •	Table Shape
   •	Allows High Chair
   •	start and endtime 

### 2.2. Meeting Room Resource
Extends the base resource class to include attributes for:
   •	Has Projector
   •	Has Whiteboard
   •	Max Occupancy
\   •	start and endtime 

### 2.3. Rental Equipment Resource
    •	Serial Number
    •	Brand
    •	Usage

## Usage Example

```
import { TableResource } from './tableResource.js';
import { MeetingRoomResource } from './meetingRoomResource.js';
import { EquipmentResource } from './equipmentResource.js';

// Create a restaurant table resource
const table1 = new TableResource({
  id: 'table-1',
  name: 'Window Table - 1',
  capacity: 4,
  location: 'Main Dining Room',
  tableShape: 'round',
  allowHighChair: true
});

// Create a meeting room resource
const meetingRoom = new MeetingRoomResource({
  id: 'mr-101',
  name: 'Conference Room 101',
  capacity: 10,
  location: 'Building A, 3rd Floor',
  hasProjector: true,
  hasWhiteboard: true
});

// Create a piece of rental equipment
const bikeRental = new EquipmentResource({
  id: 'bike-22',
  name: 'Mountain Bike #22',
  brand: 'TrailMaster',
  attributes: {
    usageCount: 95
  }
});

// Use their methods:
console.log(table1.isAvailable('2025-02-21 18:00', '2025-02-21 20:00'));  // true/false
console.log(meetingRoom.getEffectiveCapacity('theater'));                 // e.g., 20 if your logic modifies capacity
console.log(bikeRental.needsMaintenance());                               // e.g., false if usageCount < 100

```
