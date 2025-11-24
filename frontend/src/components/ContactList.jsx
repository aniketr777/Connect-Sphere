import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import { useAuthStore } from "../store/useAuthStore";

function ContactList() {
  const { getAllContacts, allContacts, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <>
      {allContacts.map((contact) => (
        <div
          key={contact._id}
          className="flex items-center gap-3 p-3 cursor-pointer hover:bg-slate-700 transition-colors"
          onClick={() => setSelectedUser(contact)}
        >
          <div
            className={`avatar ${
              onlineUsers.includes(contact._id) ? "online" : ""
            }`}
          >
            <div className="size-12 rounded-full overflow-hidden">
              <img src={contact.profilePic || "/avatar.png"} alt={contact.fullName} />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-slate-200 font-medium truncate">
              {contact.fullName}
            </h4>
            <p className="text-slate-400 text-sm truncate">
              Last message preview...
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
export default ContactList;
