import { Box } from "@mui/system";
import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { UserContext } from "../../utils/contexts";
import { ROLES } from "../../utils/macros";
import Manager from "./manager/Manager";
import User from "./user/User";

export default function Dashboard() {
  const { removeCookie, userData } = useContext(UserContext);

  const Logout = () => {
    removeCookie("logged", { path: "/" });
    removeCookie("userData", { path: "/" });
  };

  return (
    <>
      <Header role={userData.role} name={userData.name} Logout={Logout} />
      <Box sx={{...style,...bg}}>
        <Box sx={{ backdropFilter: "blur(15px)", width: "100%" }}>
          {userData?.role !== "" && userData.role === ROLES.USER ? (
            <User />
          ) : (
            <Manager />
          )}
        </Box>
      </Box>
    </>
  );
}

const style = {
  minHeight: "100vh",
  display: "flex",
};

const bg = {
  backgroundSize:"cover",
  backgroundImage:
    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1111%26quot%3b)' fill='none'%3e%3cpath d='M1040 169L1307 -98' stroke-width='8' stroke='url(%23SvgjsLinearGradient1112)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M959 208L658 509' stroke-width='8' stroke='url(%23SvgjsLinearGradient1113)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M511 511L898 124' stroke-width='10' stroke='url(%23SvgjsLinearGradient1112)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M609 25L254 380' stroke-width='10' stroke='url(%23SvgjsLinearGradient1114)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M473 168L719 -78' stroke-width='8' stroke='url(%23SvgjsLinearGradient1112)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M708 237L297 648' stroke-width='10' stroke='url(%23SvgjsLinearGradient1114)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M965 238L712 491' stroke-width='10' stroke='url(%23SvgjsLinearGradient1114)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1103 464L1333 234' stroke-width='8' stroke='url(%23SvgjsLinearGradient1115)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M150 1L-188 339' stroke-width='8' stroke='url(%23SvgjsLinearGradient1112)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M619 68L1019 -332' stroke-width='6' stroke='url(%23SvgjsLinearGradient1113)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M606 74L306 374' stroke-width='8' stroke='url(%23SvgjsLinearGradient1115)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M546 95L262 379' stroke-width='10' stroke='url(%23SvgjsLinearGradient1114)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M257 92L95 254' stroke-width='10' stroke='url(%23SvgjsLinearGradient1115)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M238 13L-153 404' stroke-width='10' stroke='url(%23SvgjsLinearGradient1114)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1236 477L956 757' stroke-width='8' stroke='url(%23SvgjsLinearGradient1114)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1037 308L881 464' stroke-width='8' stroke='url(%23SvgjsLinearGradient1114)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M713 398L1105 6' stroke-width='10' stroke='url(%23SvgjsLinearGradient1113)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M943 171L737 377' stroke-width='8' stroke='url(%23SvgjsLinearGradient1115)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M842 535L1058 319' stroke-width='6' stroke='url(%23SvgjsLinearGradient1115)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M704 194L1063 -165' stroke-width='10' stroke='url(%23SvgjsLinearGradient1112)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1314 44L967 391' stroke-width='8' stroke='url(%23SvgjsLinearGradient1115)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1197 403L1392 208' stroke-width='6' stroke='url(%23SvgjsLinearGradient1115)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M734 95L895 -66' stroke-width='10' stroke='url(%23SvgjsLinearGradient1114)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M352 411L631 132' stroke-width='8' stroke='url(%23SvgjsLinearGradient1114)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M187 416L-44 647' stroke-width='10' stroke='url(%23SvgjsLinearGradient1113)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M886 366L1272 -20' stroke-width='6' stroke='url(%23SvgjsLinearGradient1112)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M113 369L515 -33' stroke-width='8' stroke='url(%23SvgjsLinearGradient1114)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M244 166L480 -70' stroke-width='10' stroke='url(%23SvgjsLinearGradient1115)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M367 452L764 55' stroke-width='6' stroke='url(%23SvgjsLinearGradient1115)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M155 544L393 306' stroke-width='6' stroke='url(%23SvgjsLinearGradient1112)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1187 176L1528 -165' stroke-width='6' stroke='url(%23SvgjsLinearGradient1112)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M995 201L697 499' stroke-width='6' stroke='url(%23SvgjsLinearGradient1113)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M427 343L811 -41' stroke-width='10' stroke='url(%23SvgjsLinearGradient1113)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M926 257L697 486' stroke-width='6' stroke='url(%23SvgjsLinearGradient1115)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1048 451L1285 214' stroke-width='8' stroke='url(%23SvgjsLinearGradient1115)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1204 204L842 566' stroke-width='8' stroke='url(%23SvgjsLinearGradient1112)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M495 106L256 345' stroke-width='6' stroke='url(%23SvgjsLinearGradient1113)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M109 419L258 270' stroke-width='6' stroke='url(%23SvgjsLinearGradient1113)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M927 211L562 576' stroke-width='8' stroke='url(%23SvgjsLinearGradient1113)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1111'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1112'%3e%3cstop stop-color='rgba(245%2c 109%2c 29%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(245%2c 109%2c 29%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1113'%3e%3cstop stop-color='rgba(51%2c 176%2c 166%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(51%2c 176%2c 166%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient1114'%3e%3cstop stop-color='rgba(51%2c 176%2c 166%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(51%2c 176%2c 166%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient1115'%3e%3cstop stop-color='rgba(245%2c 109%2c 29%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(245%2c 109%2c 29%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e\")",
};
