import { Profile } from "./profile";
export class Comment{
    id:string;
    user_id:string;
    profile:Profile;
    article_id:string;
    body:string;
    date:string;
}
