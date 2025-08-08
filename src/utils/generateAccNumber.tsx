export function generateRandomAccountNumber(): string {
  let accountNumber = '';
  for (let i = 0; i < 14; i++) {
    accountNumber += Math.floor(Math.random() * 10); // số từ 0 → 9
  }
  return accountNumber;
}
