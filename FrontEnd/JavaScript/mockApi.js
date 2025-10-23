// Mock API to simulate backend
const mockProviders = [
  { id: 1, name: "Ali Repairs", category: "Electrical", rating: 4.8 },
  { id: 2, name: "Sara Cleaning", category: "Housekeeping", rating: 4.5 },
  { id: 3, name: "Tarek Plumbing", category: "Plumbing", rating: 4.7 },
];

const mockApi = {
  getProviders: () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ success: true, data: mockProviders }), 400)
    ),

  login: (email, password) =>
    new Promise((resolve) =>
      setTimeout(() => {
        if (email === "user@example.com" && password === "123456") {
          resolve({ success: true, token: "fake-jwt-token", user: { name: "John Doe" } });
        } else resolve({ success: false, message: "Invalid credentials" });
      }, 400)
    ),
};
