interface EmailTemplateProps {
  userEmail: string;
}

export const RecoveryEmailTemplate = ({ userEmail }: EmailTemplateProps) => (
  <div>
    <h1>Hi, {userEmail}!</h1>
    <p>Now you can reset the password for your email {userEmail} with this</p>
    <a
      href="https://feel-better-zeta.vercel.app"
      target="_blank"
      className=" text-white "
    >
      link
    </a>
    <br /> <br />
    <div>
      <a href="https://feel-better-zeta.vercel.app">FeelBetter</a> © 2024
    </div>
  </div>
);
