export interface NewTeamFormValues {
  name: string;
  slug: string;
  avatar: string;
}

export interface NewTeamMembersFieldArray {
  members: PendingMember[];
}

export interface PendingMember {
  name: string | null;
  email: string;
  username: string | null;
  role: "OWNER" | "ADMIN" | "MEMBER";
  avatar: string | null;
  sendInviteEmail?: boolean;
}