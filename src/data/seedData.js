export const initialDonors = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 29,
    bloodGroup: "O+",
    organ: "Kidney",
    city: "Bengaluru",
    phone: "9876543210",
    status: "Active"
  },
  {
    id: 2,
    name: "Priya Nair",
    age: 34,
    bloodGroup: "A+",
    organ: "Liver",
    city: "Mysuru",
    phone: "9876543211",
    status: "Active"
  },
  {
    id: 3,
    name: "Arjun Kumar",
    age: 41,
    bloodGroup: "B+",
    organ: "Heart",
    city: "Bengaluru",
    phone: "9876543212",
    status: "Active"
  },
  {
    id: 4,
    name: "Sneha Rao",
    age: 26,
    bloodGroup: "O-",
    organ: "Kidney",
    city: "Chennai",
    phone: "9876543213",
    status: "Active"
  }
];

export const initialInventory = [
  {
    id: 1,
    organ: "Kidney",
    bloodGroup: "O+",
    donorName: "Rahul Sharma",
    hospital: "City Care Hospital",
    status: "Available",
    date: "2026-10-05"
  },
  {
    id: 2,
    organ: "Liver",
    bloodGroup: "A+",
    donorName: "Priya Nair",
    hospital: "Life Hospital",
    status: "Available",
    date: "2026-10-06"
  },
  {
    id: 3,
    organ: "Heart",
    bloodGroup: "B+",
    donorName: "Arjun Kumar",
    hospital: "City Care Hospital",
    status: "Reserved",
    date: "2026-10-03"
  },
  {
    id: 4,
    organ: "Kidney",
    bloodGroup: "O-",
    donorName: "Sneha Rao",
    hospital: "Metro Hospital",
    status: "Available",
    date: "2026-10-07"
  }
];

export const initialRequests = [
  {
    id: 1,
    recipientName: "Amit Verma",
    age: 45,
    bloodGroup: "O+",
    organ: "Kidney",
    hospital: "City Care Hospital",
    urgency: "High",
    status: "Pending",
    date: "2026-10-06"
  },
  {
    id: 2,
    recipientName: "Kavya Singh",
    age: 31,
    bloodGroup: "A+",
    organ: "Liver",
    hospital: "Life Hospital",
    urgency: "Medium",
    status: "Pending",
    date: "2026-10-05"
  }
];