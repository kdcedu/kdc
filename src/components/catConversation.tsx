interface CatConversationProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function CatConversation({
  children, icon
}: CatConversationProps) {

  return (
    <div className="flex items-end gap-2 h-fit p-6 text-lg border-6 border-sky-300 rounded-2xl font-semibold bg-white">
      <div>{children}</div>
      <div>{icon}</div>
    </div>
  );
}
