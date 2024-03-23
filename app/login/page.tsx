import ContentFrame from "@/components/commons.tsx/contentFrame";
import Header from "@/components/commons.tsx/header";
import LoginLogic from "@/components/login/loginLogic";

export default function Login() {
  return (
    <>
      <Header>
        <h1 className="text-heading2-bold">Accede a tu cuenta</h1>
      </Header>
      <ContentFrame>
        <LoginLogic />
      </ContentFrame>
    </>
  );
}
