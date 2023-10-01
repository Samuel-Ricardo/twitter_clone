import { LoginButton } from './button/user/login.component';

export const NotLogged = () => {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-lg bg-gradient-to-br from-gray-100/70 to-gray-400/40">
      <p> You are not logged in 😕</p>
      <div className="flex flex-row gap-3 self-end items-center">
        <p>Login 🌱 </p>
        <LoginButton />
      </div>
    </div>
  );
};
