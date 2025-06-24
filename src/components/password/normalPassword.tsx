import { Button, Input, message } from "antd";
import CheckItem from "../checkItem";
import { ChangeEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Status } from "../checkItem";

interface NormalPasswordProps {
    isAdult?: boolean;
}

export default function NormalPassword({isAdult}: NormalPasswordProps) {
    const router = useRouter();

    const pathname = usePathname();
  
    const [lengthError, setLengthError] = useState<Status>("normal");
    const [upperCaseError, setUpperCaseError] = useState<Status>("normal");
    const [lowerCaseError, setLowerCaseError] = useState<Status>("normal");
    const [numberError, setNumberError] = useState<Status>("normal");
    const [specialCharError, setSpecialCharError] = useState<Status>("normal");
    const [spaceError, setSpaceError] = useState<Status>("normal");
  
    const [next, setNext] = useState(false);
  
    const [messageApi, contextHolder] = message.useMessage();
  
    const success = () => {
      messageApi.open({
        type: "success",
        content: "Mật khẩu hợp lệ",
      });
    };
  
    const error = () => {
      messageApi.open({
        type: "error",
        content: "Mật khẩu không hợp lệ",
      });
    };
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setNext(false);
  
      if (e.target.value.length >= 8 && e.target.value.length <= 20) {
        setLengthError("success")
      } else {
        setLengthError("error")
      }
  
      if (e.target.value.match(/[A-Z]/)) {
        setUpperCaseError("success")
      } else {
        setUpperCaseError("error")
      }
  
      if (e.target.value.match(/[a-z]/)) {
        setLowerCaseError("success")
      } else {
        setLowerCaseError("error")
      }
  
      if (e.target.value.match(/[0-9]/)) {
        setNumberError("success")
      } else {
        setNumberError("error")
      }
      
      if (e.target.value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/)) {
        setSpecialCharError("success")
      } else {
        setSpecialCharError("error")
      }
      
      if (!e.target.value.includes(" ")) {
        setSpaceError("success")
      } else {
        setSpaceError("error")
      }
    }
  
    const handleCheckNext = () => {
      if (lengthError === "success" && upperCaseError === "success" && lowerCaseError === "success" && numberError === "success" && specialCharError === "success" && spaceError === "success") {
        success();
        setNext(true);
      } else {
        error();
      }
    }
  
    return <>
      {contextHolder}
  
        <div className="text-orange-500 text-xl font-semibold text-center mb-5 w-full md:w-2/3 mx-auto">{isAdult ? "Thực hành tạo mật khẩu thông thường" : "Bạn hãy thực hành tạo mật khẩu nhé"}</div>
  
        <div className="w-full flex justify-center items-center mb-5">
          <div className="w-1/3 md:w-1/4 font-semibold text-lg">Mật khẩu:</div>
          <Input.Password placeholder="Nhập mật khẩu" onChange={handleChange}/>
        </div>
  
        <div className="w-full bg-gray-100 p-5 rounded-lg mb-5">
          <div className="mb-5 text-lg font-semibold">
            Những điều kiện mật khẩu cần đảm bảo:
          </div>
          <CheckItem title="Có từ 8 đến 20 ký tự" status={lengthError} />
          <CheckItem title="Có ít nhất 1 chữ cái viết hoa" status={upperCaseError} />
          <CheckItem title="Có ít nhất 1 chữ cái viết thường" status={lowerCaseError} />
          <CheckItem title="Có ít nhất 1 chữ số" status={numberError} />
          <CheckItem title="Có ít nhất 1 ký tự đặc biệt" status={specialCharError} />
          <CheckItem title="Không được chứa khoảng trắng" status={spaceError} />
        </div>
  
        <div className="w-full bg-sky-100 p-5 rounded-lg">
          <div className="mb-5 text-lg font-semibold">
            Gợi ý cho bạn:
          </div>
  
          <div className="mb-3">
            <span className="font-semibold">Mật khẩu yếu:</span> 123456, 123456789, bindeptrai
          </div>
  
          <div className="mb-3">
            <span className="font-semibold">Mật khẩu mạnh:</span> Bin@123456, Matkhau123!, Xinchao&2025
          </div>
        </div>
  
        <Button variant="solid" color="orange" className="w-full mt-5" onClick={handleCheckNext}>Kiểm tra mật khẩu</Button>
  
        {next && <Button variant="solid" color="green" className="w-full mt-5" onClick={() => router.push(pathname + "/pin")}>Bài tiếp theo</Button>}
    </>
}