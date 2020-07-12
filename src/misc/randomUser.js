export const randomUser = () => ({
  username: `User_${Math.random().toFixed(4)}`,
  id: Math.random().toFixed(4),
});
