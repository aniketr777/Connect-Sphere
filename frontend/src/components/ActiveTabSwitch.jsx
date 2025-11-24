import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="flex items-center bg-slate-700 px-3 py-2">
      <button
        onClick={() => setActiveTab("chats")}
        className={`flex-1 py-2 text-sm font-medium ${
          activeTab === "chats"
            ? "text-cyan-400 border-b-2 border-cyan-400"
            : "text-slate-400"
        }`}
      >
        Chats
      </button>
      <button
        onClick={() => setActiveTab("contacts")}
        className={`flex-1 py-2 text-sm font-medium ${
          activeTab === "contacts"
            ? "text-cyan-400 border-b-2 border-cyan-400"
            : "text-slate-400"
        }`}
      >
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;
