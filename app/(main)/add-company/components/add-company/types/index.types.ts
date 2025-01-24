export interface Address {
  zipCode: string;
  country: string;
  state: string;
  city: string;
  street: string;
  line1: string;
  line2: string;
}

export interface FormData {
  name: string;
  description: string;
  phone: string;
  address: Address;
  shippingAddress: Address;
  isGovernmental: boolean;
  industries: string[];
}
