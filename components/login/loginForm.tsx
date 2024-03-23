import { FormFields } from "@/components/login/loginLogic";
import { SubmitHandler, useForm } from "react-hook-form";
import CtaButton from "../commons.tsx/ctaButton";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface LoginFormProps {
  handleSubmitLoginForm: SubmitHandler<FormFields>;
  isLoginError: boolean;
}

function LoginForm({ handleSubmitLoginForm, isLoginError }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  return (
    <form
      className="flex flex-col gap-2 font-source
      text-body-regular text-white w-[350px]"
      onSubmit={handleSubmit(handleSubmitLoginForm)}
    >
      <label>Email</label>
      <input
        {...register("email", {
          required: "El email es obligatorio",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Email invalido",
          },
        })}
        type="text"
        placeholder="example@example.com"
        className="login-register-input"
      />
      {errors.email && (
        <p className="text-red-500 text-base-regular">{errors.email.message}</p>
      )}
      <label className="mt-4">Contraseña</label>
      <div className="login-register-input flex justify-between items-center">
        <input
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres.",
            },
          })}
          type={showPassword ? "text" : "password"}
          placeholder="password"
          className="bg-dark outline-none w-full"
        />
        <span
          className="cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeIcon className="h-6 w-6 text-white" />
          ) : (
            <EyeSlashIcon className="h-6 w-6 text-white" />
          )}
        </span>
      </div>
      {errors.password && (
        <p className="text-red-500 text-base-regular">
          {errors.password.message}
        </p>
      )}

      <p className="text-base-bold self-end mb-6">¿Olvidaste tu contraseña?</p>
      {isLoginError && (
        <div className="flex justify-center">
          <p className="text-red-500 text-base-regular">
            El email o la contraseña son incorrectos
          </p>
        </div>
      )}
      <div className="flex justify-center">
        <CtaButton disabled={isSubmitting} type="submit">
          {isSubmitting ? "Cargando..." : "Continuar"}
        </CtaButton>
      </div>
    </form>
  );
}

export default LoginForm;
