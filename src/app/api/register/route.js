import { NextResponse } from "next/server";
export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  // create here a mongodb data connection

  // Encrypt  the password

  // Form a Db payload

  // Update the Db

  return new NextResponse("User has been Created", {
    status: 201,
  });
};
