interface EmailTemplateProps {
  userEmail: string;
}

export const RecoveryEmailTemplate = ({ userEmail }: EmailTemplateProps) => (
  <div>
    <h2>Hola, Hi, Salut {userEmail}!</h2>
    <p>
      Ahora puedes restablecer la contraseña con este{" "}
      <a
        href="https://mejoraconfeelbetter.online/reset-password"
        target="_blank"
        className=" text-white text-body-bold"
      >
        link
      </a>
    </p>
    <p>
      Now you can reset the password with this{" "}
      <a
        href="https://mejoraconfeelbetter.online/reset-password"
        target="_blank"
        className=" text-white text-body-bold"
      >
        link
      </a>
    </p>
    <p>
      Vous pouvez maintenant réinitialiser le mot de passe avec ceci{" "}
      <a
        href="https://mejoraconfeelbetter.online/reset-password"
        target="_blank"
        className=" text-white text-body-bold"
      >
        link
      </a>
    </p>
    <br />
    <div>
      <a href="https://mejoraconfeelbetter.online">FeelBetter</a> © 2024
    </div>
  </div>
);
