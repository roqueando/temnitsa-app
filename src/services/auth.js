export const TOKEN_KEY = "@temnitsa-key";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const fakeLogin = () => localStorage.setItem(TOKEN_KEY, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcklkIjoxLCJ0aWVyIjo0LCJpYXQiOjE1MTYyMzkwMjJ9.DiisobFyPtB-cc326sAWA_33jdFqo-aG0Zj_5qGhi0M");
export const fakeLogout = () => localStorage.removeItem(TOKEN_KEY);

