export function formatPhone(value: string) {
  if (!value) return "";

  // Remove tudo que não for dígito
  const numbersOnly = value.replace(/\D/g, "").slice(0, 11);

  // Formata o número dinamicamente (Fixo vs Celular)
  if (numbersOnly.length <= 10) {
    return numbersOnly
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return numbersOnly
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}
