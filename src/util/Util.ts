export const getId = () => {
  const randomNumber = Math.floor(Math.random() * 10000000);
  const time = new Date().getTime();

  return `${randomNumber}_${time}`;
}
