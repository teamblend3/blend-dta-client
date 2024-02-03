import ButtonList from "./ButtonList";
import usePopUpStore from "../../stores/usePopUpStroe";

function ProfileImage() {
  const isPopupVisible = usePopUpStore(state => state.isPopupVisible);
  const togglePopup = usePopUpStore(state => state.togglePopup);

  return (
    <div className="relative inline-block">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={togglePopup}
      >
        Profile Image
      </button>
      {isPopupVisible && <ButtonList />}
    </div>
  );
}

export default ProfileImage;
