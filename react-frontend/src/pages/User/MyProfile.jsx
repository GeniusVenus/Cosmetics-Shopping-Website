import React, { useEffect, useMemo, useState } from "react";
import Profile from "../../components/InfoBox/Profile";
import ChangePassword from "../../components/InfoBox/ChangePassword";
import { useSelector } from "react-redux";
import {
  useGetInfoQuery,
  useModifyInfoMutation,
} from "../../features/user/userApiSlice";
import { selectCurrentUserId } from "../../features/auth/authSlice";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import DeliveryAddress from "../../components/InfoBox/DeliveryAddress";
import ErrorDisplay from "../../components/ErrorDisplay";
const data = {
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  newpassword: "",
  confirmPassword: "",
  defaultAddress: -1,
  addresses: [],
};
const MyProfile = () => {
  const id = useSelector(selectCurrentUserId);
  // const [isFetch, setIsFetch] = useState(false);
  // const { data, isLoading, isError, refetch} = useGetInfoQuery(id);
  // const [modifyInfo] = useModifyInfoMutation(id);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    newpassword: "",
    confirmPassword: "",
    defaultAddress: -1,
    addresses: [],
  });
  const somethingChanged = useMemo(
    () =>
      values.firstname !== data.firstname ||
      values.lastname !== data.lastname ||
      values.email !== data.email ||
      values.username !== data.username ||
      values.newpassword !== data.newpassword ||
      values.defaultAddress !== data.defaultAddress ||
      JSON.stringify(values.addresses) !== JSON.stringify(data.addresses),
    [values]
  );
  // useEffect(() => {
  //   if (!isLoading && !isError && !isFetch) {
  //     setValues({
  //       ...values,
  //       firstname: data.customerInfo.firstname,
  //       lastname: data.customerInfo.lastname,
  //       email: data.customerInfo.user.email,
  //       username: data.customerInfo.user.username,
  //       defaultAddress: data.customerInfo.defaultAddress,
  //       address: data.customerInfo.address,
  //     });
  //     setIsFetch(true);
  //   }
  // }, [isLoading, isError, isFetch, values, data]);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const changeAddressInfo = (addresses, defaultAddress) => {
    if (addresses && defaultAddress !== null) {
      setValues({
        ...values,
        addresses: addresses,
        defaultAddress: defaultAddress,
      });
      return;
    }
    if (addresses) {
      setValues({ ...values, addresses: addresses });
      return;
    }
    setValues({ ...values, defaultAddress: defaultAddress });
  };
  const handleSaveInfo = async () => {
    if (values.newpassword !== values.confirmPassword) {
      toast.error("Password doensn't match");
      return;
    }
    try {
      // await modifyInfo({ user_id: id, ...values });
      setValues({ ...values, newpassword: "" });
      setValues({ ...values, confirmPassword: "" });
      toast.success("Save info successfully");
    } catch (err) {
      toast.error("Save info failed");
    }
  };
  // if (isLoading)
  //   <div className="loading-section">
  //     <Loading />
  //   </div>;
  // if (isError) return <ErrorDisplay refetch={refetch} />;
  return (
    <>
      <div className="my-profile-page">
        <Profile values={values} onChange={onChange} />
        <ChangePassword values={values} onChange={onChange} />
        <DeliveryAddress
          defaultAddress={values.defaultAddress}
          addresses={values.addresses}
          changeAddressInfo={changeAddressInfo}
        />
        <div className="save-info-btn">
          <button onClick={handleSaveInfo} disabled={!somethingChanged}>
            {" "}
            <FontAwesomeIcon icon={faCheck} />
            Save{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
