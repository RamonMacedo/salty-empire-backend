export default interface ICreateAddressDTO {
  user_id: string;
  description: string;
  address: string;
  address_number: string;
  complement?: string;
  is_active?: boolean;
}
