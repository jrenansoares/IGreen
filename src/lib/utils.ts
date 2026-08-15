// Formats currency: 1250 -> R$ 1.250,00
export const formatCurrency = (value: string) => {
  const numericValue = value.replace(/\D/g, "");
  if (!numericValue) return "";
  const amount = parseInt(numericValue, 10) / 100;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
};

// Formats phone: 11988887777 -> (11) 98888-7777, 1188887777 -> (11) 8888-7777
export const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};

// Formats plate: ABC1234 or ABC1D23 -> ABC-1234 or ABC1D23
export const formatPlate = (value: string) => {
  const alphanumeric = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 7);
  if (alphanumeric.length <= 3) return alphanumeric;
  return `${alphanumeric.slice(0, 3)}-${alphanumeric.slice(3)}`;
};

// Validates plate format (Traditional ABC-1234 or Mercosul ABC1D23)
export const isValidPlate = (plate: string): boolean => {
  const clean = plate.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
  if (clean.length !== 7) return false;
  // Brazilian traditional: [A-Z]{3}[0-9]{4} or Mercosul: [A-Z]{3}[0-9][A-Z][0-9]{2}
  const traditionalPattern = /^[A-Z]{3}[0-9]{4}$/;
  const mercosulPattern = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;
  return traditionalPattern.test(clean) || mercosulPattern.test(clean);
};

// Validates phone number format (minimum DDD + 8 or 9 digits)
export const isValidPhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, "");
  // Brazil phone numbers: DDD (2 digits) + 8 or 9 digits = 10 or 11 digits
  return digits.length === 10 || digits.length === 11;
};
