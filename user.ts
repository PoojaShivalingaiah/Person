export interface Person {
  id: number;
  aadhar: number;
  byEmail: number;
  byPhone: number;
  cctc: number;
  contactNo: number;
  createdDate: Date;
  ectc: number;
  email: string;
  expMM: Date;
  expYY: Date;
  fresher: boolean;
  lastContactOn: Date;
  lastUpdatedDate: Date;
  name: string;
  overallFeedback: string;
  pan : string;
  passportNumber: number;
  skill: string;
  validTo: Date;
}
export interface Address {
  id: number;
  city: string;
  line1: string;
  line2: string;
  line3: string;
  pincode: string;
  state: string;
  clientDetails_id: number;
  country_id: number;
  person_id: number;
}

export interface Country {
  id:  number;
  countryCode: string;
  countryName: string;
  phoneCode: number;
}

export interface ProjectDetails {
  id: number;
  description: string;
  duration: number;
  endDate: Date;
  projectName: string;
  role: string;
  startDate: Date;
  technologies: string;
  person_id: number;
}

export interface ClientDetails {
  id: number;
  contactPerson: string;
  createDate: Date;
  name: string;
  phone: number;
  ref: string;
}

export interface JdDetails {
  id: number;
  colseTime: Date;
  communicationDetails: string;
  createdDate: Date;
  description: string;
  exp: string;
  jddetails: string;
  requiredSkills: string;
  title: string;
  clientDetails_id: number;
}

export interface PersonJD {
  person_id: number;
  jd_id: number;
}

export interface InterviewType {
  id: number;
  details: string;
  name: string;
}

export interface Interviewer {
  id: number;
  name: string;
}

export interface Interview {
  id: number;
  eligibleNextLevel: number;
  feedback: string;
  interviewedBy: string;
  interviewedDate: Date;
  interviewedSkills: string;
  recommendedNextLevel: string;
  interviewer_id: number;
  interviewtype_id: number;
  jd_id: number;
  person_id: number;
  personReference_id: number;
}

export interface PersonReference {
  id: number;
  companyName: string;
  email: string;
  name: string;
  phone: string;
  personReferenceType_id: number;
}

export interface PersonReferenceType {
  id: number;
  description: string;
  name: string;
}

export interface Resume {
  id: number;
  resume: string;
  updatedresume: number;
  person_id: number;
  updatedDateTime: Date;
}