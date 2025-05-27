import { Button, Image, Select } from "antd";
import AvatarPicker from "./avatarPicker";
import { DownOutlined, EditFilled, PlusOutlined } from "@ant-design/icons";
import Post, { PrivacyType } from "./post";
import { friendList } from "@/constant/profile";
import { useEffect, useMemo, useState } from "react";
import { defaultPrivacyList, PostType } from "@/constant/post";
import { usePathname, useRouter } from "next/navigation";
import CheckListButton, { BigTask } from "./checklistButton";

interface ProfileComponentProps {
  isView?: boolean;
  post: PostType[];
  setPost: (value: PostType[]) => void;
  finishRole?: boolean;
  setFinishRole?: (value: boolean) => void;
  finishPrivacy?: boolean;
  setFinishPrivacy?: (value: boolean) => void;
  privacyList: PrivacyType[];
  setPrivacyList?: (value: PrivacyType[]) => void;
}

export default function ProfileComponent({
  isView,
  post,
  setPost,
  finishRole,
  setFinishRole,
  finishPrivacy,
  setFinishPrivacy,
  privacyList,
  setPrivacyList,
}: ProfileComponentProps) {
  const { push } = useRouter();

  const pathName = usePathname();

  const selectOptions = useMemo(
    () => [
      {
        label: "Người lạ",
        value: "Người lạ",
      },
      ...friendList.map((friend) => ({
        label: "Bạn " + friend.name,
        value: friend.name,
      })),
    ],
    []
  );

  const [role, setRole] = useState("Người lạ");

  const [roleList, setRoleList] = useState<string[]>(["Người lạ"]);

  const roleTask = useMemo(() => {
    return {
      title: "Dưới các góc nhìn khác:",
      taskList: selectOptions.map((opt) => ({
        name: (
          <span>
            Xem hồ sơ dưới góc nhìn{" "}
            <span className="font-semibold">{opt.value}</span>
          </span>
        ),
        isDone: roleList.includes(opt.value),
      })),
    };
  }, [selectOptions, roleList]);

  const privacyTask = useMemo(() => {
    return {
      title: "Dưới góc nhìn của bạn:",
      taskList: defaultPrivacyList.map((pri) => ({
        name: (
          <span>
            Cài đặt quyền truy cập{" "}
            <span className="font-semibold">{pri.title}</span>
          </span>
        ),
        isDone: privacyList?.includes(pri.value),
      })),
    };
  }, [privacyList]);

  const bigTaskList: BigTask[] = useMemo(() => {
    return [roleTask, privacyTask];
  }, [roleTask, privacyTask]);

  useEffect(() => {
    if (roleList.length === selectOptions.length) setFinishRole?.(true);
  }, [roleList, setFinishRole, selectOptions.length]);

  useEffect(() => {
    if (privacyList?.length === 4) setFinishPrivacy?.(true);
  }, [privacyList, setFinishPrivacy]);

  const PostComponent = ({ p }: { p: PostType }) => (
    <Post
      setPrivacy={(value: PrivacyType, blockList?: string[]) => {
        if (!isView) {
          setPost(
            post.map((cur) => {
              if (cur === p)
                return { ...p, privacy: value, blockList: blockList || [] };
              else return cur;
            })
          );
        }
        if (!privacyList?.includes(value))
          setPrivacyList?.(privacyList ? [...privacyList, value] : [value]);
      }}
      isView={isView}
      post={p}
    />
  );

  console.log(privacyList);

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex w-fit items-center bg-orange-100 gap-5 absolute top-0 z-10 px-5 py-3 rounded-r-xl">
        <span className="text-orange-400 font-semibold">
          {isView ? "Bạn đang xem hồ sơ dưới góc nhìn:" : "Góc nhìn của bạn"}
        </span>
        {isView && (
          <Select
            className="flex w-36"
            options={selectOptions}
            defaultValue={role}
            onChange={(value) => {
              setRole(value);
              if (!roleList.includes(value)) setRoleList([...roleList, value]);
            }}
          />
        )}
      </div>

      <div className="w-full h-56">
        <Image
          alt="Background"
          preview={false}
          width="100%"
          height="100%"
          src="/backgrounds/backgroundDesktop.jpg"
        />
      </div>

      <div className="relative -top-28 flex flex-col items-center border-b border-gray-300 w-full pb-5">
        <AvatarPicker isView />

        <div className="mt-2 flex justify-center">
          <div className="flex flex-col gap-2 items-center">
            <div className="text-3xl font-semibold">Bin Béo</div>
            <div className="text-sm text-gray-500">50 người bạn</div>
          </div>
        </div>

        {!isView && (
          <div className="flex gap-5 mt-5">
            <Button variant="solid" color="blue" icon={<PlusOutlined />}>
              Thêm vào tin
            </Button>
            <Button icon={<EditFilled />} variant="filled" color="default">
              Chỉnh sửa trang cá nhân
            </Button>
            <Button icon={<DownOutlined />} variant="filled" color="default" />
          </div>
        )}
      </div>

      <div className="relative -top-24 px-5 flex flex-col gap-10">
        {post.map((p) => {
          if (isView) {
            if (p.privacy === "public") {
              return <PostComponent key={p.content} p={p} />;
            } else if (p.privacy === "friend") {
              if (role !== "Người lạ") {
                return <PostComponent key={p.content} p={p} />;
              }
            } else if (p.privacy === "custom") {
              if (!p.blockList.includes(role) && role !== "Người lạ")
                return <PostComponent key={p.content} p={p} />;
            }
          } else {
            return <PostComponent key={p.content} p={p} />;
          }
        })}
      </div>

      {isView && finishRole && finishPrivacy && (
        <div className="flex w-1/2 justify-end absolute bottom-0 z-10 px-5 py-2 bg-orange-100">
          <Button
            variant="solid"
            color="orange"
            onClick={() => push(pathName + "/finish")}
          >
            Hoàn thành
          </Button>
        </div>
      )}

      {isView && (
        <div className="absolute bottom-20 right-10">
          <CheckListButton
            title="Những nhiệm vụ cần thực hiện"
            bigTaskList={bigTaskList}
          />
        </div>
      )}
    </div>
  );
}
