import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addBike,
  deleteBike,
  editBike,
  getBikes,
} from "../../../../firebase/firebase";
import { StatusContext } from "../../../../utils/contexts";
import { BIKESCOLORS } from "../../../../utils/macros";

const defaultSelecteBike = {
  bikeid: "",
  modal: "",
  color: BIKESCOLORS[0],
  available: false,
  location: "",
};
const defaultImageUpload = { preview: null, file: null };

export default function useBikesHooks() {
  const navigate = useNavigate();
  const [selectedBike, setSelectedBike] = useState(defaultSelecteBike);
  const [imageUpload, setImageUpload] = useState(defaultImageUpload);
  const [bikesList, setbikesList] = useState([]);
  const { dispatch } = useContext(StatusContext);
  const handleClose = useCallback(() => {
    navigate("/dashboard/bikes");
    setSelectedBike(defaultSelecteBike);
    setImageUpload(defaultImageUpload);
  }, [navigate]);

  const handleChange = (e) => {
    if (e.target.name === "available")
      setSelectedBike({ ...selectedBike, [e.target.name]: e.target.checked });
    else setSelectedBike({ ...selectedBike, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setImageUpload({
      file: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const CreateBike = async () => {
    dispatch({ type: "showLoading", payload: true });
    const newBike = await addBike(
      selectedBike.available,
      selectedBike.modal,
      selectedBike.color,
      selectedBike.location,
      imageUpload.file
    );
    dispatch({ type: "showLoading", payload: false });

    if (newBike) {
      setbikesList([...bikesList, newBike]);
      handleClose();
    } else alert("create error");
  };

  const EditBike = async () => {
    dispatch({ type: "showLoading", payload: true });
    const editedBike = await editBike(selectedBike, imageUpload.file);
    dispatch({ type: "showLoading", payload: false });

    if (editedBike) {
      setbikesList([
        ...bikesList.map((bike) => {
          if (bike.bikeid === editedBike.bikeid) return editedBike;
          else return bike;
        }),
      ]);
      handleClose();
    } else alert("edit error");
  };

  const HandleEditBike = (bikeid) => {
    if (bikeid) navigate(`/dashboard/bikes/${bikeid}`);
    else alert("Error ID");
  };

  const fetchBikeById = useCallback(
    (bikeid) => {
      const bike = bikesList.find((bike) => bike.bikeid === bikeid);
      if (bike) setSelectedBike({ ...bike });
      else {
        alert("Id not Found");
        handleClose();
      }
    },
    [bikesList, handleClose]
  );

  const fetchBikes = useCallback(async () => {
    dispatch({ type: "showLoading", payload: true });
    const bikes = await getBikes();
    dispatch({ type: "showLoading", payload: false });

    if (bikes) setbikesList([...bikes]);
  }, [dispatch]);

  const DeleteBike = async (bikeid) => {
    if (window.confirm("Delete bike ?") === true) {
      dispatch({ type: "showLoading", payload: true });
      const isDeleted = await deleteBike(bikeid);
      dispatch({ type: "showLoading", payload: false });

      if (isDeleted) {
        setbikesList([
          ...bikesList.filter((bike) => bike.bikeid !== isDeleted),
        ]);
        handleClose();
        alert("Bike deleted");
      } else alert("delete Error");
    }
  };
  return [
    CreateBike,
    handleClose,
    handleChange,
    handleImage,
    selectedBike,
    imageUpload,
    fetchBikeById,
    EditBike,
    bikesList,
    setbikesList,
    DeleteBike,
    fetchBikes,
    HandleEditBike,
  ];
}
