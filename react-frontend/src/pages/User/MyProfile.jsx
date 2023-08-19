import React, { useEffect, useState } from "react";
import Profile from "../../components/InfoBox/Profile";
import DeliveryAddress from "../../components/InfoBox/DeliveryAddress";
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
const MyProfile = () => {
  const id = useSelector(selectCurrentUserId);
  const [isFetch, setIsFetch] = useState(false);
  const { data, isLoading, isError } = useGetInfoQuery(id);
  const [modifyInfo] = useModifyInfoMutation(id);
  const [values, setValues] = useState({
    user_id: id,
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    newpassword: "",
    confirmPassword: "",
    defaultAddress: 0,
    address: [],
  });
  useEffect(() => {
    if (!isLoading && !isError && !isFetch) {
      setValues({
        ...values,
        firstname: data.customerInfo.firstname,
        lastname: data.customerInfo.lastname,
        email: data.customerInfo.user.email,
        username: data.customerInfo.user.username,
        defaultAddress: data.customerInfo.defaultAddress,
        address: data.customerInfo.address,
      });
      setIsFetch(true);
    }
  }, [isLoading, isError, isFetch, values, data]);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const changeAddress = (addresses) => {
    setValues({ ...values, address: addresses });
  };
  const changeDefaultAddress = (address) => {
    setValues({ ...values, defaultAddress: address });
  };
  const handleSaveInfo = async () => {
    try {
      await modifyInfo({ ...values });
      console.log("Here are the changes : ");
      console.log(values);
      setIsFetch(false);
    } catch (err) {
      toast.error("Save info failed");
    }
    window.location.reload(true);
  };
  console.log("here : ");
  console.log(values);
  return (
    <>
      {isLoading || isError ? (
        <div className="loading-section">
          <Loading />
        </div>
      ) : (
        <div className="my-profile-page">
          <Profile values={values} onChange={onChange} />
          <ChangePassword values={values} onChange={onChange} />
          <div className="save-info-btn">
            <button onClick={handleSaveInfo}>
              {" "}
              <FontAwesomeIcon icon={faCheck} />
              Save{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MyProfile;
