export enum ContactOption {
  Contact = "contact",
  Estimate = "estimate",
}

export interface IFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
  date: Date;
  windowQty: string;
  doorQty: string;
  features?: string[];
  survey: string[];
}
