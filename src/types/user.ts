import { Profile } from "./profile";
import { Wallet } from "./wallet";

type UserRole = "USER" | "ADMIN";

export interface User {
	id: string;
	email: string;
	stripeCustomerId: string;
	subscriptionId?: string;
	referrerKey: string;
	role: UserRole;
	profile?: Profile;
	wallet?: Wallet;
}
