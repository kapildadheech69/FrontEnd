export const MEMBERS = {
    1: {
        memberId: 1,
        firstName: "Kapil",
        lastName: "Dadheech",
        userName: "kapil161",
        address: "Ward no 15",
        state: "Rajasthan",
        city: "Jhunjhunu",
        email: "kamil.monu@gmail.com",
        dateOfBirth: new Date,
        physicianId: 1,
        physicianName: "John"
      },
      2: {
        memberId: 2,
        firstName: "Mudit",
        lastName: "Jain",
        userName: "mudit176",
        address: "Kheer Mohala",
        state: "Madhya pradesh",
        city: "Guna",
        email: "mudit.jain@gmail.com",
        dateOfBirth: new Date,
        physicianId: 2,
        physicianName: "Hari"
      },
      3: {
        memberId: 3,
        firstName: "Mohit",
        lastName: "Gite",
        userName: "mohit1999",
        address: "Sheetal nagar",
        state: "Madhya Pradesh",
        city: "Indore",
        email: "mohit.gite141@gmail.com",
        dateOfBirth: new Date,
        physicianId: 3,
        physicianName: "Mittal"
      },
      4: {
        memberId: 4,
        firstName: "Rohit",
        lastName: "Dadheech",
        userName: "rohit161",
        address: "Ward no 15",
        state: "Rajasthan",
        city: "Jhunjhunu",
        email: "rohit.sonu@gmail.com",
        dateOfBirth: new Date,
        physicianId: 5,
        physicianName: "Mark"
      },
      5: {
        memberId: 5,
        firstName: "Mahesh",
        lastName: "Khatod",
        userName: "mahesh161",
        address: "Ward no 15",
        state: "Rajasthan",
        city: "Jhunjhunu",
        email: "mahesh.khadod@gmail.com",
        dateOfBirth: new Date,
        physicianId: 8,
        physicianName: "Stacy"
      }

}

export const CLAIMS: any = {
  1: {
    claimId: 1,
    claimType: "Accident",
    claimAmount: 23456,
    remarks: "",
    memberId: 1
  },
  2: {
    claimId: 2,
    claimType: "Others",
    claimAmount: 2356,
    remarks: "",
    memberId: 2
  },
  3: {
    claimId: 3,
    claimType: "Urgent",
    claimAmount: 2356,
    remarks: "",
    memberId: 3
  }
}

export function findMemberById(memberId: number) {
  return Object.values(MEMBERS).filter(member => member.memberId == memberId)
}

export function findMemberByClaimId(claimid: number) {
  let claim = CLAIMS[claimid]
  return Object.values(MEMBERS).filter(member => member.memberId == claim.memberId)
}
export function findMemberByFirstNameAndLastName(firstName: string, lastName: string) {
  return Object.values(MEMBERS).filter(member => member.firstName == firstName 
    && member.lastName == lastName)
}
export function findMemberByPhysicianname(name: string) {
  return Object.values(MEMBERS).filter(member => member.physicianName == name)
}