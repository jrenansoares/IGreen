// Formats currency: 1250 -> R$ 1.250,00
export const formatCurrency = (value: string) => {
  const numericValue = value.replace(/\D/g, "");
  if (!numericValue) return "";
  const amount = parseInt(numericValue) / 100;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
};

// Formats phone: 11988887777 -> (11) 98888-7777
export const formatPhone = (value: string) => {
  const numericValue = value.replace(/\D/g, "").slice(0, 11);
  if (numericValue.length === 0) return "";
  if (numericValue.length <= 2) return `(${numericValue}`;
  if (numericValue.length <= 7)
    return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
  return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7)}`;
};

// Formats plate: ABC1234 or ABC1D23 -> ABC-1234
export const formatPlate = (value: string) => {
  const alphanumeric = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 7);
  if (alphanumeric.length <= 3) return alphanumeric;
  return `${alphanumeric.slice(0, 3)}-${alphanumeric.slice(3)}`;
};
