import { useState } from "react";
import type { Theme } from "../../../app/providers/theme";
import { useAuth } from "../../../shared/lib/hooks/useAuth";
import { ProfileWrapper, Greeting, ChangeNameForm, Input, Button, Message } from "./styles";

interface Props {
  theme: Theme;
}

export const ProfileBlock = ({ theme }: Props) => {
  const { state, dispatch } = useAuth();
  const [newUsername, setNewUsername] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const handleUsernameChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUsername.trim()) {
      dispatch({ type: "CHANGE_USERNAME", value: newUsername });
      setMessage(`Username changed to ${newUsername}`);
      setNewUsername("");
      setIsEditing(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <ProfileWrapper $theme={theme}>
      <Greeting $theme={theme}>Hello, {state.username || "Guest"}</Greeting>

      {!isEditing ? (
        <Button onClick={() => setIsEditing(true)}>Change Username</Button>
      ) : (
        <ChangeNameForm onSubmit={handleUsernameChange}>
          <Input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="New username"
            required
          />
          <Button type="submit">Save</Button>
          <Button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </ChangeNameForm>
      )}
      {message && <Message>{message}</Message>}
    </ProfileWrapper>
  );
};
