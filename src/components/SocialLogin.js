import { doSocialLogin } from "@/app/actions";
export default function SocialLogin() {
  return (
    <form
      action={doSocialLogin}
      className="flex flex-col space-y-4 items-center"
    >
      <button
        className="bg-gradient-to-r from-pink-500 to-pink-700 text-white p-3 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 w-64 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-pink-300"
        type="submit"
        name="action"
        value="google"
      >
        Sign In With Google
      </button>

      <button
        className="bg-gradient-to-r from-gray-800 to-gray-600 text-white p-3 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 w-64 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-gray-300"
        type="submit"
        name="action"
        value="github"
      >
        Sign In With Github
      </button>
    </form>
  );
}
