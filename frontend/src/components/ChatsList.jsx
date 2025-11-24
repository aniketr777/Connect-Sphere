import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoChatsFound from "./NoChatsFound";
import { useAuthStore } from "../store/useAuthStore";

function ChatsList() {
  const { getMyChatPartners, chats, isUsersLoading, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getMyChatPartners();
  }, [getMyChatPartners]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;

  return (
    <>
      {chats.map((chat) => (
        <div
          key={chat._id}
          className="flex items-center gap-3 p-3 cursor-pointer hover:bg-slate-700 transition-colors"
          onClick={() => setSelectedUser(chat)}
        >
          <div
            className={`avatar ${
              onlineUsers.includes(chat._id) ? "online" : ""
            }`}
          >
            <div className="size-12 rounded-full overflow-hidden">
              <img src={chat.profilePic || "/avatar.png"} alt={chat.fullName} />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-slate-200 font-medium truncate">
              {chat.fullName}
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
export default ChatsList;
