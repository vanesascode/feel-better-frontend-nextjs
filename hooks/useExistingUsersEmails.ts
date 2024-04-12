import { fetchExistingUsersEmails } from "@/api/users/users";
import { useEffect, useState } from "react";

export const useExistingUsersEmails = () => {
  const [existingUsersEmails, setExistingUsersEmails] = useState<string[]>([]);

  useEffect(() => {
    const getExistingUsersEmails = async () => {
      const emails = await fetchExistingUsersEmails();
      setExistingUsersEmails(emails);
    };

    getExistingUsersEmails();
  }, []);

  return { existingUsersEmails };
};
