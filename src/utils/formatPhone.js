export function formatPhone(inputText) {
  const cleanedInput = inputText.replace(/\D/g, "");
  const formattedPhone = cleanedInput.replace(
    /^(\d{3})(\d{3})(\d{4})$/,
    "$1-$2-$3"
  );
  return formattedPhone;
}
