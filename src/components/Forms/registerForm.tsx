'use client';
import TextField from '@/components/Forms/textfield';
import { useState } from 'react';
import Button from './button';

export default function RegisterForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
      <h1 className="mb-4 text-3xl font-bold text-blue-700">Register</h1>
      <TextField
        name="email"
        type="email"
        placeholder="Enter your Email Id"
        value={email}
        setValue={setEmail}
        className="w-1/4 h-14 rounded-md border border-black bg-white m-2 p-5 text-black"
      ></TextField>
      <TextField
        name="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        setValue={setPassword}
        className="w-1/4 h-14 rounded-md border border-black bg-white m-2 p-5 text-black"
      ></TextField>
      <Button
        className="w-2/12 h-10 m-2 items-center rounded-lg text-white bg-blue-700 hover:bg-blue-900 text-xl"
        onClick={(e) => console.log(`Clicked! ${email}, ${password}`)}
        name="Login"
      ></Button>
    </div>
  );
}
