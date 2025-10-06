//export * from "./dist/index";

export const handler = async (event) => {
  console.log('Event:', event);
  return { statusCode: 200, body: 'Hello world' };
};