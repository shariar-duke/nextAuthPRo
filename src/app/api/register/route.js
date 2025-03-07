import { dbConnect } from "@/lib/mongo.";
import { createUser } from "@/queries/users";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  // create here a mongodb data connection
  await dbConnect();
  // Encrypt  the password
  const hashedPassword = await bcrypt.hash(password, 5);

  // Form a Db payload

  const newUser = {
    name,
    email,
    password: hashedPassword,
  };
  // Update the Db
  try {
    await createUser(newUser);
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }

  return new NextResponse("User has been Created", {
    status: 201,
  });
};
